import React, { useState, useEffect } from 'react';
import firebase from '../firebase';

import { useStateValue } from '../state';
import * as userActions from '../reducers/userReducer';

import styled from 'styled-components';
import AddJob from './AddJob';
import { Modal, Header, Tab, Button, Icon } from 'semantic-ui-react';
import Logo from './Logo';

export const AboutUs = ({ open, setOpen }) => {
    return (
        <Modal
            size="tiny"
            open={open}
            onClose={() => {
                setOpen(false);
                window.gtag('event', 'navigate', {
                    event_category: 'navigation',
                    event_label: 'close about us',
                });
            }}
            closeIcon
        >
            <Header as="h2" icon="thumbs up outline" content="Welcome!" />
            <Modal.Content>
                <p>All The Job Sites is built by AllTheJobSites, Inc.</p>
                <p>
                    The motivation of this site is to make job search easier.
                    There are hundreds of job boards and finding all the jobs is
                    a nightmare. All The Job Sites is the #1 place to make all
                    of this easier.
                </p>
                <p>
                    The team currently consists of{' '}
                    <a href="https://www.linkedin.com/in/lucas-bazemore-b3ba1264/">
                        Lucas Bazemore
                    </a>{' '}
                    and{' '}
                    <a href="https://www.linkedin.com/in/cameronskelley/">
                        Cameron Kelley
                    </a>
                    .
                </p>
            </Modal.Content>
        </Modal>
    );
};

export const LoginSignup = ({ open, setOpen, selectedIndex }) => {
    const [index, setIndex] = useState(1);
    const [state, dispatch] = useStateValue();

    useEffect(() => {
        setIndex(selectedIndex);
    }, [selectedIndex]);

    const authLogin = () => {
        userActions.setLoading(true);

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithRedirect(provider)
            .then(result => console.log(result));
    };

    const panes = [
        {
            menuItem: 'Login',
            render: () => (
                <Tab.Pane
                    style={{
                        padding: 20,
                        textAlign: 'center',
                    }}
                >
                    <Logo />
                    <Header
                        as="h3"
                        content="Welcome Back!"
                        style={{ marginTop: 0, marginBottom: '20px' }}
                    />
                    <Button
                        color="google plus"
                        content="Login with Google"
                        onClick={() => {
                            authLogin();
                            window.gtag('event', 'login', {
                                event_category: 'user',
                                event_label: 'login with google',
                            });
                        }}
                    />
                </Tab.Pane>
            ),
        },
        {
            menuItem: 'Sign Up',
            render: () => (
                <Tab.Pane
                    style={{
                        padding: 20,
                        textAlign: 'center',
                    }}
                >
                    <Logo />
                    <Header
                        as="h3"
                        content="Let's get started and land that job!"
                        style={{ marginTop: 0, marginBottom: '20px' }}
                    />
                    <Button
                        color="google plus"
                        content="Sign Up with Google"
                        onClick={() => {
                            authLogin();
                            window.gtag('event', 'signup', {
                                event_category: 'user',
                                event_label: 'signup with google',
                            });
                        }}
                    />
                    <p
                        style={{
                            marginTop: 45,
                            color: 'rgb(201, 201, 201)',
                            fontSize: 12,
                        }}
                    >
                        By clicking "Sign Up with Google" above, you acknoledge
                        that you have read and understood and agree to All The
                        Job Sites'{' '}
                        <a href="https://www.notion.so/Terms-of-Use-215f40bb48b04a55b4478fadd59433a4">
                            Terms of Use
                        </a>{' '}
                        and{' '}
                        <a href="https://www.notion.so/Privacy-and-Cookie-Policy-3f89cd6501f84044861b7152449f866f">
                            Privacy Policy
                        </a>
                    </p>
                </Tab.Pane>
            ),
        },
    ];

    return (
        <Modal
            size="tiny"
            open={open}
            onClose={() => {
                setOpen(false);
                window.gtag('event', 'navigate', {
                    event_category: 'navigation',
                    event_label: 'close login signup',
                });
            }}
            closeIcon
        >
            <Modal.Content>
                <Tab
                    panes={panes}
                    activeIndex={index}
                    onTabChange={data => setIndex(data.activeIndex)}
                />
            </Modal.Content>
        </Modal>
    );
};

const StyledIcon = styled(Icon)`
    :hover {
        cursor: pointer;
    }
`;

export const AddJobModal = () => {
    const [open, setOpen] = useState(false);

    return (
        <Modal
            size="medium"
            open={open}
            trigger={
                <StyledIcon
                    name="add circle"
                    size="large"
                    onClick={() => {
                        setOpen(true);
                        window.gtag('event', 'add job', {
                            event_category: 'user',
                            event_label: 'open sidebar add job',
                        });
                    }}
                    color="blue"
                />
            }
            onClose={() => {
                setOpen(false);
                window.gtag('event', 'add jobs', {
                    event_category: 'actions',
                    event_label: 'close addJob modal',
                });
            }}
            closeIcon
            closeOnDimmerClick={true}
        >
            <Modal.Content>
                <AddJob setOpen={setOpen} />
            </Modal.Content>
        </Modal>
    );
};

const CloseLink = styled.span`
    color: red;
    :hover {
        cursor: pointer;
    }
`;

export const FindJobsForMeModal = () => {
    const [open, setOpen] = useState();

    return (
        <Modal
            size="tiny"
            open={open}
            trigger={
                <Button
                    content="Find Jobs For Me"
                    onClick={() => {
                        setOpen(true);
                        window.gtag('event', 'Clicked', {
                            event_category: 'user',
                            event_label: 'open findJobsForMe',
                        });
                    }}
                    color="red"
                />
            }
            onClose={() => {
                setOpen(false);
                window.gtag('event', 'Clicked', {
                    event_category: 'user',
                    event_label: 'close findJobsForMe',
                });
            }}
            closeIcon
            closeOnDimmerClick={true}
        >
            <Modal.Header content="Looking for jobs sucks" />
            <Modal.Content>
                <h4>Let us search for jobs for you.</h4>
                <div style={{ marginBottom: 10 }}>
                    For $29 we'll find you 49 jobs that match your preferences
                    in your profile.
                </div>
                <div style={{ marginBottom: 10 }}>
                    By clicking "Let's do it!" we'll get started finding you
                    jobs, add the jobs to your account, and only afterward will
                    you pay.
                </div>
            </Modal.Content>
            <Modal.Actions>
                <CloseLink onClick={() => setOpen(false)}>
                    Nah, I'll spend hours looking myself
                </CloseLink>
                <Button
                    content="Let's do it!"
                    color="green"
                    onClick={() => {
                        window.gtag('event', 'Find Jobs', {
                            event_category: 'user',
                            event_label: 'Clicked Lets Do It!',
                        });
                    }}
                />
            </Modal.Actions>
        </Modal>
    );
};
