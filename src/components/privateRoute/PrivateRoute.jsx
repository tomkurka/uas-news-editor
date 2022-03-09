import React from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"
import { selectCurrentUser } from "../../redux/user/userSelectors"

const PrivateRoute = ({ currentUser, onlyLogged, redirect, ...rest }) => {
  return onlyLogged === !!currentUser ? <Route {...rest} /> : <Redirect to={redirect} />
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
})

export default connect(mapStateToProps)(PrivateRoute)
