import React from 'react';
import { List } from 'semantic-ui-react';

import { sites } from '../sites.js';
import JobLink from './JobLink.js';

const JobSitesContainer = props => {
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
                .map(link => {
                    return (
                        <List.Item>
                            <button
                                value={link.site_url}
                                onClick={event => props.updateMainURL(event)}
                            >
                                {link.site_name}
                            </button>
                        </List.Item>
                    );
                })
                .reduce((prev, curr) => [prev, curr], []);

            return (
                <List.Item>
                    {category[0]}
                    <List.List>{categoryList}</List.List>
                </List.Item>
            );
        })
        .reduce((prev, curr) => [prev, curr]);

    return <List divided>{linkList}</List>;
};

export default JobSitesContainer;

// {sites.map((site, index) => {
//     return (
//         <JobLink
//             key={index}
//             site={site}
//             updateMainURL={props.updateMainURL}
//         />
//     );
// })}
