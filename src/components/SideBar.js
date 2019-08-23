import React, { useState, useEffect } from 'react';
import { Header, Input, Button } from 'semantic-ui-react';
import JobSitesContainer from './JobSitesContainer.js';

import styled from 'styled-components';

const StyledSideBar = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    overflow: scroll;
    padding: 15px;

    .input {
        width: 100%;
    }
`;

const SideBar = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [allOpen, setAllOpen] = useState(false);

    useEffect(() => {
        if (props.searchValue.length >= 1) {
            setAllOpen(true);
        } else {
            setAllOpen(false);
        }
    }, [props.searchValue]);

    const handleSearchChange = event => {
        setIsLoading(true);
        props.setSearchValue(event.target.value);

        setTimeout(() => {
            if (props.searchValue.length < 1) return;

            setIsLoading(false);
        }, 300);
        console.log(props.searchValue);
    };

    const updateSite = site => {
        if (site === props.currentSite && !site.iframe_able) {
            let openURL =
                site.searchURL != null ? site.searchURL : site.site_url;
            let win = window.open(openURL, '_blank');
            win.focus();
        } else {
            props.setCurrentSite(site);
        }
    };

    return (
        <StyledSideBar>
            {props.collapsed ? null : (
                <div>
                    <Header as="h4" style={{ marginBottom: 5 }}>
                        Looking for:
                    </Header>
                    <div
                        style={{
                            marginTop: 10,
                            marginBottoM: 10,
                            textAlign: 'center',
                            display: 'flex',
                        }}
                    >
                        <Button
                            icon={
                                allOpen ? 'compress' : 'expand arrows alternate'
                            }
                            basic
                            onClick={() =>
                                allOpen ? setAllOpen(false) : setAllOpen(true)
                            }
                        />
                        <Input
                            action={{
                                color: 'lightgrey',
                                icon: 'close',
                                basic: 'true',
                                onClick: function() {
                                    props.setSearchValue('');
                                    setAllOpen(false);
                                },
                            }}
                            actionPosition="left"
                            loading={isLoading}
                            onChange={e => handleSearchChange(e)}
                            icon="search"
                            value={props.searchValue}
                            placeholder="Sales, React, Military..."
                        />
                    </div>
                </div>
            )}
            <JobSitesContainer
                updateSite={updateSite}
                searchValue={props.searchValue}
                allOpen={allOpen}
            />
        </StyledSideBar>
    );
};

export default SideBar;
