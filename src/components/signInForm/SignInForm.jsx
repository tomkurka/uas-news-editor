import React, { useState } from "react"
import FormInput from "../formInput/FormInput"
import CustomButton from "../customButton/CustomButton"

import { emailSignInStart } from "../../redux/user/userActions"
import { connect } from "react-redux"

import "./signInForm.scss"

const SignInForm = ({ emailSignIn }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  })

  const handleChange = e => {
    const { value, name } = e.target
    setUserCredentials(prevUserCredentials => ({ ...prevUserCredentials, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { email, password } = userCredentials
    emailSignIn(email, password)
  }

  return (
    <div className="sign-in">
      <form className="form-sign-in" onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={userCredentials.email}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={userCredentials.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  )
}

const mapDispatchToPro = dispatch => ({
  emailSignIn: (email, password) => dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToPro)(SignInForm)
