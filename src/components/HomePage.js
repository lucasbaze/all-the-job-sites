import React from 'react';
import { Header, Icon, Button } from 'semantic-ui-react';
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
    height: 80vh;
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
    return (
        <StyledHomePage>
            <StyledContainer>
                <StyledValueProp>
                    <Header as="h1" style={{ marginBottom: 0 }}>
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
                        tags={['react native', 'android', 'blockchain']}
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
                        >
                            <Icon name="facebook" />
                            Share on Facebook
                        </Button>
                    </FacebookShareButton>
                    <TwitterShareButton url={'https://allthejobsites.com'}>
                        <Button
                            style={{
                                backgroundColor: '#1da1f2',
                                color: 'white',
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
