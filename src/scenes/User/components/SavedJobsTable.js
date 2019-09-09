import React, { useState, useEffect } from 'react';
import _ from 'lodash';

//State
import * as actions from '../../../actions';
import { useStateValue } from '../../../state';

import { Table, Dropdown, Rating, Icon } from 'semantic-ui-react';

const SavedJobsTable = props => {
    const [modSavedJobs, setModSavedJobs] = useState([]);
    const [{ user }, dispatch] = useStateValue();
    let { savedJobs } = props;
    console.log('SavedJobs: ', savedJobs);

    const groupJobsByStatus = () => {
        let groupedJobs = savedJobs
            .sort((a, b) => {
                if (a.status > b.status) {
                    return 1;
                }
                if (a.status < b.status) {
                    return -1;
                }
                return 0;
            })
            .reduce((acc, job) => {
                let status = job.status;
                if (!acc[status]) {
                    acc[status] = [];
                }
                acc[status].push(job);
                return acc;
            }, {});

        return groupedJobs;
    };

    useEffect(() => {
        console.log('rending from useEffect SavedJobsTable');
        //Group jobs by status
        let groupedJobs = groupJobsByStatus();

        //Set saved jobs as an array
        setModSavedJobs(Object.entries(groupedJobs));
    }, [props]);

    const handleStatusChange = (key, value) => {
        actions.updateSavedJob(dispatch, user.uid, savedJobs, key, value);
        //Find job and change status
        //let job = _.find(savedJobs, { key: key });
        //job.status = value;

        //reset value of savedjobs
        //savedJobs = [...savedJobs];

        //regroup
        // let groupedJobs = groupJobsByStatus(savedJobs);
        //
        // setModSavedJobs(Object.entries(groupedJobs));
    };

    return (
        <>
            {modSavedJobs.map((category, index1) => {
                let [name, jobs] = category;
                let reducedJobs = jobs.map((job, index2) => {
                    let jobLink = job.link.substring(8, 35).concat('...');
                    console.log(job);
                    return (
                        <JobRow
                            key={job.key}
                            job={job}
                            index={`${index1}${index2}`}
                            handleStatusChange={handleStatusChange}
                        />
                    );
                });
                return (
                    <Table key={index1}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Job Name</Table.HeaderCell>
                                <Table.HeaderCell>Link</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                                <Table.HeaderCell>Priority</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>{reducedJobs}</Table.Body>
                    </Table>
                );
            })}
        </>
    );
};

const JobRow = ({ job, index, handleStatusChange }) => {
    const [status, setStatus] = useState(job.status);
    const [rowStatus, setRowStatus] = useState(() => {
        switch (job.status) {
            case 'new':
                return { warning: true };
            case 'applied':
                return { positive: true };
            default:
                return { negative: true };
        }
    });

    let options = [
        {
            key: 'new',
            text: 'New',
            value: 'new',
        },
        {
            key: 'applied',
            text: 'Applied',
            value: 'applied',
        },
        {
            key: 'archived',
            text: 'Archived',
            value: 'archived',
        },
    ];

    let jobLink = job.link.substring(8, 35).concat('...');

    const handleChange = (e, { value }) => {
        setStatus(value);
        handleStatusChange(job.key, value);

        switch (value) {
            case 'new':
                setRowStatus({ warning: true });
                break;
            case 'applied':
                setRowStatus({ positive: true });
                break;
            default:
                setRowStatus({ negative: true });
        }
    };

    return (
        <Table.Row {...rowStatus}>
            <Table.Cell content={job.name} />
            <Table.Cell>
                <a href={job.link} target="_blank">
                    {jobLink}
                </a>
            </Table.Cell>
            <Table.Cell>
                <Dropdown
                    selection
                    value={status}
                    options={options}
                    onChange={handleChange}
                />
            </Table.Cell>
            <Table.Cell>
                <Rating icon="star" defaultRating={2} maxRating={3} />
            </Table.Cell>
        </Table.Row>
    );
};

export default SavedJobsTable;
