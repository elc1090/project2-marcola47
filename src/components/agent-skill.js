export default function AgentSkill({ skill, id })
{
  return (
    <div className="agent__skill" id={id}>
      <div className="skill__name">{skill.displayName}</div>
    </div>
  )
}