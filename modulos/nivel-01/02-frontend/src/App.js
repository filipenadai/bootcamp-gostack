import React, { useState } from 'react';

import Header from './components/Header';

import './App.css';

function App() {

    const [projects, setProjects] = useState(['Novo', 'Novo2']);

    function handleAddProject() {
        setProjects([...projects, `novo ${Date.now()}`]);
    }
    return(
        <>
            <Header title="Home">
                <ul>
                    {projects.map(project => <h1>{project}</h1>)}
                </ul>
                <button type="button" onClick={handleAddProject}>Add</button>
            </Header>
        </>
    )
};

export default App;