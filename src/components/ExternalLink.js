import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

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

const ExternalLink = props => {
    const [count, setCount] = useState(4);
    const [{ searchValue }, dispatch] = useStateValue();

    console.log(searchValue);

    let timer = useRef();

    useEffect(() => {
        if (count > 0) {
            timer.current = setTimeout(() => {
                setCount(count - 1);
            }, 1000);
        } else {
            let path =
                props.site.search_url != null
                    ? props.site.search_url.replace(/%q/g, searchValue)
                    : props.site.site_url;
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
                            {props.site.site_name} will open in {count}
                        </Header>
                    </a>
                    <Header as="h3" style={{ marginBottom: 0 }}>
                        {props.site.site_name} cannot be accessed from here.
                    </Header>
                    <p>This is common, so nothing to worry about.</p>
                </div>
            ) : (
                <p>Click a link to open here!</p>
            )}
        </StyledContainer>
    );
};

export default ExternalLink;
