import React, { useState, useEffect } from 'react';
import { Header, Input, Button, Modal, Image } from 'semantic-ui-react';
import JobSitesContainer from './JobSitesContainer.js';

import * as actions from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import BottomMenu from './BottomMenu.js';

const StyledSideBar = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    overflow: scroll;
    padding: 15px;

    .input {
        width: 100%;
    }
`;

const StyledButton = styled(Button)`
    padding: 0 10;
`;

const SideBarContainer = styled.div`
    flex: ${props => (props.collapsed ? 0.7 : 1)};
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    overflow-y: scroll;
    overflow-x: hidden;
    box-shadow: 3px 0px 5px rgba(112, 112, 112, 0.4);
    transition: flex 0.3s linear;
    z-index: 999;
`;

const StyledTopBar = styled.div`
    padding: 15px;
    box-shadow: 0px 3px 5px #eaeaea;
`;

const StyledLink = styled.div`
    margin-right: 10px;
    a {
        color: black;
        :hover {
            color: green;
        }
    }
`;

const SideBar = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [allOpen, setAllOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [openAbout, setOpenAbout] = useState(false);

    const updateCollapsed = () => {
        console.log(collapsed);
        collapsed ? setCollapsed(false) : setCollapsed(true);
    };

    useEffect(() => {
        if (searchValue.length >= 1) {
            setAllOpen(true);
        } else {
            setAllOpen(false);
        }
    }, [searchValue]);

    const handleSearchChange = event => {
        setIsLoading(true);
        setSearchValue(event.target.value);

        setTimeout(() => {
            if (searchValue.length < 1) return;

            setIsLoading(false);
        }, 300);

        console.log(`${searchValue} => ${event.target.value}`);
    };

    const updateSite = site => {
        // if (site === props.currentSite && !site.iframe_able) {
        //     let openURL =
        //         site.searchURL != null ? site.searchURL : site.site_url;
        //     let win = window.open(openURL, '_blank');
        //     win.focus();
        // } else {
        //     props.setCurrentSite(site);
        // }
        console.log(site);
    };

    return (
        <SideBarContainer collapsed={collapsed}>
            {collapsed ? null : (
                <StyledTopBar>
                    <Link to="/">
                        <Header as="h2" style={{ display: 'flex', marginBottom: 5 }}>
                            <Image
                                src="/apple-touch-icon.png"
                                style={{ width: 30, height: 30, marginRight: 10 }}
                            />
                            <p>All The Job Sites</p>
                        </Header>
                    </Link>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            marginBottom: 20,
                        }}
                    >
                        <StyledLink>
                            <Link to="/">Home</Link>
                        </StyledLink>
                        <StyledLink>
                            <Link to="/contact-us">Contact Us</Link>
                        </StyledLink>
                        <StyledLink>
                            <Link
                                onClick={() => {
                                    setOpenAbout(true);
                                    window.gtag('event', 'navigate', {
                                        event_category: 'navigation',
                                        event_label: 'open about us',
                                    });
                                }}
                            >
                                About Us
                            </Link>
                        </StyledLink>
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
                                    allOpen
                                        ? 'compress'
                                        : 'expand arrows alternate'
                                }
                                basic
                                onClick={() => {
                                    allOpen
                                        ? setAllOpen(false)
                                        : setAllOpen(true);
                                    window.gtag('event', 'collapse', {
                                        event_category: 'navigation',
                                        event_label: 'expand collapse links',
                                    });
                                }}
                            />
                            <Input
                                action={{
                                    color: 'lightgrey',
                                    icon: 'close',
                                    basic: true,
                                    onClick: function() {
                                        setSearchValue('');
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
            )}
            <StyledSideBar>
                <JobSitesContainer
                    updateSite={updateSite}
                    searchValue={searchValue}
                    allOpen={allOpen}
                />
            </StyledSideBar>
            <BottomMenu
                updateCollapsed={updateCollapsed}
                collapsed={collapsed}
            />
            <Modal
                size="tiny"
                open={openAbout}
                onClose={() => {
                    setOpenAbout(false);
                    window.gtag('event', 'navigate', {
                        event_category: 'navigation',
                        event_label: 'close about us',
                    });
                }}
                closeIcon
            >
                <Header as="h2" icon="thumbs up outline" content="Welcome!" />
                <Modal.Content>
                    <p>All The Job Sites is built by AllTheJobSites, Inc.</p>
                    <p>
                        The motivation of this site is to make job search
                        easier. There are hundreds of job boards and finding all
                        the jobs is a nightmare. All The Job Sites is the #1
                        place to make all of this easier.
                    </p>
                    <p>
                        The team currently consists of{' '}
                        <a href="https://www.linkedin.com/in/lucas-bazemore-b3ba1264/">
                            Lucas Bazemore
                        </a>
                        .
                    </p>
                </Modal.Content>
            </Modal>
        </SideBarContainer>
    );
};

function mapStateToProps({ site }) {
    return { site: site };
}

export default connect(
    mapStateToProps,
    actions
)(SideBar);
