import React, { useState, useEffect } from 'react';
import { Header, List } from 'semantic-ui-react';
import styled from 'styled-components';

import { sites } from '../sites.js';
import JobLink from './JobLink.js';

const CategoryHeader = () => <Header as="h4"></Header>;

const StyledCategory = styled(CategoryHeader)`
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
                as="h4"
                style={{ borderBottom: '0.5px solid #e4e4e4' }}
                onClick={() => (opened ? setOpened(false) : setOpened(true))}
            >
                {props.title}
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

    console.log(reducedObject);

    let linkList = reducedObject
        .map((category, index) => {
            let categoryList = category[1]
                .filter(link => {
                    if (props.searchValue === '') {
                        return true;
                    } else {
                        let searched = link.site_name
                            .toLowerCase()
                            .search(props.searchValue.toLowerCase());
                        let returned = searched >= 0 ? true : false;
                        return returned;
                    }
                })
                .map(site => {
                    return (
                        <JobLink site={site} updateSite={props.updateSite} />
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
