import React, { useState } from 'react';
import { Message } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledHomePage = styled.div`
    padding: 15px;
`;

const HomePage = () => {
    const [visible, setVisible] = useState(true);

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
            <h1>HomePage</h1>
        </StyledHomePage>
    );
};

export default HomePage;
