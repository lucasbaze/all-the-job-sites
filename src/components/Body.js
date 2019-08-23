import React, { useState } from 'react';
import styled from 'styled-components';

import SideBar from './SideBar.js';
import BottomMenu from './BottomMenu.js';
import MainContent from './MainContent.js';

const MainContainer = styled.div`
    display: Flex;
    flex-direction: row;
    align-items: stretch;
`;

const SideBarContainer = styled.div`
    flex: ${props => (props.collapsed ? 0.55 : 1)};
    height: calc(100vh - 50px);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    overflow-y: scroll;
    overflow-x: hidden;
    box-shadow: 3px 0px 5px #eaeaea;
    transition: flex 0.5s linear;
`;

const MainContentContainer = styled.div`
    flex: 3;
    overflow: scroll;
`;

const Body = props => {
    const [collapsed, setCollapsed] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const updateCollapsed = () => {
        console.log(collapsed);
        collapsed ? setCollapsed(false) : setCollapsed(true);
    };

    return (
        <MainContainer>
            <SideBarContainer collapsed={collapsed}>
                <SideBar
                    currentSite={props.currentSite}
                    setCurrentSite={props.setCurrentSite}
                    collapsed={collapsed}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <BottomMenu
                    updateCollapsed={updateCollapsed}
                    collapsed={collapsed}
                />
            </SideBarContainer>
            <MainContentContainer>
                <MainContent
                    currentSite={props.currentSite}
                    searchValue={searchValue}
                />
            </MainContentContainer>
        </MainContainer>
    );
};

export default Body;
