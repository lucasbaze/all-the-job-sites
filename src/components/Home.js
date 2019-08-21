import React, { useState } from 'react';
import { Message, Header } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 15px;
`;

const HomePage = () => {
    const [visible, setVisible] = useState(false);

    return (
        <StyledHomePage>
            {visible ? (
                <Message
                    icon="user circle"
                    header="New Here?"
                    onDismiss={() => setVisible(false)}
                    content="Save Jobs, Track Jobs, Get Notifications, and more when you sign up. Otherwise, search away!"
                />
            ) : null}
            <Header as="h2" style={{ marginBottom: 0 }}>
                All The Job Sites
            </Header>
            <Header as="h3" style={{ marginTop: 10 }}>
                Where your job search starts... and ends.
            </Header>
        </StyledHomePage>
    );
};

export default HomePage;
