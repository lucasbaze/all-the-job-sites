import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 50px;
`;

const ExternalLink = ({ site }) => {
    return (
        <StyledContainer>
            <Header as="h2">
                {site.site_name} cannot be accessed from here.
            </Header>
            <p>
                This is common, so nothing to worry about. You can save links
                from {site.site_name} using the save feature above.
            </p>
        </StyledContainer>
    );
};

export default ExternalLink;
