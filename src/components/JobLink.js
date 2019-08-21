import React from 'react';
import styled from 'styled-components';
import { List } from 'semantic-ui-react';

const StyledListItem = styled(List.Item)`
    padding-bottom: 10px;
`;

const JobLink = props => {
    const handleClick = event => {
        if (props.site.iframe_able === true) {
            props.updateMainURL(event.target.value);
        } else {
            console.log('cant open link here');
        }
    };

    return (
        <StyledListItem>
            <List.Item>
                <button
                    value={props.site.site_url}
                    onClick={event => {
                        handleClick(event);
                    }}
                >
                    {props.site.site_name}
                </button>
            </List.Item>
        </StyledListItem>
    );
};

export default JobLink;
