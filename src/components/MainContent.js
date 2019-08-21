import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

import HomePage from './Home.js';
import ExternalLink from './ExternalLink.js';

const MainContainer = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    overflow: scroll;

    iframe {
        width: 100%;
        height: 100%;
    }
`;

const MainContent = ({ currentSite }) => {
    let mainContent;

    if (currentSite !== {} && currentSite.iframe_able === true) {
        mainContent = <iframe title="currentSite" src={currentSite.site_url} />;
    } else if (currentSite !== {} && currentSite.iframe_able === false) {
        //TODO: open url in a new tab
        mainContent = <ExternalLink site={currentSite} />;
    } else {
        mainContent = <HomePage />;
    }

    return <MainContainer>{mainContent}</MainContainer>;
};

export default MainContent;
