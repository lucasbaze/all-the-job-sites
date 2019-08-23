import React, { useState } from 'react';
import styled from 'styled-components';

import SideBar from './SideBar.js';
import BottomMenu from './BottomMenu.js';
import MainContent from './MainContent.js';

import { Button, Popup, Modal, Header } from 'semantic-ui-react';

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

const FeedbackButton = styled(Button)`
    position: absolute;
    bottom: 3px;
    right: 0px;
`;

const Body = props => {
    const [collapsed, setCollapsed] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [open, setOpen] = useState(false);

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
            <FeedbackButton content="Feedback" onClick={() => setOpen(true)} />
            <Modal
                size="tiny"
                open={open}
                onClose={() => setOpen(false)}
                closeIcon
            >
                <Header as="h2" icon="rocket" content="Coming Soon!" />
                <Modal.Content>Stuff</Modal.Content>
            </Modal>
        </MainContainer>
    );
};

export default Body;
