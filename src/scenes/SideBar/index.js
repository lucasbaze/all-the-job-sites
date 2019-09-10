import React, { useState, useEffect } from 'react';
import _ from 'lodash';

//State
import { useStateValue } from '../../state';
import * as actions from '../../actions';
import firebase from '../../firebase';

//Components
import {
    Header,
    Input,
    Button,
    Segment,
    Image,
    Responsive,
} from 'semantic-ui-react';
import JobSitesContainer from '../JobSitesContainer.js';
import { Link } from 'react-router-dom';
import { LoginSignup } from '../../components/Modals';

import Logo from '../../components/Logo';
import SearchBar from './components/SearchBar';
import LoginSignupButtons from './components/LoginSignupButtons';
import LinkToAccount from './components/LinkToAccount';

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
    const [openLoginSignup, setOpenLoginSignup] = useState(false);
    const [index, setIndex] = useState(0);
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

    const authLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    };

    const authLogout = () => {
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
    };

    return (
        <SideBarContainer>
            <StyledTopBar>
                <Logo />
                <div
                    style={{
                        marginBottom: 20,
                    }}
                >
                    {!user ? (
                        <LoginSignupButtons
                            setOpenLoginSignup={setOpenLoginSignup}
                            setIndex={setIndex}
                        />
                    ) : (
                        <LinkToAccount user={user} />
                    )}
                </div>
                <SearchBar
                    allOpen={allOpen}
                    setAllOpen={setAllOpen}
                    isLoading={isLoading}
                    handleSearchChange={handleSearchChange}
                />
            </StyledTopBar>
            <StyledSideBar>
                <JobSitesContainer
                    searchValue={searchValue}
                    allOpen={allOpen}
                />
            </StyledSideBar>
            <LoginSignup
                selectedIndex={index}
                open={openLoginSignup}
                setOpen={setOpenLoginSignup}
                authLogin={authLogin}
            />
        </SideBarContainer>
    );
};

export default SideBar;

// <StyledLink to="/">Home</StyledLink>
// <Responsive as={StyledLink} to="/contact-us" minWidth={768}>
//     Contact Us
// </Responsive>
//
// <Responsive
//     as={StyledALink}
//     href="https://lucasbazemore.typeform.com/to/iAd0PV"
//     maxWidth={768}
//     target="_blank"
//     onClick={() =>
//         window.gtag('event', 'navigate', {
//             event_category: 'navigation',
//             event_label: 'contact us',
//         })
//     }
// >
//     Contact Us
// </Responsive>
// <StyledLink
//     to=""
//     onClick={() => {
//         setOpenAbout(true);
//         window.gtag('event', 'navigate', {
//             event_category: 'navigation',
//             event_label: 'open about us',
//         });
//     }}
// >
//     About Us
// </StyledLink>
// { !user ? null : <StyledLink to="/me">Profile</StyledLink> }
