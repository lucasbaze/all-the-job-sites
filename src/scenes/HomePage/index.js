import React, { useState, useEffect } from 'react';
import { Header, Icon, Button, Menu, Responsive } from 'semantic-ui-react';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

//Components
import FeaturedJob from '../../components/FeaturedJob';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
// import LoginSignupButtons from '../../components/LoginSignupButtons';
import { LoginSignup } from '../../components/Modals';

//CSS
import {
    StyledMenuContainer,
    StyledSection,
    StyledSectionHeader,
    ShareButtons,
    Container,
    Jumbotron,
} from './Styled.js';
import { Row } from '../../globals/styles';

const HomePage = () => {
    const [index, setIndex] = useState(1);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.gtag('event', 'navigate', {
            event_category: 'navigation',
            event_label: 'home page',
        });
    }, []);

    // <LoginSignupButtons
    //     setOpen={setOpen}
    //     setIndex={setIndex}
    //     fluid={false}
    // />

    return (
        <Container>
            <Jumbotron>
                <Responsive as={StyledMenuContainer} minWidth={767}>
                    <Menu secondary fluid>
                        <Menu.Item
                            as={Link}
                            name="Contact Us"
                            to="/contact-us"
                        />
                        {/*
                        <Menu.Item
                            name="About Us"
                            to=""
                        />
                        */}
                        <Menu.Menu position="right">
                            <Menu.Item
                                as={Link}
                                name="Post a Job"
                                to="/post-job"
                            />
                        </Menu.Menu>
                    </Menu>
                </Responsive>
                <div className="wrapped">
                    <div className="cta">
                        <h1>Where your job search starts &mdash;</h1>
                        <h1 style={{ margin: 0, padding: 0 }}> and ends.</h1>
                        <p className="subtitle">
                            All The Job Sites pulls together over 200 different
                            job boards, so you can{' '}
                            <strong>find your next thing</strong> .
                        </p>
                        <Row justify="center">
                            <Button
                                color="green"
                                content="Create Account"
                                style={{ marginTop: 10, width: 200 }}
                            />
                            <Button
                                color="red"
                                content="Post Job"
                                style={{ marginTop: 10, width: 200 }}
                            />
                        </Row>
                    </div>
                </div>
            </Jumbotron>
            {/* Section 1: Instructions */}
            {/*
            <StyledSection>
                <Header as="h2">Get started</Header>
                <div className="description">
                    <ul>
                        <li>
                            <Icon name="arrow left" />
                            The sidebar holds all of the job sites we've
                            indexed.
                        </li>
                        <li>
                            <Icon name="search" />
                            Enter a search term and we'll automatically search
                            for it on each board.
                        </li>
                        <li>
                            <Icon name="linkify" />
                            Links with this icon will open in a new tab.
                        </li>
                        <li>
                            <Icon name="user" />
                            Create an account to save jobs from anywhere!
                        </li>
                    </ul>
                </div>
            </StyledSection>
            */}
            {/* Section 2: Featured Jobs */}
            <StyledSection>
                <StyledSectionHeader>
                    <Header as="h2">Featured Jobs</Header>
                    <Link to="/post-job">
                        <Button
                            size="small"
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
                    </Link>
                </StyledSectionHeader>
                <Responsive>
                    <FeaturedJob
                        logo="https://t0jnhu9fw1-flywheel.netdna-ssl.com/wp-content/uploads/2017/05/12743742_799537270151613_7802811979984674555_n1.png"
                        url="https://jobspresso.co/job/data-science-subject-matter-expert-3-2/"
                        company="Udacity"
                        location="Remote, US"
                        title="Software Engineer, Devop"
                        tags={['devops', 'python', 'AWS', 'postgreSQL']}
                    />
                    <FeaturedJob
                        logo="https://storage.googleapis.com/job-listing-logos/e249a7cd-a27c-4195-8e27-79656ac8f569.jpg"
                        url="https://cryptojobslist.com/jobs/engineering-lead-at-status-remote-only"
                        company="Status"
                        location="Remote, US"
                        title="Mobile Engineering Lead"
                        tags={['react native', 'android', 'blockchain', 'js']}
                    />
                    <FeaturedJob
                        logo="https://cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/006/203/resized/ScaleFactor_square_RGB.png?1470933628"
                        url="https://boards.greenhouse.io/scalefactor/jobs/1813813"
                        company="ScaleFactor"
                        location="Denver, CO"
                        title="Accounting Manager"
                        tags={['jira', 'confluence', 'zendesk', 'accounting']}
                    />
                    <FeaturedJob
                        logo="https://authenticjobs.s3.amazonaws.com/uploads/logos/4ff225e06377853c6ed5bfc2765093f3/EasternStandard_outline%20black.jpg"
                        url="https://authenticjobs.com/jobs/31656/senior-web-developer"
                        company="Eastern Standard"
                        location="Philadelphia, PA"
                        title="Senior Web Developer"
                        tags={['PHP', 'Javascript', 'Drupal', 'MySQL']}
                    />
                </Responsive>
            </StyledSection>
            <ShareButtons>
                <FacebookShareButton
                    url={'https://allthejobsites.com'}
                    quote="The only site I need to go to find jobs"
                >
                    <Button
                        style={{
                            backgroundColor: '#1877f2',
                            color: 'white',
                            marginTop: 10,
                        }}
                        onClick={() => {
                            window.gtag('event', 'click', {
                                event_category: 'share',
                                event_label: 'facebook share',
                            });
                        }}
                    >
                        <Icon name="facebook" />
                        Share on Facebook
                    </Button>
                </FacebookShareButton>
                <TwitterShareButton
                    url={'https://allthejobsites.com'}
                    title="All The Jobs Sites. Where your job search starts... and ends."
                    hashtags={['jobs', 'hiring']}
                >
                    <Button
                        style={{
                            backgroundColor: '#1da1f2',
                            color: 'white',
                            marginTop: 10,
                        }}
                        onClick={() => {
                            window.gtag('event', 'click', {
                                event_category: 'share',
                                event_label: 'twitter share',
                            });
                        }}
                    >
                        <Icon name="twitter square" />
                        Share on Twitter
                    </Button>
                </TwitterShareButton>
            </ShareButtons>
            <Responsive minWidth={767}>
                <Footer />
            </Responsive>
            <LoginSignup selectedIndex={index} open={open} setOpen={setOpen} />
        </Container>
    );
};

