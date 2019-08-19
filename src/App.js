import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import { Header, Button, Icon, Search, Input } from 'semantic-ui-react';
import TopBar from './components/TopBar.js';
import JobSitesContainer from './components/JobSitesContainer.js';

const MainContainer = styled.div`
    display: Flex;
    flex-direction: row;
    align-items: stretch;
`;

const SideBarContainer = styled.div`
    flex: ${props => (props.collapsed ? 0.15 : 1)};
    height: calc(100vh - 50px);
    box-shadow: 3px 0px 5px #eaeaea
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: flex 0.2s linear;
    z-index: 998;
`;

const SideBar = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    overflow: scroll;
    padding: 15px;
`;

const ControlMenu = styled.div`
    height: 50px;
    width: 100%;
    box-shadow: 0 -3px 5px #eaeaea;
    padding: 7px 15px;
    display: flex;
    flex-flow: row norwap;
`;

const MainContentContainer = styled.div`
    flex: 3;
    background-color: #ececec;
    overflow: scroll;

    iframe {
        width: 100%;
        height: 100%;
    }
`;

const StyledSearch = styled(Search)`
    input[type='text'].prompt {
        border-radius: 5px;
        width: 100%;
    }

    .ui .search {
    }

    width: 100%;
    margin-bottom: 10px;
`;

function App() {
    const [collapsed, setCollapsed] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [mainURL, setMainURL] = useState('https://remoteok.io/');

    const updateCollapsed = () => {
        collapsed ? setCollapsed(false) : setCollapsed(true);
    };

    const handleSearchChange = event => {
        setIsLoading(true);
        setSearchValue(event.target.value);

        setTimeout(() => {
            if (searchValue.length < 1) return;

            setIsLoading(false);
        }, 300);
        console.log(searchValue);
    };

    const updateMainURL = event => {
        console.log(event);
        setMainURL(event.target.value);
    };

    console.log(collapsed);
    console.log(mainURL);

    return (
        <div className="App">
            <TopBar />
            <MainContainer>
                <SideBarContainer collapsed={collapsed}>
                    <SideBar>
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
                    </SideBar>
                    <ControlMenu>
                        <Button
                            style={{ paddingLeft: 10, paddingRight: 10 }}
                            onClick={() => updateCollapsed()}
                            icon="compress"
                        />
                        <p>Settings</p>
                    </ControlMenu>
                </SideBarContainer>
                <MainContentContainer>
                    <iframe title="mainURL" src={mainURL} />
                </MainContentContainer>
            </MainContainer>
        </div>
    );
}

export default App;
