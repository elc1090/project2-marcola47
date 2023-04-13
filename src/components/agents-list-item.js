import AgentSkill from './agent-skill';

export default function AgentsListItem({ agent })
{

  return (
    <div className='agents__item'>
      <div className='agent__name'>{agent.displayName}</div>
      
      <div className="agent__skills">
        <AgentSkill skill={agent.abilities[0]} id="skill-q"/>
        <AgentSkill skill={agent.abilities[1]} id="skill-e"/>
        <AgentSkill skill={agent.abilities[2]} id="skill-c"/>  
        <AgentSkill skill={agent.abilities[3]} id="skill-ult"/>
      </div>
    </div>
  )
}