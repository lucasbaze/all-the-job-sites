import React from 'react';

import { Modal, Header } from 'semantic-ui-react';

export const AboutUs = ({ open, setOpen }) => {
    return (
        <Modal
            size="tiny"
            open={open}
            onClose={() => {
                setOpen(false);
                window.gtag('event', 'navigate', {
                    event_category: 'navigation',
                    event_label: 'close about us',
                });
            }}
            closeIcon
        >
            <Header as="h2" icon="thumbs up outline" content="Welcome!" />
            <Modal.Content>
                <p>All The Job Sites is built by AllTheJobSites, Inc.</p>
                <p>
                    The motivation of this site is to make job search easier.
                    There are hundreds of job boards and finding all the jobs is
                    a nightmare. All The Job Sites is the #1 place to make all
                    of this easier.
                </p>
                <p>
                    The team currently consists of{' '}
                    <a href="https://www.linkedin.com/in/lucas-bazemore-b3ba1264/">
                        Lucas Bazemore
                    </a>{' '}
                    and{' '}
                    <a href="https://www.linkedin.com/in/cameronskelley/">
                        Cameron Kelley
                    </a>
                    .
                </p>
            </Modal.Content>
        </Modal>
    );
};
