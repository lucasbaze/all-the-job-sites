import React from 'react';
import styled from 'styled-components';
import { List, Icon, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { useStateValue } from '../state';

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
const StyledLink2 = styled.a`
    color: rgb(73, 73, 73);
`;

const JobLink = props => {
    const { site } = props;
    const [{ searchValue }, dispatch] = useStateValue();

    return (
        <>
            <Responsive
                as={StyledLink2}
                maxWidth={768}
                href={
                    searchValue != ''
                        ? site.search_url.replace(/%q/g, searchValue)
                        : site.site_url
                }
                onClick={() => {
                    window.gtag('event', 'link', {
                        event_category: 'navigation',
                        event_label: 'open link',
                    });
                }}
                target="_blank"
            >
                <StyledListItem>
                    {site.site_name}
                    {!site.iframe_able && (
                        <span style={{ opacity: 0.8, marginLeft: 5 }}>
                            <Icon name="linkify" size="small" />
                        </span>
                    )}
                    {!(
                        props.searchValue &&
                        site.searchable &&
                        site.search_url !== site.site_url
                    ) ? null : (
                        <span
                            style={{
                                float: 'right',
                                fontVariant: 'small-caps',
                                fontSize: 11,
                                opacity: 0.5,
                            }}
                        >
                            <Icon name="searchengin" style={{}} />"
                            {props.searchValue}"
                        </span>
                    )}
                </StyledListItem>
            </Responsive>
            <Responsive
                as={StyledLink}
                minWidth={768}
                to={`/${site.main_category_slug}/${site.site_name_slug}`}
                onClick={() => {
                    window.gtag('event', 'link', {
                        event_category: 'navigation',
                        event_label: 'open link',
                    });
                }}
            >
                <StyledListItem>
                    {site.site_name}
                    {!site.iframe_able && (
                        <span style={{ opacity: 0.8, marginLeft: 5 }}>
                            <Icon name="linkify" size="small" />
                        </span>
                    )}
                    {!(
                        props.searchValue &&
                        site.searchable &&
                        site.search_url !== site.site_url
                    ) ? null : (
                        <span
                            style={{
                                float: 'right',
                                fontVariant: 'small-caps',
                                fontSize: 11,
                                opacity: 0.5,
                            }}
                        >
                            <Icon name="searchengin" style={{}} />"
                            {props.searchValue}"
                        </span>
                    )}
                </StyledListItem>
            </Responsive>
        </>
    );
    // {!site.iframe_able && (
    //     <Icon
    //         name="linkify"
    //         size="small"
    //         style={{ float: 'right', color: 'grey' }}
    //     />
    // )}
    // {/* TODO: functionize this test to display the tag or make this a more robust component */}
    // {!site.site_name
    //     .toLowerCase()
    //     .search(props.searchValue.toLowerCase()) >= 0 &&
    //     props.searchValue !== '' && (
    //         <Icon
    //             name="tag"
    //             size="small"
    //             style={{ float: 'right', color: 'grey' }}
    //         />
    //     )}
};

export default JobLink;
