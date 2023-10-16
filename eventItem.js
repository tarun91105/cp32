import './index.css'

const EventItem = props => {
  const {item, onIte} = props
  const {imageUrl, name, location, id} = item

  const itemClick = event => {
    onIte(event.currentTarget.id)
  }

  return (
    <li>
      <button
        id={id}
        type="button"
        onClick={itemClick}
        className="event-main-cont"
      >
        <img className="img" src={imageUrl} alt="event" />
        <p className="name">{name}</p>
        <p>{location}</p>
      </button>
    </li>
  )
}

export default EventItem
