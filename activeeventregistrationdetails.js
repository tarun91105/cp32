// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {id11} = props

  const yetToRegister = () => (
    <div>
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
        alt="yet to register"
      />
      <button type="button">Register here</button>
    </div>
  )

  const register = () => (
    <div>
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <p>You have already registered for this event</p>
    </div>
  )

  const registrationsClosed = () => (
    <div>
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  const deft = () => (
    <div>
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  switch (id11) {
    case 'YET_TO_REGISTER':
      return yetToRegister()
    case 'REGISTERED':
      return register()
    case 'REGISTRATIONS_CLOSED':
      return registrationsClosed()
    default:
      return deft()
  }
}

export default ActiveEventRegistrationDetails
