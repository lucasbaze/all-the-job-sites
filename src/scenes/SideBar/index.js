import React, { useState, useEffect } from 'react';
import _ from 'lodash';

//State
import { useStateValue } from '../../state';
import * as searchActions from '../../reducers/searchReducer';
import firebase from '../../firebase';

//Components
import {
    Header,
    Input,
    Button,
    Segment,
    Image,
    Responsive,
    Icon,
    Menu,
    Sidebar,
} from 'semantic-ui-react';
import JobSitesContainer from '../JobSitesContainer.js';
import { Link } from 'react-router-dom';
import { LoginSignup } from '../../components/Modals';

import Logo from '../../components/Logo';
import SearchBar from './components/SearchBar';
import LoginSignupButtons from '../../components/LoginSignupButtons';
import LinkToAccount from './components/LinkToAccount';

//CSS
import styled from 'styled-components';
import { Row, Column, FlexBox } from '../../globals/styles';
import {
    StyledSideBar,
    StyledTopBar,
    StyledLink,
    StyledALink,
    MenuContainer,
} from './Styled';

const SideBar = ({ setOpen, location }) => {
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
        searchActions.updateSearch(dispatch, event.target.value);

        setTimeout(() => {
            if (searchValue.length < 1) return;
            setIsLoading(false);
        }, 300);

        console.log(`${searchValue} => ${event.target.value}`);
    };

    return (
        <>
            <StyledTopBar>
                <FlexBox justify="space-between">
                    <Logo />
                    <Responsive {...Responsive.onlyTablet.maxWidth}>
                        <Icon
                            name="bars"
                            size="large"
                            onClick={() => setOpen(true)}
                        />
                    </Responsive>
                </FlexBox>
                <div
                    style={{
                        marginBottom: 20,
                    }}
                >
                    {!user ? (
                        <LoginSignupButtons
                            setOpen={setOpenLoginSignup}
                            setIndex={setIndex}
                            fluid={true}
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
            <LoginSignup
                selectedIndex={index}
                open={openLoginSignup}
                setOpen={setOpenLoginSignup}
            />
        </>
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
