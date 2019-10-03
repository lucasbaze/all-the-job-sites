import React, { useState, useEffect } from 'react';

import { useStateValue } from '../state';

//Components
import { Button, Loader, Segment, Icon } from 'semantic-ui-react';
import { LoginSignup } from './Modals';

const LoginSignupButtons = () => {
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
                <LoginSignup trigger="button" />
            )}
        </>
    );
};

export default LoginSignupButtons;
