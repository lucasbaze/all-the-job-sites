import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';

import ExternalLink from './ExternalLink';

const StyledLoaderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;

    iframe {
        width: 100%;
        height: 100%;
        border: none;
    }
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

const SiteContent = props => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
        }, 1000);
    }, [props.site]);

    return (
        <StyledLoaderContainer>
            {visible ? (
                <StyledCover>
                    <Loader inline active inverted size="large" />
                </StyledCover>
            ) : null}
            {props.site.iframe_able ? (
                <iframe
                    title="currentSite"
                    src={
                        props.site.searchURL != null
                            ? props.site.searchURL
                            : props.site.site_url
                    }
                />
            ) : (
                <ExternalLink site={props.site} />
            )}
        </StyledLoaderContainer>
    );
};

const mapStateToProps = ({ site }) => {
    return { site: site };
};

export default connect(mapStateToProps)(SiteContent);
