import React from 'react';
import { Responsive } from 'semantic-ui-react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

//Components
import HomePage from '../HomePage';
import SideBar from '../SideBar';
import SiteContent from '../../components/SiteContent';
import PostJob from '../PostJob';
import ContactUs from '../ContactUs';
import UserProfile from '../UserProfile';

//State
import { StateProvider } from '../../state';
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
                            pathname: "/",
                            state: { from: props.location }
                        }}
                    />
                )
            }
            />
    );
}

const App = props => {
    const initialState = {
        searchValue: '',
        user: {},
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
                        <PrivateRoute
                            exact
                            path="/user-profile"
                            component={UserProfile}
                        />
                    </Responsive>
                </MainContainer>
            </BrowserRouter>
        </StateProvider>
    );
};

export default App;
