import React, { useState, useEffect } from 'react';
import { Header, List, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import { sites } from '../sites.js';
import JobLink from './JobLink.js';

const StyledCategory = styled(Header)`
    padding-bottom: 5px;
    border-bottom: 0.5px solid #e4e4e4;
    margin-top: 5px;
    margin-bottom: 0px;

    :hover {
        color: green;
        cursor: pointer;
    }
`;

const StyledInnerList = styled(List.List)`
    height: ${props => (props.opened ? '100%' : '0px')};
    overflow: hidden;
    margin-bottom: 0px;
`;

const CategoryList = props => {
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        if (props.allOpen === true) {
            setOpened(true);
        } else if (props.allOpen === false) {
            setOpened(false);
        }
    }, [props.allOpen]);

    return (
        <List.Item style={{ marginBottom: 0 }}>
            <StyledCategory
                as="h3"
                style={{ borderBottom: '0.5px solid #e4e4e4' }}
                onClick={() => {
                    opened ? setOpened(false) : setOpened(true);
                    window.gtag('event', 'category', {
                        event_category: 'navigation',
                        event_label: 'open close category',
                    });
                }}
            >
                {props.title}
                <Icon
                    name={opened ? 'caret down' : 'caret right'}
                    style={{ float: 'right' }}
                />
            </StyledCategory>

            <StyledInnerList opened={opened}>
                {props.categoryList}
            </StyledInnerList>
        </List.Item>
    );
};

const JobSitesContainer = props => {
    //This will need to be pulled from a Database
    let reduced = sites.reduce((total, curr, index) => {
        if (curr.main_category in total) {
            total[curr.main_category] = [...total[curr.main_category], curr];
        } else {
            total[curr.main_category] = [curr];
        }
        return total;
    }, {});

    let reducedObject = Object.entries(reduced);

    let sortCategories = (a, b) => {
        return a[0].toUpperCase() < b[0].toUpperCase() ? -1 : 1;
    };

    let searchFilter = site => {
        if (props.searchValue === '') {
            return true;
        } else {
            //Check if the search value is in the site_name
            //return true if true
            let siteNameIndex = site.site_name
                .toLowerCase()
                .search(props.searchValue.toLowerCase());
            let siteNameFilter = siteNameIndex >= 0 ? true : false;

            //Check if the search value is in the tags
            //return true if one of the tags has the search term and then provide an icon with the tag_icon
            let siteTagIndex = site.tags.filter(tag => {
                return tag
                    .toLowerCase()
                    .search(props.searchValue.toLowerCase()) >= 0
                    ? true
                    : false;
            });

            let siteTagFilter = siteTagIndex.length >= 1 ? true : false;

            //Check if the site is searchable
            //return true and then run a .map over just those specific true ones
            let siteSearchable = site.searchable;

            //return siteNameFilter || siteTagFilter || siteSearchable;
            return siteNameFilter || siteTagFilter || siteSearchable;
        }
    };

    let tansformSiteLinksBasedOnSearchTerm = site => {
        if (site.searchable) {
            let query = props.searchValue.replace(' ', '%20');

            site.searchURL = site.site_url + `${query}`;
            console.log(site);
            return site;
        } else {
            return site;
        }
    };

    let sortLinks = (a, b) => {
        return a.site_name.toUpperCase() < b.site_name.toUpperCase() ? -1 : 1;
    };

    let linkList = reducedObject
        .sort((a, b) => {
            return sortCategories(a, b);
        })
        .map((category, index) => {
            let categoryList = category[1]
                .filter(site => {
                    return searchFilter(site);
                })
                // Is the transformation of each link part
                // .map(site => {
                //     return tansformSiteLinksBasedOnSearchTerm(site);
                // })
                .sort((a, b) => {
                    return sortLinks(a, b);
                })
                .map(site => {
                    return (
                        <JobLink
                            site={site}
                            updateSite={props.updateSite}
                            searchValue={props.searchValue}
                        />
                    );
                })
                .reduce((prev, curr) => [prev, curr], []);

            return categoryList.length >= 1 ? (
                <CategoryList
                    title={category[0]}
                    categoryList={categoryList}
                    allOpen={props.allOpen}
                />
            ) : null;
        })
        .reduce((prev, curr) => [prev, curr]);

    return <List>{linkList}</List>;
};

export default JobSitesContainer;
