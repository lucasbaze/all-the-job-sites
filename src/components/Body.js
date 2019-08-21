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
    flex: 1;
    height: calc(100vh - 50px);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    overflow-y: scroll;
    overflow-x: hidden;
`;

const MainContentContainer = styled.div`
    flex: 3;
    overflow: scroll;
`;

const Body = props => {
    const [collapsed, setCollapsed] = useState(false);

    const updateCollapsed = () => {
        console.log(collapsed);
        collapsed ? setCollapsed(false) : setCollapsed(true);
    };

    return (
        <MainContainer>
            <SideBarContainer>
                <SideBar
                    collapsed={collapsed}
                    setCurrentSite={props.setCurrentSite}
                />
                <BottomMenu updateCollapsed={updateCollapsed} />
            </SideBarContainer>
            <MainContentContainer>
                <MainContent currentSite={props.currentSite} />
            </MainContentContainer>
        </MainContainer>
    );
};

export default Body;
