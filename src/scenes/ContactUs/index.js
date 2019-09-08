import React, { useEffect } from 'react';

//Components
import { Container, Header } from 'semantic-ui-react';
import { ReactTypeformEmbed } from 'react-typeform-embed';

//CSS
import { StyledTypeFormContainer } from './Styled';

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
