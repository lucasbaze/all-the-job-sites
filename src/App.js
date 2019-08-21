import React, { useState } from 'react';
import './App.css';

import TopBar from './components/TopBar.js';
import Body from './components/Body.js';

function App() {
    const [currentSite, setCurrentSite] = useState({});

    return (
        <div className="App">
            <TopBar setCurrentSite={setCurrentSite} />
            <Body currentSite={currentSite} setCurrentSite={setCurrentSite} />
        </div>
    );
}

export default App;
