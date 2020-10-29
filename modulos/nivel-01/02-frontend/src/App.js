import React, { useState, useEffect } from 'react';
import api from './services/api';

import Header from './components/Header';

import './App.css';

function App() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        })
    }, []);

    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `novo ${Date.now()}`,
            owner: 'Nadai'
        });

        const project = response.data;
        
        setProjects([...projects, project]);
    }
    return(
        <>
            <Header title="Home">
                <ul>
                    {projects.map(project => <h1 key={project.id}>{project.title}</h1>)}
                </ul>
                <button type="button" onClick={handleAddProject}>Add</button>
            </Header>
        </>
    )
};

export default App;