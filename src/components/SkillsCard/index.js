const SkillsCard = props => {
  const {SkillsDetails} = props
  const {imageUrl, name} = SkillsDetails
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
