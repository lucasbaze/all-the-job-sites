import React from 'react';
import './App.css';
import { Responsive } from 'semantic-ui-react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from './HomePage';
import SideBar from './SideBar';
import SiteContent from './SiteContent';
import PostJob from './PostJob';
import ContactUs from './ContactUs';

import { StateProvider } from '../state';

const MainContainer = styled.div`
    display: Flex;
    flex-direction: row;
    align-items: stretch;
`;

const MainContentContainer = styled.div`
    flex: 3;
    overflow: scroll;
`;

const App = props => {
    const initialState = {
        searchValue: '',
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'updateSearch':
                let cleanedSearch = action.payload.replace(
                    /[^a-zA-Z 0-9]/g,
                    ''
                );

                return {
                    ...state,
                    searchValue: cleanedSearch,
                };
            default:
                return state;
        }
    };

    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <BrowserRouter>
                <MainContainer>
                    <SideBar />
                    <Responsive as={MainContentContainer} minWidth={768}>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/contact-us" component={ContactUs} />
                        <Route exact path="/post-job" component={PostJob} />
                        <Route
                            exact
                            path="/:categorySlug/:nameSlug"
                            component={SiteContent}
                        />
                    </Responsive>
                </MainContainer>
            </BrowserRouter>
        </StateProvider>
    );
};

export default App;
