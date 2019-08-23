import React, { useState } from 'react';
import {
    Header,
    Segment,
    Icon,
    Button,
    Grid,
    List,
    Container,
    Modal,
    Input,
} from 'semantic-ui-react';
import styled from 'styled-components';

const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    height: calc(100vh - 50px);
`;

const HomePage = () => {
    const [openAbout, setOpenAbout] = useState(false);

    return (
        <StyledHomePage>
            <Header as="h1" style={{ marginBottom: 0 }}>
                All The Job Sites
            </Header>
            <Header as="h3" style={{ marginTop: 10 }}>
                Where your job search starts... and ends.
            </Header>
            <p>Use the sidebar on the left to get start!</p>
            <Grid centered columns={1}>
                <Grid.Column>
                    <a
                        href="https://lucasbazemore.typeform.com/to/iAd0PV"
                        target="_blank"
                    >
                        <Button>Contact Us</Button>
                    </a>
                    <Button onClick={() => setOpenAbout(true)}>About Us</Button>
                </Grid.Column>
            </Grid>
            <Modal
                size="tiny"
                open={openAbout}
                onClose={() => setOpenAbout(false)}
                closeIcon
            >
                <Header as="h2" icon="thumbs up outline" content="Welcome!" />
                <Modal.Content>
                    <Header as="h3">Thanks for reading!</Header>
                    <p>All The Job Sites is built by AllTheJobSites, Inc.</p>
                    <p>
                        The motivation of this site is to make job search
                        easier. There are hundreds of job boards and saving jobs
                        across all of them is a nightmare. All The Job Sites is
                        the #1 place to make all of this easier.
                    </p>
                    <p>
                        The team currently consists of{' '}
                        <a href="https://www.linkedin.com/in/lucas-bazemore-b3ba1264/">
                            Lucas Bazemore
                        </a>
                        .
                    </p>
                </Modal.Content>
            </Modal>
        </StyledHomePage>
    );
};

export default HomePage;

// <Grid>
//     <Grid.Row columns={1}>
//         <Grid.Column>
//             <Segment color="green">
//                 <Header as="h4">New Here?</Header>
//                 All The Job Sites aggregates job search, so click
//                 around and start your job search!
//             </Segment>
//         </Grid.Column>
//     </Grid.Row>
//     <Grid.Row columns={2}>
//         <Grid.Column>
//             <Segment color="orange">
//                 <Header as="h4">
//                     <Icon name="gem" />
//                     Upcoming Features!
//                 </Header>
//                 <List>
//                     <List.Item content="Create Accounts" />
//                     <List.Item content="Create Accounts" />
//                     <List.Item content="Create Accounts" />
//                     <List.Item content="Create Accounts" />
//                 </List>
//             </Segment>
//         </Grid.Column>
//         <Grid.Column>
//             <Segment color="orange">
//                 <Header as="h4">
//                     <Icon name="gem" />
//                     Upcoming Features!
//                 </Header>
//                 <List>
//                     <List.Item content="Create Accounts" />
//                     <List.Item content="Create Accounts" />
//                     <List.Item content="Create Accounts" />
//                     <List.Item content="Create Accounts" />
//                 </List>
//             </Segment>
//         </Grid.Column>
//     </Grid.Row>
// </Grid>
