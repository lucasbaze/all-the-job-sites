import React from 'react';

//Components
import { Segment, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const LinkToAccount = ({ user }) => {
    return (
        <Link to="/me">
            <Segment style={{ display: 'flex', padding: 10 }}>
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
                    <p>My Account</p>
                </div>
            </Segment>
        </Link>
    );
};

export default LinkToAccount;
