import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './App.css';
import { Container, Grid, Header } from 'semantic-ui-react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from './HomePage';

// import TopBar from './components/TopBar.js';
// import Body from './components/Body.js';
//
// function App() {
//     const [currentSite, setCurrentSite] = useState({});
//     return (
//         <div className="App">
//             <TopBar setCurrentSite={setCurrentSite} />
//             <Body currentSite={currentSite} setCurrentSite={setCurrentSite} />
//         </div>
//     );
// }

import SideBar from './SideBar';
import SiteContent from './SiteContent';
import PostJob from './PostJob';
import ContactUs from './ContactUs';

const MainContainer = styled.div`
    display: Flex;
    flex-direction: row;
    align-items: stretch;
`;

const SideBarContainer = styled.div`
    flex: ${props => (props.collapsed ? 0.55 : 1)};
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    overflow-y: scroll;
    overflow-x: hidden;
    box-shadow: 3px 0px 5px #eaeaea;
    transition: flex 0.5s linear;
`;

const MainContentContainer = styled.div`
    flex: 3;
    overflow: scroll;
`;

const App = props => {
    return (
        <BrowserRouter>
            <MainContainer>
                <SideBar />
                <MainContentContainer>
                    <Route exact path="/" render={() => <HomePage />} />
                    <Route exact path="/site" render={() => <SiteContent />} />
                    <Route
                        exact
                        path="/contact-us"
                        render={() => <ContactUs />}
                    />
                    <Route exact path="/post-job" render={() => <PostJob />} />
                </MainContentContainer>
            </MainContainer>
        </BrowserRouter>
    );
};

const mapStateToProps = ({ site }) => {
    return { site: site };
};

export default connect(
    mapStateToProps,
    actions
)(App);
