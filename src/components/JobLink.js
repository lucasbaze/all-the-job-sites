import React from 'react';
import styled from 'styled-components';
import { List } from 'semantic-ui-react';

const StyledListItem = styled(List.Item)`
    padding-bottom: 10px;
`;

const JobLink = props => {
    return (
        <StyledListItem>
            <List.Header
                as="button"
                value={props.site.site_url}
                onClick={event => {
                    props.updateMainURL(event);
                }}
            >
                {props.site.site_name}
            </List.Header>
        </StyledListItem>
    );
};

export default JobLink;
