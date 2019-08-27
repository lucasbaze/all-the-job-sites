import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Responsive } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

const StyledBottomMenu = styled.div`
    height: 50px;
    width: 100%;
    box-shadow: 0 -3px 5px #eaeaea;
    padding: 7px 15px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
`;

const StyledButton = styled(Button)`
    padding: 0 10;
`;

const BottomMenu = props => {
    const [open, setOpen] = useState(false);

    return (
        <StyledBottomMenu>
            <Responsive
                as={StyledButton} minWidth={768}
                onClick={() => {
                    props.updateCollapsed();
                    window.gtag('event', 'collapse', {
                        event_category: 'navigation',
                        event_label: 'expand collapse sidebar',
                    });
                }}
                icon="compress"
                basic
            />
            <Responsive as={Link} minWidth={768} to="/post-job">
                <Button
                    color="red"
                    onClick={() => {
                        window.gtag('event', 'navigate', {
                            event_category: 'navigation',
                            event_label: 'post job',
                        });
                    }}
                    content="Post Job"
                    style={{ minWidth: 100 }}
                />
            </Responsive>
            <Responsive as='a' maxWidth={768} href="https://lucasbazemore.typeform.com/to/xu9lJZ" target="_blank">
                <Button
                    color="red"
                    onClick={() => {
                        window.gtag('event', 'navigate', {
                            event_category: 'navigation',
                            event_label: 'post job',
                        });
                    }}
                    content="Post Job"
                    style={{ minWidth: 100 }}
                />
            </Responsive>
        </StyledBottomMenu>
    );
};

export default BottomMenu;

// <Modal open={open} onClose={() => setOpen(false)}>
//     <Header
//         as="h2"
//         icon="bullhorn"
//         content="Get in front of All The People"
//     />
//     <Modal.Content image>
//         <div
//             style={{
//                 width: 200,
//                 height: 200,
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 textAlign: 'center',
//                 backgroundColor: 'lightgrey',
//                 fontWeight: 700,
//                 borderRadius: 10,
//                 padding: 20,
//                 marginRight: 20,
//             }}
//         >
//             <Header as="h2">Your Logo Here</Header>
//         </div>
//         <Modal.Description>
//             <Header as="h3">Looking to post a job?</Header>
//             <p>
//                 All The Job Sites is insert further marketing text
//                 here.
//             </p>
//         </Modal.Description>
//     </Modal.Content>
//     <Modal.Actions>
//         <Button primary>
//             Proceed <Icon name="right chevron" />
//         </Button>
//     </Modal.Actions>
// </Modal>
