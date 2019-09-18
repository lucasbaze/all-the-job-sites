import React from 'react';

//Components
import { Segment, Image, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { TotalJobsSelector } from '../../../selectors';

const LinkToAccount = ({ user }) => {
    return (
        <Link to="/me">
            <Segment
                style={{
                    display: 'flex',
                    padding: 10,
                    boxShadow: 'none'
                }}
            >
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
            </Segment>
        </Link>
    );
};

export default LinkToAccount;
