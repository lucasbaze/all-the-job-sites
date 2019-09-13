import React, { useState, useEffect } from 'react';
import { Responsive, Menu } from 'semantic-ui-react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

//Components
import HomePage from '../HomePage';
import SideBar from '../SideBar';
import SiteContent from '../../components/SiteContent';
import PostJob from '../PostJob';
import ContactUs from '../ContactUs';
import User from '../User';

//State
import * as actions from '../../actions';
import { StateProvider, useStateValue } from '../../state';
import { reducer } from '../../reducers';
import firebase from '../../firebase';

//CSS
import { MainContainer, MainContentContainer } from './Styled';
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
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            let { displayName, email, photoURL, uid, emailVerified } = user;

            //Check if the user is already associated with a DB record
            actions.getOrCreateUserDBRecord(dispatch, user);

            //Set user to global state
            actions.setUser(dispatch, {
                displayName,
                email,
                photoURL,
                uid,
                emailVerified,
            });
        });
    }, [dispatch]);

    return (
        <BrowserRouter>
            <MainContainer>
                <SideBar />
                <Responsive as={MainContentContainer} minWidth={768}>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/contact-us" component={ContactUs} />
                    <Route exact path="/post-job" component={PostJob} />
                    <PrivateRoute path="/me" component={User} />
                    <Route
                        exact
                        path="/site/:categorySlug/:nameSlug"
                        component={SiteContent}
                    />
                </Responsive>
            </MainContainer>
        </BrowserRouter>
    );
};

const AppStateWrapper = props => {
    //
    const initialState = {
        searchValue: '',
        user: null,
        savedJobs: [],
        preferences: {},
    };

    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateProvider>
    );
};

export default AppStateWrapper;
