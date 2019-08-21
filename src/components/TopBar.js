import React, { useState } from 'react';
import { Button, Input, Modal, Header } from 'semantic-ui-react';
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
                            window.FB.AppEvents.logEvent(
                                'Login Button Clicked'
                            );
                        }}
                    >
                        Login
                    </Button>
                    <Button.Or />
                    <Button onClick={() => setOpen(true)}>Sign Up</Button>
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
                    style={{ marginRight: 20 }}
                    content="Saved Jobs"
                    icon="heart"
                    color="red"
                    onClick={() => setOpen(true)}
                />
                <Input
                    action={{
                        color: 'green',
                        labelPosition: 'left',
                        icon: 'save',
                        content: 'Save Pasted Link',
                        onClick: function() {
                            setOpen(true);
                        },
                    }}
                    actionPosition="left"
                    placeholder="https://indeed.com/..."
                    style={{ width: '75%', marginRight: 20 }}
                />
                <div>Logo</div>
            </div>
            <Modal
                size="small"
                open={open}
                onClose={() => setOpen(false)}
                closeIcon
            >
                <Header icon="archive" content="Archive Old Messages" />
                <Modal.Content>
                    <p>Are you sure you want to delete your account</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative>No</Button>
                    <Button
                        positive
                        icon="checkmark"
                        labelPosition="right"
                        content="Yes"
                    />
                </Modal.Actions>
            </Modal>
        </TopBarContainer>
    );
};

export default TopBar;
