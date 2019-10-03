import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Responsive, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router';

//State
import { useStateValue } from '../../state';

//Components
import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';
import LoginSignupButtons from '../../components/LoginSignupButtons';
import LinkToAccount from './components/LinkToAccount';

//CSS
import { FlexBox, Row } from '../../globals/styles';
import { StyledSideBarHeader } from './Styled';

const SideBarHeader = ({ setOpen, location }) => {
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
                        <LoginSignupButtons />
                    ) : location.pathname.includes('/me') ? null : (
                        <LinkToAccount user={user} />
                    )}
                </div>
                <FlexBox direction="row" align="stretch">
                    <SearchBar />
                </FlexBox>
            </StyledSideBarHeader>
            {/* Modal */}
        </>
    );
};

export default withRouter(SideBarHeader);
