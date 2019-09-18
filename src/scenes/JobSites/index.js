import React, { useState, useEffect } from 'react';
import { Header, List, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import { sites } from '../../sites.js';
import JobLink from '../../components/JobLink.js';

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

// sort site objects alphabetically by key (main_category)
const sortCategories = (a, b) => {
    return a[0].toUpperCase() < b[0].toUpperCase() ? 1 : -1;
};
const sortSites = (a, b) => {
    return a.site_name.toUpperCase() < b.site_name.toUpperCase() ? -1 : 1;
};

/**
 * @returns Array [global sort key, site object]
 */
const prepareSites = sites => {
    // TODO: This will need to be pulled from a Database
    let reduced = sites.reduce((total, curr, index) => {
        if (curr.main_category in total) {
            total[curr.main_category] = [...total[curr.main_category], curr];
        } else {
            total[curr.main_category] = [curr];
        }
        return total;
    }, {});

    // convert object to array of [key, value] pairs
    // the value part is an array of sites
    // sort the sites by their site_name (see sortSites)
    // then, sort the whole master array by categories names
    let reducedObject = Object.entries(reduced)
        .map(([k, v]) => [k, v.sort(sortSites)])
        .sort(sortCategories);

    return reducedObject;
};

const preparedSites = prepareSites(sites);

const JobSites = props => {
    let searchFilter = site => {
        if (props.searchValue === '') {
            return true;
        } else {
            //Check if the search value is in the site_name
            //return true if true

            let query = props.searchValue.toLowerCase();
            let siteNameIndex = site.site_name.toLowerCase().search(query);
            let siteNameFilter = siteNameIndex >= 0; // ? true : false is redundant

            //Check if the search value is in the tags
            //return true if one of the tags has the search term and then provide an icon with the tag_icon
            /*let siteTagIndex = site.tags.filter(tag => {
                return tag
                    .toLowerCase()
                    .search(props.searchValue.toLowerCase()) >= 0
                    ? true
                    : false;
            });*/
            // let siteTagFilter = siteTagIndex.length >= 1 ? true : false;

            let siteTagFilter = site.tags.includes(query);

            //Check if the site is searchable
            //return true and then run a .map over just those specific true ones
            let siteSearchable = site.searchable;

            return siteNameFilter || siteTagFilter || siteSearchable;
            // return siteNameFilter || siteTagFilter;
        }
    };

    /*let tansformSiteLinksBasedOnSearchTerm = site => {
        if (site.searchable) {
            let query = props.searchValue.replace(' ', '%20');

            site.searchURL = site.site_url + `${query}`;
            console.log(site);
            return site;
        } else {
            return site;
        }
    };
    Is the transformation of each link part
    .map(site => {
        return tansformSiteLinksBasedOnSearchTerm(site);
    })*/

    let linkList = preparedSites
        .map(([categoryName, categorySites], index) => {
            let categoryList = categorySites // pulling the value part
                .filter(searchFilter)
                .map((site, index) => {
                    return (
                        <JobLink
                            site={site}
                            key={site.site_name + index}
                            searchValue={props.searchValue}
                        />
                    );
                })
                .reduce((prev, curr) => [prev, curr], []);

            return categoryList.length >= 1 ? (
                <CategoryList
                    key={index}
                    title={categoryName}
                    categoryList={categoryList}
                    allOpen={props.allOpen}
                />
            ) : null;
        })
        .reduce((prev, curr) => [prev, curr]);

    return <List style={{ padding: 15 }}>{linkList}</List>;
};

export default JobSites;
