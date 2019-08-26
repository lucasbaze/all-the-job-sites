import React from 'react';
import styled from 'styled-components';
import { List, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../actions';

const StyledListItem = styled(List.Item)`
    padding-bottom: 5px;
    padding-top: 5px;

    :hover {
        color: green;
        cursor: pointer;
    }
`;

const StyledLink = styled(Link)`
    color: rgb(73, 73, 73);
`;

const JobLink = props => {
    return (
        <StyledLink
            to="/site"
            onClick={() => {
                props.setSite(props.site);
                window.gtag('event', 'link', {
                    event_category: 'navigation',
                    event_label: 'open link',
                });
            }}
        >
            <StyledListItem>
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
            </StyledListItem>
        </StyledLink>
    );
};

export default connect(
    null,
    actions
)(JobLink);
