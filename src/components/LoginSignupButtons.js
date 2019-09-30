import React, { useState, useEffect } from 'react';

import { useStateValue } from '../state';

//Components
import { Button, Loader, Segment } from 'semantic-ui-react';

const LoginSignupButtons = ({ setOpen, setIndex, ...props }) => {
    const [{ user }, dispatch] = useStateValue();
    const [loading, setLoading] = useState();

    useEffect(() => {
        setLoading(window.localStorage.getItem('loading'));
    }, [user]);

    console.log(loading);

    return (
        <>
            {loading ? (
                <Segment>
                    <Loader active inline style={{ marginRight: 15 }} /> Logging
                    In
                </Segment>
            ) : (
                <Button.Group {...props}>
                    <Button
                        onClick={() => {
                            setOpen(true);
                            setIndex(0);
                            window.gtag('event', 'login', {
                                event_category: 'navigation',
                                event_label: 'Sidebar Login',
                            });
                        }}
                    >
                        Login
                    </Button>
                    <Button.Or />
                    <Button
                        positive
                        onClick={() => {
                            setOpen(true);
                            setIndex(1);
                            window.gtag('event', 'signup', {
                                event_category: 'navigation',
                                event_label: 'Sidebar Signup',
                            });
                        }}
                    >
                        Sign Up
                    </Button>
                </Button.Group>
            )}
        </>
    );
};

export default LoginSignupButtons;
