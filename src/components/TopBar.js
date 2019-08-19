import React from 'react';
import { Button, Input } from 'semantic-ui-react';
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
    return (
        <TopBarContainer>
            <div style={{ flex: 0.93, padding: '7px 15px' }}>
                <Button.Group style={{ width: '100%' }}>
                    <Button>Login</Button>
                    <Button.Or />
                    <Button>Sign Up</Button>
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
                />
                <Input
                    action={{
                        color: 'green',
                        labelPosition: 'left',
                        icon: 'save',
                        content: 'Save Pasted Link',
                    }}
                    actionPosition="left"
                    placeholder="https://indeed.com/..."
                    style={{ width: '75%', marginRight: 20 }}
                />
                <div>Logo</div>
            </div>
        </TopBarContainer>
    );
};

export default TopBar;
