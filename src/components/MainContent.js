import React, { useState, useEffect } from 'react';
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
    const [mainContent, setMainContent] = useState(<HomePage />);

    useEffect(() => {
        if (currentSite !== {} && currentSite.iframe_able === true) {
            setMainContent(
                <iframe title="currentSite" src={currentSite.site_url} />
            );
        } else if (currentSite !== {} && currentSite.iframe_able === false) {
            //TODO: open url in a new tab
            let win = window.open(currentSite.site_url, '_blank');
            win.focus();
            setMainContent(<ExternalLink site={currentSite} />);
        } else {
            setMainContent(<HomePage />);
        }
    }, [currentSite]);

    return <MainContainer>{mainContent}</MainContainer>;
};

export default MainContent;
