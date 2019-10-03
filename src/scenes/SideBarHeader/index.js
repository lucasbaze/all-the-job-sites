import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Responsive, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router';

//State
import { useStateValue } from '../../state';
import * as searchActions from '../../reducers/searchReducer';
import { useDebounce } from '../../hooks';

//Components
import { LoginSignup } from '../../components/Modals';
import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';
import LoginSignupButtons from '../../components/LoginSignupButtons';
import LinkToAccount from './components/LinkToAccount';

//CSS
import { FlexBox } from '../../globals/styles';
import { StyledSideBarHeader } from './Styled';

const SideBarHeader = ({ setOpen, location }) => {
    const [openLoginSignup, setOpenLoginSignup] = useState(false);
    const [index, setIndex] = useState(0);
    const [{ searchValue, user }, dispatch] = useStateValue();

    return (
        <>
            {/* */}
            <StyledSideBarHeader>
                <FlexBox justify="space-between">
                    <Logo />
                    <Responsive maxWidth={767}>
                        <Icon
                            name="bars"
                            size="large"
                            onClick={() => setOpen(true)}
                        />
                    </Responsive>
                </FlexBox>
                <div style={{ marginBottom: 20 }}>
                    {!user ? (
                        <LoginSignupButtons
                            setOpen={setOpenLoginSignup}
                            setIndex={setIndex}
                            fluid={true}
                            size={'small'}
                        />
                    ) : location.pathname.includes('/me') ? null : (
                        <LinkToAccount user={user} />
                    )}
                </div>
                <SearchBar />
            </StyledSideBarHeader>
            {/* Modal */}
        </>
    );
};

export default withRouter(SideBarHeader);

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
