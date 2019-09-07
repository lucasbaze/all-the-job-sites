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
                as={StyledButton}
                minWidth={768}
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
            <Responsive
                as="a"
                maxWidth={768}
                href="https://lucasbazemore.typeform.com/to/xu9lJZ"
                target="_blank"
            >
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
