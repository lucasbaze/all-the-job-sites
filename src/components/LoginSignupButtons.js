import React from 'react';

//Components
import { Button } from 'semantic-ui-react';

const LoginSignupButtons = ({ setOpen, setIndex, fluid }) => {
    return (
        <Button.Group style={{ width: 300 }}>
            <Button
                onClick={() => {
                    setOpen(true);
                    setIndex(0);
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
                }}
            >
                Sign Up
            </Button>
        </Button.Group>
    );
};

export default LoginSignupButtons;
