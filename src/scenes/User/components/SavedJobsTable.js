import React, { useState, useEffect } from 'react';
import _ from 'lodash';

//State
import * as jobsActions from '../../../reducers/jobsReducer';
import { useStateValue } from '../../../state';

//Components
import {
    Table,
    Dropdown,
    Header,
    Icon,
    Button,
    Responsive,
} from 'semantic-ui-react';

const SavedJobsTable = props => {
    const [modSavedJobs, setModSavedJobs] = useState([]);
    const [{ user }, dispatch] = useStateValue();
    let { savedJobs } = props;

    const groupJobsByStatus = () => {
        let groupedJobs = savedJobs
            .sort((a, b) => {
                if (a.status == 'new') {
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
        //Group jobs by status
        let groupedJobs = groupJobsByStatus();

        //Set saved jobs as an array
        setModSavedJobs(Object.entries(groupedJobs));
    }, [props]);

    const handleStatusChange = (key, value) => {
        jobsActions.updateSavedJob(dispatch, user.uid, savedJobs, key, value);
    };

    const handleDelete = key => {
        jobsActions.deleteSavedJob(dispatch, user.uid, savedJobs, key);
    };

    return (
        <>
            <Header as="h1" content="Saved Jobs" />
            {modSavedJobs.length != 0 ? (
                modSavedJobs.map((category, index1) => {
                    let [name, jobs] = category;
                    let reducedJobs = jobs.map((job, index2) => {
                        let jobLink = job.link.substring(8, 35).concat('...');
                        return (
                            <JobRow
                                key={job.key}
                                job={job}
                                index={`${index1}${index2}`}
                                handleStatusChange={handleStatusChange}
                                handleDelete={handleDelete}
                            />
                        );
                    });
                    return (
                        <Table key={index1} stackable>
                            <Table.Header>
                                <Responsive as={Table.Row} minWidth={767}>
                                    <Table.HeaderCell>
                                        Job Name
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>Link</Table.HeaderCell>
                                    <Table.HeaderCell>Status</Table.HeaderCell>
                                    <Table.HeaderCell>Delete</Table.HeaderCell>
                                </Responsive>
                            </Table.Header>
                            <Table.Body>{reducedJobs}</Table.Body>
                        </Table>
                    );
                })
            ) : (
                <Header as="h3" content="You don't have any saved jobs!" />
            )}
        </>
    );
};

const JobRow = ({ job, index, handleStatusChange, handleDelete }) => {
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

    let jobLink = job.link.substring(8, 55).concat('...');

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
            <Table.Cell content={job.name} width={4} />
            <Table.Cell width={8}>
                <a
                    href={job.link}
                    target="_blank"
                    onClick={() => {
                        window.gtag('event', 'open saved job', {
                            event_category: 'user',
                            event_label: 'open saved job',
                        });
                    }}
                >
                    {jobLink}
                </a>
            </Table.Cell>
            <Table.Cell width={2}>
                <Dropdown
                    selection
                    value={status}
                    options={options}
                    onChange={handleChange}
                />
            </Table.Cell>
            <Table.Cell width={1}>
                <Button
                    basic
                    icon="trash"
                    onClick={() => {
                        handleDelete(job.key);
                        window.gtag('event', 'delete job', {
                            event_category: 'user',
                            event_label: 'delete job',
                        });
                    }}
                />
            </Table.Cell>
        </Table.Row>
    );
};

export default SavedJobsTable;
