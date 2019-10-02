import React, { useState, useEffect } from 'react';

//Components
import { Responsive, Menu } from 'semantic-ui-react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

//Custom Components
import HomePage from '../HomePage';
import SideBarHeader from '../SideBarHeader';
import PostJob from '../PostJob';
import ContactUs from '../ContactUs';
import User from '../User';
import JobSites from '../JobSites';
import Footer from '../../components/Footer';
import SiteContent from '../../components/SiteContent';
import { MobileMenu } from '../../components/MobileMenu';

//Reducer / Actions
import * as userActions from '../../reducers/userReducer';
import { mainReducer } from '../../reducers';

//State
import { StateProvider, useStateValue } from '../../state';
import firebase from '../../firebase';

//CSS
import {
    RootContainer,
    MainContentContainer,
    SideBarContainer,
    StyledSideBar,
    StyledJobSitesContainer,
} from './Styled';
import './App.css';

//
function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                firebase.auth().currentUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
}

//
const App = props => {
    //
    const [{ user, searchValue, category }, dispatch] = useStateValue();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                let { displayName, email, photoURL, uid, emailVerified } = user;
                //Check if the user is already associated with a DB record
                userActions.getOrCreateUserDBRecord(dispatch, user);

                //Set user to global state
                userActions.setUser(dispatch, {
                    displayName,
                    email,
                    photoURL,
                    uid,
                    emailVerified,
                });
                userActions.setLoading(false);
            }
        });
    }, [dispatch]);

    return (
        <BrowserRouter>
            {/*
                Mobile View
            */}
            <Responsive as={RootContainer} maxWidth={767}>
                <SideBarContainer>
                    <MobileMenu>
                        <SideBarHeader />
                        <StyledSideBar as={Switch}>
                            <Route
                                exact
                                path="/site/:categorySlug/:nameSlug"
                                component={SiteContent}
                            />
                            <Route exact path="/home" component={HomePage} />
                            <Route
                                exact
                                path="/contact-us"
                                component={ContactUs}
                            />
                            <Route exact path="/post-job" component={PostJob} />
                            <PrivateRoute path="/me" component={User} />
                            <Route
                                exact
                                path="/"
                                render={() => (
                                    <JobSites
                                        searchValue={searchValue}
                                        allOpen={category.all}
                                    />
                                )}
                            />
                        </StyledSideBar>
                        <Footer />
                    </MobileMenu>
                </SideBarContainer>
            </Responsive>

            {/*
                Desktop View
            */}
            <Responsive as={RootContainer} minWidth={768}>
                <SideBarContainer>
                    <SideBarHeader />
                    <StyledJobSitesContainer>
                        <JobSites
                            searchValue={searchValue}
                            allOpen={category.all}
                        />
                    </StyledJobSitesContainer>
                </SideBarContainer>
                <MainContentContainer>
                    <StyledSideBar as={Switch}>
                        <Route
                            exact
                            path="/site/:categorySlug/:nameSlug"
                            component={SiteContent}
                        />
                        <Route exact path="/contact-us" component={ContactUs} />
                        <Route exact path="/post-job" component={PostJob} />
                        <PrivateRoute path="/me" component={User} />
                        <Route exact path="/" component={HomePage} />
                    </StyledSideBar>
                </MainContentContainer>
            </Responsive>
        </BrowserRouter>
    );
};

const AppStateWrapper = props => {
    //
    const initialState = {
        searchValue: '',
        user: null,
        savedJobs: [],
        category: {
            all: false,
        },
        preferences: {
            location: [],
            role: [],
            skill: [],
            industry: [],
        },
    };

    return (
        <StateProvider initialState={initialState} reducer={mainReducer}>
            <App />
        </StateProvider>
    );
};

export default AppStateWrapper;
