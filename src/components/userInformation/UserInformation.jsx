import React, { useState } from "react"
import { connect } from "react-redux"
import Textarea from "react-textarea-autosize"
import { updateUserProfileStart } from "../../redux/user/userActions"
import { selectCurrentUser } from "../../redux/user/userSelectors"

import "./userInformation.scss"

const UserInformation = ({ currentUser, updateProfile }) => {
  const [credentials, setCredentials] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    bio: currentUser?.bio,
  })

  const handleChange = e => {
    setCredentials(cre => ({ ...cre, [e.target.name]: e.target.value }))
  }

  const handleSave = e => {
    updateProfile({ ...credentials })
  }

  return (
    <div className="user-information">
      <div>Your information</div>
      <div className="user-information-container">
        <div className="information-box">
          <div className="label">Name</div>
          <Textarea
            className="textarea-account"
            placeholder="Your name"
            name="firstName"
            value={credentials.firstName}
          />
        </div>
        <div className="information-box">
          <div className="label">Surname</div>
          <Textarea
            className="textarea-account"
            placeholder="Your surname"
            name="lastName"
            value={credentials.lastName}
          />
        </div>
        <div className="information-box">
          <div className="label">Biography</div>
          <Textarea
            className="textarea-account"
            placeholder="Your biography"
            name="bio"
            value={credentials?.bio}
            onChange={handleChange}
          />
        </div>
        <div className="information-box">
          <div className="label">Email</div>
          <Textarea className="textarea-account" value={currentUser.email} />
        </div>
        <div className="buttons-container">
          <button className="btn btn-basic" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
})

const mapDispatchToProps = dispatch => ({
  updateProfile: data => dispatch(updateUserProfileStart(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInformation)