export default HomePage;

// <StyledHomePage>
//     <StyledContainer>
//         <StyledValueProp>
//             <Header as="h1" style={{ marginBottom: 0, marginTop: 20 }}>
//                 All The Job Sites Development Branch
//             </Header>
//             <Header as="h3" style={{ marginTop: 10 }}>
//                 Where all the stuff will probably break
//             </Header>
//             <p>
//                 <Icon name="chevron left" />
//                 Use the sidebar on the left to get started!
//             </p>
//             <p>
//                 <Icon name="linkify" />
//                 Links will open in a new tab
//             </p>
//         </StyledValueProp>
//         <StyledFeaturedJobs>
//             <Header as="h3">Featured Jobs:</Header>
//             <FeaturedJob
//                 logo="https://t0jnhu9fw1-flywheel.netdna-ssl.com/wp-content/uploads/2017/05/12743742_799537270151613_7802811979984674555_n1.png"
//                 url="https://jobspresso.co/job/data-science-subject-matter-expert-3-2/"
//                 company="Udacity"
//                 location="Remote, US"
//                 title="Software Engineer, Devop"
//                 tags={['devops', 'python', 'AWS', 'postgreSQL']}
//             />
//             <FeaturedJob
//                 logo="https://storage.googleapis.com/job-listing-logos/e249a7cd-a27c-4195-8e27-79656ac8f569.jpg"
//                 url="https://cryptojobslist.com/jobs/engineering-lead-at-status-remote-only"
//                 company="Status"
//                 location="Remote, US"
//                 title="Mobile Engineering Lead"
//                 tags={['react native', 'android', 'blockchain', 'js']}
//             />
//             <FeaturedJob
//                 logo="https://cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/006/203/resized/ScaleFactor_square_RGB.png?1470933628"
//                 url="https://boards.greenhouse.io/scalefactor/jobs/1838415"
//                 company="ScaleFactor"
//                 location="Austin, TX"
//                 title="Accounting Support Lead"
//                 tags={['jira', 'confluence', 'zendesk', 'accounting']}
//             />
//             <FeaturedJob
//                 logo="https://authenticjobs.s3.amazonaws.com/uploads/logos/223c285e4b730ba3daf341d03efee7cc/Lucid%20round,%20white%20on%20red.png"
//                 url="https://authenticjobs.com/jobs/31568/ecommerce-account-manager"
//                 company="Vestwell"
//                 location="New York, NY"
//                 title="Ecommerce Account Manager"
//                 tags={['magento', 'bigcommerce', 'sales', 'smb']}
//             />
//         </StyledFeaturedJobs>
//         <ShareButtons>
//             <FacebookShareButton
//                 url={'https://allthejobsites.com'}
//                 quote="The only site I need to go to find jobs"
//             >
//                 <Button
//                     style={{
//                         backgroundColor: '#1877f2',
//                         color: 'white',
//                     }}
//                     onClick={() => {
//                         window.gtag('event', 'click', {
//                             event_category: 'share',
//                             event_label: 'facebook share',
//                         });
//                     }}
//                 >
//                     <Icon name="facebook" />
//                     Share on Facebook
//                 </Button>
//             </FacebookShareButton>
//             <TwitterShareButton
//                 url={'https://allthejobsites.com'}
//                 title="All The Jobs Sites. Where your job search starts... and ends."
//                 hashtags={['jobs', 'hiring']}
//             >
//                 <Button
//                     style={{
//                         backgroundColor: '#1da1f2',
//                         color: 'white',
//                     }}
//                     onClick={() => {
//                         window.gtag('event', 'click', {
//                             event_category: 'share',
//                             event_label: 'twitter share',
//                         });
//                     }}
//                 >
//                     <Icon name="twitter square" />
//                     Share on Twitter
//                 </Button>
//             </TwitterShareButton>
//         </ShareButtons>
//     </StyledContainer>
// </StyledHomePage>
