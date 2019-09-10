import React from 'react';

//Components
import { Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link
            to="/"
            onClick={() =>
                window.gtag('event', 'navigate', {
                    event_category: 'navigation',
                    event_label: 'logo',
                })
            }
        >
            <Header
                as="h3"
                style={{
                    display: 'flex',
                    marginBottom: 5,
                    fontSize: '1.5em',
                }}
            >
                <Image
                    src="/apple-touch-icon.png"
                    style={{
                        width: 25,
                        height: 25,
                        marginRight: 10,
                    }}
                />
                <p>All The Job Sites</p>
            </Header>
        </Link>
    );
};

export default Logo;
