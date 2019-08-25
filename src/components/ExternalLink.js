import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Header, Button } from 'semantic-ui-react';

import { connect } from 'react-redux';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding-top: 50px;
    height: 100vh;
    width: 100%;
`;

const ExternalLink = props => {
    //TODO: The below code will render a header that will countdown and then load the window in a new tab, except the issue is that if you click on another link that should load in another tab immediately after this one, countDown doesn't reset, so the page doesn't load.

    useEffect(() => {
        console.log('hello');
    }, [props.site]);

    // let openURL =
    //     props.site.searchURL != null
    //         ? props.site.searchURL
    //         : props.site.site_url;
    // window.open(openURL, '_blank');
    // clearInterval(timer);
    // setCountDown(3);

    return (
        <StyledContainer>
            {props.site.site_name ? (
                <div style={{ marginBottom: 40 }}>
                    <a
                        href={
                            props.site.searchURL != null
                                ? props.site.searchURL
                                : props.site.site_url
                        }
                        target="_blank"
                    >
                        <Header as="h2" color="blue">
                            Open {props.site.site_name} in new tab
                        </Header>
                    </a>
                    <Header as="h3" style={{ marginBottom: 0 }}>
                        {props.site.site_name} cannot be accessed from here.
                    </Header>
                    <p>This is common, so nothing to worry about.</p>
                    {/*<Header as="h3">Site will open in {countDown}</Header>*/}
                    {/*<Header as="h3">{searchValue}</Header>*/}
                </div>
            ) : (
                <p>Click a link to open here!</p>
            )}
        </StyledContainer>
    );
};

const mapStateToProps = ({ site }) => {
    return { site: site };
};

export default connect(mapStateToProps)(ExternalLink);
