import React, { useState, useEffect } from 'react';
import { Header, Input, Button } from 'semantic-ui-react';
import JobSitesContainer from './JobSitesContainer.js';

import styled from 'styled-components';

const StyledSideBar = styled.div`
    width: ${props => (props.collapsed ? '0px' : '100%')};
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    overflow: scroll;
    padding: 15px;
`;

const SideBar = props => {
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [allOpen, setAllOpen] = useState(false);

    useEffect(() => {
        if (searchValue.length >= 1) {
            setAllOpen(true);
        } else {
            setAllOpen(false);
        }
    }, [searchValue]);

    const handleSearchChange = event => {
        setIsLoading(true);
        setSearchValue(event.target.value);

        setTimeout(() => {
            if (searchValue.length < 1) return;

            setIsLoading(false);
        }, 300);
        console.log(searchValue);
    };

    const updateSite = site => {
        console.log(site);
        props.setCurrentSite(site);
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
                                    setSearchValue('');
                                    setAllOpen(false);
                                },
                            }}
                            actionPosition="left"
                            loading={isLoading}
                            onChange={e => handleSearchChange(e)}
                            icon="search"
                            value={searchValue}
                            placeholder="Sales, React, Military..."
                        />
                    </div>
                </div>
            )}
            <JobSitesContainer
                updateSite={updateSite}
                searchValue={searchValue}
                allOpen={allOpen}
            />
        </StyledSideBar>
    );
};

export default SideBar;
