import React from "react"
import { connect } from "react-redux"
import { signOutStart } from "../../redux/user/userActions"

const SignOutButton = ({ signOut }) => {
  return <button onClick={signOut}>Sign Out</button>
}

const mapDispatchToPro = dispatch => ({
  signOut: () => dispatch(signOutStart()),
})

export default connect(null, mapDispatchToPro)(SignOutButton)
