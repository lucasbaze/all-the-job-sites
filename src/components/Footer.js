import React from 'react';
import styled from 'styled-components';

//Components
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import Logo from './Logo';

//CSS Components
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #e2e3e5;
    margin-top: 45px;

    div {
        width: 90%;
        margin: 0 auto;
        padding: 10px 0 20px 0;
        color: black;

        p {
            text-align: center;
        }
    }
`;

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container>
            <div>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                            }}
                        >
                            <Logo />
                        </Grid.Column>
                        <Grid.Column>
                            <div>
                                All The Job Sites has over 200 different job
                                boards helping you to find the right job
                            </div>
                            <div>
                                <Link to="/" style={{ marginRight: 10 }}>
                                    Home
                                </Link>
                                <Link
                                    to="/contact-us"
                                    style={{ marginRight: 10 }}
                                >
                                    Contact Us
                                </Link>
                                <Link to="/post-job">Post Job</Link>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <p
                    style={{
                        marginBottom: 0,
                        paddingTop: 10,
                        borderTop: '1px solid grey',
                    }}
                >
                    Copyright &copy; {year}, All The Job Sites, Inc. "All The
                    Job Sites" and logo are propreity trademarks of All The Job
                    Sites, Inc.
                </p>
            </div>
        </Container>
    );
};

export default Footer;
