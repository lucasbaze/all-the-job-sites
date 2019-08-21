import React from 'react';
import styled from 'styled-components';

import HomePage from './Home.js';

const MainContainer = styled.div`
    height: 100%;
    width: 100%;

    iframe {
        width: 100%;
        height: 100%;
    }
`;

const MainContent = props => {
    return (
        <MainContainer>
            {props.mainURL === '' ? (
                <HomePage />
            ) : (
                <iframe title="currentSite" src={props.mainURL} />
            )}
        </MainContainer>
    );
};

export default MainContent;
