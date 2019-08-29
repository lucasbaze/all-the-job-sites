import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Header, Popup } from 'semantic-ui-react';

import { useStateValue } from '../state';

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

const StyledInfo = styled.p`
    margin-top: 10px;
    font-size: 12px;
    :hover {
        cursor: pointer;
    }
`;

const ExternalLink = props => {
    const [count, setCount] = useState(4);
    const [{ searchValue }, dispatch] = useStateValue();

    let timer = useRef();
    let path = props.site.search_url != null
        ? props.site.search_url.replace(/%q/g, searchValue)
        : props.site.site_url;

    useEffect(() => {
        if (count > 0) {
            // TODO: only decrement this counter if the window is focused?
            timer.current = setTimeout(() => {
                setCount(count - 1);
            }, 1000);
        } else {
            window.open(path, 'blank');
        }
        return () => {
            clearTimeout(timer.current);
        };
    }, [count]);

    useEffect(() => {
        setCount(4);
        return () => {
            console.log('component unmounted');
        };
    }, [props.site]);

    let header;

    if (count > 0) {
        if (searchValue) {
            header = `Searching for "${searchValue}" on ${props.site.site_name} in ${count}...`;
        } else {
            header = `Searching ${props.site.site_name} in ${count}...`;
        }
    } else {
        if (searchValue) {
            header = `Click to search "${searchValue}" on ${props.site.site_name} →`;
        } else {
            header = `Click to search ${props.site.site_name} →`;
        }
    }

    return (
        <StyledContainer>
            {props.site.site_name ? (
                <div style={{ marginBottom: 40 }}>
                    <a href={path} target="_blank">
                        <Header as="h2" color="blue">{header}</Header>
                    </a>
                    <Popup
                        trigger={<StyledInfo>What's this?</StyledInfo>}
                        position="bottom center"
                        content={`We can't open ${props.site.site_name} in our webpage, so we'll open it in a new tab for you instead.`}
                    />
                </div>
            ) : (
                <p>Click a link to open here!</p>
            )}
        </StyledContainer>
    );
};

export default ExternalLink;
