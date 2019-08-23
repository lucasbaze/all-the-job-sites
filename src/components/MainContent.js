import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

import HomePage from './Home.js';
import ExternalLink from './ExternalLink.js';
import Iframe from './Iframe.js';

const MainContainer = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    overflow: scroll;

    iframe {
        width: 100%;
        height: 100%;
    }
`;

const MainContent = ({ currentSite, searchValue }) => {
    const [mainContent, setMainContent] = useState(<HomePage />);

    useEffect(() => {
        if (currentSite !== {} && currentSite.iframe_able === true) {
            setMainContent(<Iframe currentSite={currentSite} />);
        } else if (currentSite !== {} && currentSite.iframe_able === false) {
            let openURL =
                currentSite.searchURL != null
                    ? currentSite.searchURL
                    : currentSite.site_url;
            let win = window.open(openURL, '_blank');
            win.focus();
            setMainContent(
                <ExternalLink site={currentSite} searchValue={searchValue} />
            );
        } else {
            setMainContent(<HomePage />);
        }
    }, [currentSite]);

    return <MainContainer>{mainContent}</MainContainer>;
};

export default MainContent;
