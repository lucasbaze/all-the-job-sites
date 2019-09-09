import React from 'react';
import { Segment, Image, Header, Grid, Icon, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledImage = styled.img`
    width: 45px;
    height: 45px;
    margin-right: 10px;
`;

const StyledSegment = styled(Segment)`
    :hover {
        cursor: pointer;
    }
`;

const FeaturedJob = props => {
    return (
        <StyledSegment
            color="red"
            style={{ display: 'flex' }}
            onClick={() => {
                window.open(props.url, 'blank');
                window.gtag('event', 'jobs', {
                    event_category: 'navigation',
                    event_label: 'featured job link',
                });
            }}
        >
            <StyledImage src={props.logo} />
            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Header
                            as="h4"
                            content={props.title}
                            style={{ margin: 0 }}
                        />
                        <p>
                            <a href={props.url} target="_blank">
                                {props.company}{' '}
                                <Icon name="external alternate" color="blue" />
                            </a>
                        </p>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Icon name="map marker alternate" />
                        Location: {props.location}
                    </Grid.Column>
                    <Grid.Column
                        width={8}
                        style={{
                            display: 'flex',
                            flexFlow: 'row',
                            justifyContent: 'flex-start',
                        }}
                    >
                        {props.tags.map((tag, index) => {
                            return (
                                <Button
                                    key={index}
                                    compact
                                    disabled
                                    content={tag}
                                    style={{ marginRight: 10, color: 'black' }}
                                />
                            );
                        })}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </StyledSegment>
    );
};

export default FeaturedJob;
