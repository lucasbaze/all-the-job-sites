import React from 'react';

//Components
import { Button } from 'semantic-ui-react';

const LoginSignupButtons = ({ setOpenLoginSignup, setIndex }) => {
    return (
        <Button.Group fluid>
            <Button
                onClick={() => {
                    setOpenLoginSignup(true);
                    setIndex(0);
                }}
            >
                Login
            </Button>
            <Button.Or />
            <Button
                positive
                onClick={() => {
                    setOpenLoginSignup(true);
                    setIndex(1);
                }}
            >
                Sign Up
            </Button>
        </Button.Group>
    );
};

export default LoginSignupButtons;
