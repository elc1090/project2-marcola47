import React from 'react';

import AgentsListItem from './agents-list-item';

export default function AgentsList({ agents })
{
  return (
    <div className='agents'>
      {agents.map(agent => {return <AgentsListItem key={agent.uuid} agent={agent}/>})}
    </div>
  )
}