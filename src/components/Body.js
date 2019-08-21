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

const MainContentContainer = styled.div`
    flex: 3;
    background-color: #ececec;
    overflow: scroll;
`;

const Body = props => {
    const [collapsed, setCollapsed] = useState(false);
    const [mainURL, setMainURL] = useState('');

    const updateCollapsed = () => {
        collapsed ? setCollapsed(false) : setCollapsed(true);
    };

    return (
        <MainContainer>
            <SideBarContainer collapsed={collapsed}>
                <SideBar setMainURL={setMainURL} />
                <BottomMenu updateCollapsed={updateCollapsed} />
            </SideBarContainer>
            <MainContentContainer>
                <MainContent mainURL={mainURL} />
            </MainContentContainer>
        </MainContainer>
    );
};

export default Body;
