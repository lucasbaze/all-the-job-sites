import React from 'react';
import { Segment, Image, Header, Grid, Icon, Label } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledImage = styled.img`
    width: 45px;
    height: 45px;
    margin-right: 10px;
`;

const StyledSegment = styled(Segment)`
    overflow: scroll;
    :hover {
        cursor: pointer;
    }
    .grid {
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
            <Grid columns={3} divided stackable style={{ width: '100%' }}>
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
                            justifyContent: 'stretch',
                            alignItems: 'center',
                        }}
                    >
                        <Label.Group size="medium" style={{ width: '100%' }}>
                            {props.tags.map((tag, index) => {
                                return (
                                    <Label
                                        key={index}
                                        content={tag}
                                        style={{
                                            marginRight: 10,
                                            color: 'rgb(135, 135, 135)',
                                            padding: 12,
                                        }}
                                    />
                                );
                            })}
                        </Label.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </StyledSegment>
    );
};

export default FeaturedJob;
