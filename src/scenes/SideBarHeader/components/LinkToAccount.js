import React from 'react';

//Components
import { Segment, Image, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { TotalJobsSelector } from '../../../selectors';
import { Row, Column } from '../../../globals/styles';
import { AddJobModal } from '../../../components/Modals';

const LinkToAccount = ({ user }) => {
    return (
        <Segment
            style={{
                padding: 10,
                boxShadow: 'none',
            }}
        >
            <Link to="/me">
                <Image
                    src={user.photoURL}
                    style={{
                        borderRadius: 20,
                        minWidth: 40,
                        height: 40,
                        marginRight: 10,
                    }}
                />
                <div>
                    <h3
                        style={{
                            marginBottom: 0,
                            paddingBottom: 0,
                        }}
                    >
                        {user.displayName}
                    </h3>
                    <p>
                        Saved Jobs
                        <Label
                            color="red"
                            circular
                            size="tiny"
                            style={{ marginLeft: 7 }}
                        >
                            <TotalJobsSelector />
                        </Label>
                    </p>
                </div>
            </Link>
            <AddJobModal />
        </Segment>
    );
};

export default LinkToAccount;
