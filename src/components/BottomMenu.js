import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Header, Modal } from 'semantic-ui-react';

const StyledBottomMenu = styled.div`
    height: 50px;
    width: 100%;
    box-shadow: 0 -3px 5px #eaeaea;
    padding: 7px 15px;
    display: flex;
    flex-flow: row norwap;
`;

const BottomMenu = props => {
    const [open, setOpen] = useState(false);

    return (
        <StyledBottomMenu>
            <Button
                style={{ paddingLeft: 10, paddingRight: 10 }}
                onClick={() => props.updateCollapsed()}
                icon="compress"
            />
            <Button
                color="red"
                onClick={() => setOpen(true)}
                content="Post A Job"
            />
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
        </StyledBottomMenu>
    );
};

export default BottomMenu;
