import React, { useState, useEffect } from 'react';
import { Message, Header, Loader, Dimmer } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledHomePage = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 15px;
`;

const StyledCover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 50px);
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HomePage = () => {
    return (
        <StyledHomePage>
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
