import React, { useState, useEffect } from 'react';
import _ from 'lodash';

//State
import { useStateValue } from '../../state';
import * as actions from '../../actions';
import firebase from '../../firebase';

//Components
import { Header, Input, Button, Image, Responsive } from 'semantic-ui-react';
import JobSitesContainer from '../JobSitesContainer.js';
import { Link } from 'react-router-dom';
import { AboutUs } from '../../components/Modals';

import Logo from './components/Logo';

//CSS
import styled from 'styled-components';

import {
    StyledSideBar,
    SideBarContainer,
    StyledTopBar,
    StyledLink,
    StyledALink,
} from './Styled';

const SideBar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [allOpen, setAllOpen] = useState(false);
    const [openAbout, setOpenAbout] = useState(false);
    const [{ searchValue, user }, dispatch] = useStateValue();

    // If user is typing search, open all categories
    useEffect(() => {
        if (searchValue.length >= 1) {
            setAllOpen(true);
        } else {
            setAllOpen(false);
        }
    }, [searchValue]);

    const handleSearchChange = event => {
        setIsLoading(true);

        //UPDATE SEARCH VALUE
        actions.updateSearch(dispatch, event.target.value);

        setTimeout(() => {
            if (searchValue.length < 1) return;
            setIsLoading(false);
        }, 300);

        console.log(`${searchValue} => ${event.target.value}`);
    };

    return (
        <SideBarContainer>
            <StyledTopBar>
                <Logo />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginBottom: 20,
                    }}
                >
                    <StyledLink to="/">Home</StyledLink>
                    <Responsive as={StyledLink} to="/contact-us" minWidth={768}>
                        Contact Us
                    </Responsive>

                    <Responsive
                        as={StyledALink}
                        href="https://lucasbazemore.typeform.com/to/iAd0PV"
                        maxWidth={768}
                        target="_blank"
                        onClick={() =>
                            window.gtag('event', 'navigate', {
                                event_category: 'navigation',
                                event_label: 'contact us',
                            })
                        }
                    >
                        Contact Us
                    </Responsive>
                    <StyledLink
                        to=""
                        onClick={() => {
                            setOpenAbout(true);
                            window.gtag('event', 'navigate', {
                                event_category: 'navigation',
                                event_label: 'open about us',
                            });
                        }}
                    >
                        About Us
                    </StyledLink>
                    {!user ? null : <StyledLink to="/me">Profile</StyledLink>}
                </div>
                <div>
                    {user ? (
                        <a
                            href="#"
                            onClick={() => {
                                firebase
                                    .auth()
                                    .signOut()
                                    .then(function() {
                                        // Sign-out successful.
                                        window.location.reload();
                                    })
                                    .catch(function(error) {
                                        console.error(error);
                                        // An error happened.
                                        // window.location.reload();
                                    });
                            }}
                        >
                            Logout
                        </a>
                    ) : (
                        <a
                            href="#"
                            onClick={() => {
                                var provider = new firebase.auth.GoogleAuthProvider();
                                firebase.auth().signInWithRedirect(provider);
                            }}
                        >
                            Login
                        </a>
                    )}
                </div>
                <div>
                    <Header as="h4" style={{ marginBottom: 5 }}>
                        Looking for:
                    </Header>
                    <div
                        style={{
                            marginTop: 10,
                            textAlign: 'center',
                            display: 'flex',
                        }}
                    >
                        <Button
                            icon={
                                allOpen ? 'compress' : 'expand arrows alternate'
                            }
                            basic
                            onClick={() => {
                                allOpen ? setAllOpen(false) : setAllOpen(true);
                                window.gtag('event', 'collapse', {
                                    event_category: 'navigation',
                                    event_label: 'expand collapse links',
                                });
                            }}
                        />
                        <Input
                            action={{
                                icon: 'close',
                                basic: true,
                                onClick: function() {
                                    actions.updateSearch(dispatch, '');
                                    setAllOpen(false);
                                    window.gtag('event', 'search', {
                                        event_category: 'navigation',
                                        event_label: 'clear search',
                                    });
                                },
                            }}
                            actionPosition="left"
                            loading={isLoading}
                            onChange={e => {
                                handleSearchChange(e);
                                window.gtag('event', 'search', {
                                    event_category: 'navigation',
                                    event_label: 'searching',
                                });
                            }}
                            fluid
                            icon="search"
                            value={searchValue}
                            placeholder="Sales, React, Military..."
                            style={{ flex: 1 /* use full width */ }}
                        />
                    </div>
                </div>
            </StyledTopBar>
            <StyledSideBar>
                <JobSitesContainer
                    searchValue={searchValue}
                    allOpen={allOpen}
                />
            </StyledSideBar>
            <AboutUs open={openAbout} setOpen={setOpenAbout} />
        </SideBarContainer>
    );
};

export default SideBar;
