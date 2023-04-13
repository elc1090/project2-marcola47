import React, { useState } from 'react';
import axios from 'axios';

import AgentsList from './components/agents-list';
import './css/app.css';

export const AgentsContext = React.createContext();

export default function App() 
{
  const root_url = 'https://valorant-api.com/v1';
  const [agents, setAgents] = useState([]);

  axios.get('https://valorant-api.com/v1/agents').then(res => {setAgents(res.data.data)});

  return (
    <div className="app"> 
      <AgentsContext.Provider value={{ agents, setAgents }}>
        <AgentsList agents={ agents }/>
      </AgentsContext.Provider>
    </div>
  );
}
