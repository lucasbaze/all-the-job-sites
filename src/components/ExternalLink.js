import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 50px;
`;

const ExternalLink = ({ site, searchValue }) => {
    //TODO: The below code will render a header that will countdown and then load the window in a new tab, except the issue is that if you click on another link that should load in another tab immediately after this one, countDown doesn't reset, so the page doesn't load.

    // const [countDown, setCountDown] = useState(3);
    //
    // useEffect(() => {
    //     if (countDown > 0) {
    //         setTimeout(() => {
    //             setCountDown(countDown - 1);
    //         }, 1000);
    //     } else {
    //         let openURL =
    //             site.searchURL != null ? site.searchURL : site.site_url;
    //         let win = window.open(openURL, '_blank');
    //         win.focus();
    //         setCountDown(3);
    //     }
    // }, [countDown]);

    return (
        <StyledContainer>
            <Header as="h2">
                {site.site_name} cannot be accessed from here.
            </Header>
            <p>
                This is common, so nothing to worry about. You can save links
                from {site.site_name} using the save feature above.
            </p>
            {/*<Header as="h3">Site will open in {countDown}</Header>*/}
            <Header as="h3">{searchValue}</Header>
        </StyledContainer>
    );
};

export default ExternalLink;
