import React from 'react';
import styled from 'styled-components';
import { List } from 'semantic-ui-react';

const StyledListItem = styled(List.Item)`
    div {
        padding-bottom: 5px;
        padding-top: 5px;
        border-bottom: 1px solid #e4e4e4;
    }

    :hover {
        color: green;
        cursor: pointer;
    }
`;

const JobLink = props => {
    return (
        <StyledListItem>
            <div
                onClick={() => {
                    props.updateSite(props.site);
                }}
            >
                {props.site.site_name}
            </div>
        </StyledListItem>
    );
};

export default JobLink;
