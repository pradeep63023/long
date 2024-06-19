const SkillsCard = props => {
  const {skillsDetails} = props
  const {imageUrl, name} = skillsDetails
  return (
    <li>
      <div>
        <img src={imageUrl} alt={name} />
        <p>{name}</p>
      </div>
    </li>
  )
}

export default SkillsCard
