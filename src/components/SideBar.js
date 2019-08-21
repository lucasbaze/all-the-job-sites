import React, { useState } from 'react';
import { Header, Input } from 'semantic-ui-react';
import JobSitesContainer from './JobSitesContainer.js';

import styled from 'styled-components';

const StyledSideBar = styled.div`
    width: 100%;
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

    const handleSearchChange = event => {
        setIsLoading(true);
        setSearchValue(event.target.value);

        setTimeout(() => {
            if (searchValue.length < 1) return;

            setIsLoading(false);
        }, 300);
        console.log(searchValue);
    };

    const updateMainURL = url => {
        console.log(url);
        props.setMainURL(url);
    };

    return (
        <StyledSideBar>
            <Header as="h4" style={{ marginBottom: 5 }}>
                Looking for:
            </Header>
            <Input
                loading={isLoading}
                onChange={e => handleSearchChange(e)}
                icon="search"
                value={searchValue}
                placeholder="Sales, React, Military..."
            />
            <JobSitesContainer
                updateMainURL={updateMainURL}
                searchValue={searchValue}
            />
        </StyledSideBar>
    );
};

export default SideBar;
