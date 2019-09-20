import React from 'react';
import styled from 'styled-components';
import {
    flexBoxMixin,
    flexBoxMixinMobile,
    flexBoxMixinComputer,
} from '../globals/styles';

//Components
import { Link } from 'react-router-dom';
import { Responsive } from 'semantic-ui-react';
import Logo from './Logo';

//CSS Components
const Container = styled.div`
    width: 100%;
    background-color: #f2f3f5;
    margin-top: 20px;
    padding: 20px 30px;
    // text-align: center;

    div {
        // padding: 0 0 5px 0;
        color: black;
    }

    p.copyright {
        text-align: center;
        opacity: 0.6;
        margin-top: 10px;
        font-size: 80%;
    }
`;

const Row = styled.div`
    ${flexBoxMixinComputer('row', 'space-between', 'left')};
    ${flexBoxMixinMobile('column', 'flex-start', 'center')};
`;

const Column = styled.div`
    ${flexBoxMixin('column', 'flex-start', 'right')};
`;

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();

    // <p>
    //     All The Job Sites pulls together over 200 different job boards<br/> so you can find the right job.
    // </p>
    return (
        <Container>
            <Row>
                <Column>
                    <Logo />
                </Column>
                <Column className="right">
                    <div></div>
                    <div>
                        <Responsive
                            as={Link}
                            to="/home"
                            maxWidth={767}
                            style={{ marginRight: 10 }}
                        >
                            Home
                        </Responsive>
                        <Responsive
                            as={Link}
                            to="/"
                            minWidth={768}
                            style={{ marginRight: 10 }}
                        >
                            Home
                        </Responsive>
                        <Responsive
                            as={Link}
                            to="/"
                            maxWidth={767}
                            style={{ marginRight: 10 }}
                        >
                            Site Search
                        </Responsive>
                        <Link to="/contact-us" style={{ marginRight: 10 }}>
                            Contact Us
                        </Link>
                        <Link to="/post-job">Post a Job</Link>
                    </div>
                </Column>
            </Row>
            <p className="copyright">
                Copyright &copy; {year}, All The Job Sites, Inc. "All The Job
                Sites" and logo are trademarks of All The Job Sites, Inc.
            </p>
        </Container>
    );
};

export default Footer;
