import React, { useState } from 'react';
import { Button, Input, Modal, Header, List } from 'semantic-ui-react';
import styled from 'styled-components';

const TopBarContainer = styled.div`
    width: 100%;
    height: 50px;
    box-shadow: 0 3px 5px #eaeaea;
    display: flex;
    flex-direction: row;
    z-index: 999;
`;

const TopBar = props => {
    const [open, setOpen] = useState(false);

    return (
        <TopBarContainer>
            <div style={{ flex: 0.93, padding: '7px 15px' }}>
                <Button.Group style={{ width: '100%' }}>
                    <Button
                        onClick={() => {
                            setOpen(true);
                            // window.FB.AppEvents.logEvent(
                            //     'Login Button Clicked'
                            // );
                        }}
                        color="green"
                    >
                        Login
                    </Button>
                    <Button.Or />
                    <Button color="blue" onClick={() => setOpen(true)}>
                        Sign Up
                    </Button>
                </Button.Group>
            </div>
            <div
                style={{
                    flex: 3,
                    display: 'flex',
                    flexFlow: 'row nowrap',
                    padding: '7px 15px 7px 0',
                }}
            >
                <Button
                    style={{ minWidth: '150px', marginRight: 20 }}
                    content="Saved Jobs"
                    icon="heart"
                    color="red"
                    basic
                    onClick={() => setOpen(true)}
                />
                <Input
                    action={{
                        color: 'green',
                        labelPosition: 'left',
                        icon: 'save',
                        content: 'Save Pasted Link',
                        basic: 'true',
                        onClick: function() {
                            setOpen(true);
                        },
                    }}
                    actionPosition="left"
                    placeholder="https://indeed.com/..."
                    style={{ width: '100%', marginRight: 20 }}
                />
                <Button basic onClick={() => props.setCurrentSite({})}>
                    Logo
                </Button>
            </div>
            <Modal
                size="tiny"
                open={open}
                onClose={() => setOpen(false)}
                closeIcon
            >
                <Header as="h2" icon="rocket" content="Coming Soon!" />
                <Modal.Content>
                    <Header as="h3">Sign Up Early!</Header>
                    <p>
                        All The Job Sites is working diligently to help make
                        your job search experience as easy as it can be.
                    </p>
                    <p>
                        Sign up today and get notified on the next release for
                        the following features:
                    </p>
                    <List bulleted>
                        <List.Item content="Save Jobs" />
                        <List.Item content="Save Job Searches" />
                        <List.Item content="Track Jobs" />
                    </List>
                </Modal.Content>
                <Modal.Actions>
                    <Input
                        action={{
                            color: 'green',
                            labelPosition: 'left',
                            icon: 'bell',
                            content: 'Notify Me',
                            onClick: function() {
                                console.log('Sign Up');
                            },
                        }}
                        fluid
                        actionPosition="left"
                        placeholder="hireme@ineedajob.com"
                    />
                </Modal.Actions>
            </Modal>
        </TopBarContainer>
    );
};

export default TopBar;
