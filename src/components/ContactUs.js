import React, { useEffect } from 'react';

import { Container, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import { ReactTypeformEmbed } from 'react-typeform-embed';

import FeaturedJob from './FeaturedJob';

const StyledTypeFormContainer = styled.div`
    display: block;
    position: relative;
    box-shadow: 3px 0px 5px rgba(112, 112, 112, 0.4);
    border-radius: 20px;
    height: calc(100vh - 15vh);
    width: 100%;
`;

const ContactUs = () => {
    useEffect(() => {
        window.gtag('event', 'navigate', {
            event_category: 'navigation',
            event_label: 'contact us',
        });
    }, []);

    return (
        <Container fluid style={{ padding: 15 }}>
            <Header as="h1" content="Contact Us" style={{ marginTop: 15 }} />
            <StyledTypeFormContainer>
                <ReactTypeformEmbed
                    url="https://lucasbazemore.typeform.com/to/iAd0PV"
                    popup={false}
                    style={{ borderRadius: 20 }}
                />
            </StyledTypeFormContainer>
        </Container>
    );
};

export default ContactUs;
