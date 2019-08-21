import React, { useState } from 'react';
import './App.css';

import TopBar from './components/TopBar.js';
import Body from './components/Body.js';

function App() {
    return (
        <div className="App">
            <TopBar />
            <Body />
        </div>
    );
}

export default App;
