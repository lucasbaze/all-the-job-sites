import React from 'react';
import styled from 'styled-components';
import { List, Icon } from 'semantic-ui-react';

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
                {!props.site.iframe_able && (
                    <Icon
                        name="linkify"
                        size="small"
                        style={{ float: 'right', color: 'grey' }}
                    />
                )}
                {/* TODO: functionize this test to display the tag or make this a more robust component */}
                {!props.site.site_name
                    .toLowerCase()
                    .search(props.searchValue.toLowerCase()) >= 0 &&
                    props.searchValue !== '' && (
                        <Icon
                            name="tag"
                            size="small"
                            style={{ float: 'right', color: 'grey' }}
                        />
                    )}
            </div>
        </StyledListItem>
    );
};

export default JobLink;
