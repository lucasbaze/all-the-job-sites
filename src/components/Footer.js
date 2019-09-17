import React from 'react';
import styled from 'styled-components';
import {
    flexBoxMixin,
    flexBoxMixinMobile,
    flexBoxMixinComputer,
} from '../globals/styles';

//Components
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import Logo from './Logo';

//CSS Components
const Container = styled.div`
    width: 100%;
    background-color: #e2e3e5;
    margin-top: 20px;
    padding: 20px;
    text-align: center;

    div {
        padding: 10px 0 5px 0;
        color: black;
    }
`;

const Row = styled.div`
    ${flexBoxMixinMobile('column', 'flex-start', 'center')};
    ${flexBoxMixinComputer('row', 'space-between', 'center')};
`;

const Column = styled.div`
    ${flexBoxMixin('column', 'flex-start', 'center')};
`;

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container>
            <Row>
                <Logo />
                <Column>
                    <div>
                        All The Job Sites has over 200 different job boards
                        helping you to find the right job
                    </div>
                    <div>
                        <Link to="/home" style={{ marginRight: 10 }}>
                            Home
                        </Link>
                        <Link to="/" style={{ marginRight: 10 }}>
                            Site Search
                        </Link>
                        <Link to="/contact-us" style={{ marginRight: 10 }}>
                            Contact Us
                        </Link>
                        <Link to="/post-job">Post Job</Link>
                    </div>
                </Column>
            </Row>

            <p
                style={{
                    marginBottom: 0,
                    paddingTop: 10,
                    borderTop: '1px solid grey',
                }}
            >
                Copyright &copy; {year}, All The Job Sites, Inc. "All The Job
                Sites" and logo are propreity trademarks of All The Job Sites,
                Inc.
            </p>
        </Container>
    );
};

export default Footer;
