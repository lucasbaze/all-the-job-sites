import React, { useEffect } from 'react';
import { Header, Icon, Button, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

import FeaturedJob from './FeaturedJob';

const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100vh;
    width: 100%;
`;

const StyledContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledValueProp = styled.div`
    text-align: center;
`;

const StyledFeaturedJobs = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const ShareButtons = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 7px;
`;

//height: calc(100vh - 50px);

const HomePage = () => {
    useEffect(() => {
        window.gtag('event', 'navigate', {
            event_category: 'navigation',
            event_label: 'home page',
        });
    }, []);

    return (
        <StyledHomePage>
            <StyledContainer>
                <StyledValueProp>
                    <Header as="h1" style={{ marginBottom: 0, marginTop: 10 }}>
                        All The Job Sites
                    </Header>
                    <Header as="h3" style={{ marginTop: 10 }}>
                        Where your job search starts... and ends.
                    </Header>
                    <p>
                        <Icon name="chevron left" />
                        Use the sidebar on the left to get start!
                    </p>
                </StyledValueProp>
                <StyledFeaturedJobs>
                    <Header as="h3">Featured Jobs:</Header>
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
                        url="https://boards.greenhouse.io/scalefactor/jobs/1838415"
                        company="ScaleFactor"
                        location="Austin, TX"
                        title="Accounting Support Lead"
                        tags={['jira', 'confluence', 'zendesk', 'accounting']}
                    />
                    <FeaturedJob
                        logo="https://authenticjobs.s3.amazonaws.com/uploads/logos/223c285e4b730ba3daf341d03efee7cc/Lucid%20round,%20white%20on%20red.png"
                        url="https://authenticjobs.com/jobs/31568/ecommerce-account-manager"
                        company="Vestwell"
                        location="New York, NY"
                        title="Ecommerce Account Manager"
                        tags={['magento', 'bigcommerce', 'sales', 'smb']}
                    />
                </StyledFeaturedJobs>
                <ShareButtons>
                    <FacebookShareButton
                        url={'https://allthejobsites.com'}
                        quote="The only site I need to go to find jobs"
                    >
                        <Button
                            style={{
                                backgroundColor: '#1877f2',
                                color: 'white',
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
            </StyledContainer>
        </StyledHomePage>
    );
};

export default HomePage;
