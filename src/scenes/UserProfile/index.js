import React from 'react';
import { useStateValue } from '../../state';
import _ from 'lodash';

import styled from 'styled-components';
import { Header, Segment } from 'semantic-ui-react';
import SavedJobs from '../../components/SavedJobs';

const ProfileContainer = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: scroll;
`;

const StyledUserNav = styled(Segment)`
    display: flex;
    flex-direction: row;
`;

const StyledUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 7px;
`;

const StyledUserImage = styled.img`
    border-radius: 10px;
    width: 70px;
    height: 70px;
`;

const UserProfile = () => {
    const [{ user }, dispatch] = useStateValue();

    return (
        <ProfileContainer>
            {_.isEmpty(user) ? (
                <Header as="h1" content="Please Login" />
            ) : (
                <div>
                    <StyledUserNav>
                        <StyledUserImage src={user.photo} />
                        <StyledUserInfo>
                            <h1 style={{ margin: 0 }}>{user.displayName}</h1>
                            <p style={{ margin: 0 }}>{user.email}</p>
                        </StyledUserInfo>
                    </StyledUserNav>
                    <SavedJobs />
                </div>
            )}
        </ProfileContainer>
    );
};

export default UserProfile;
