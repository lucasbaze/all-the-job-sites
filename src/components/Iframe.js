import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Loader } from 'semantic-ui-react';

const StyledLoaderContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: calc(100vh - 50px);
`;

const StyledCover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Iframe = ({ currentSite }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
        }, 1000);
    }, []);

    return (
        <StyledLoaderContainer>
            {visible ? (
                <StyledCover>
                    <Loader inline active invrted size="large" />
                </StyledCover>
            ) : null}
            <iframe
                title="currentSite"
                src={
                    currentSite.searchURL != null
                        ? currentSite.searchURL
                        : currentSite.site_url
                }
            />
        </StyledLoaderContainer>
    );
};

export default Iframe;
