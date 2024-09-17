// Write your code here.
import './index.css'
const CardItem = props => {
  const {details} = props
  const {title, description, imgUrl, className} = details
  return (
    <li className="container">
      <li className={`card-item ${className}`}>
        <h1 className="header">{title}</h1>
        <p className="content">{description}</p>
        <img src={imgUrl} alt={title} className="imggg" />
      </li>
    </li>
  )
}
export default CardItem
