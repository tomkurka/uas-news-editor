import React, { useState } from "react"
import FormInput from "../formInput/FormInput"
import CustomButton from "../customButton/CustomButton"
import { connect } from "react-redux"
import { emailSignUpStart } from "../../redux/user/userActions"

import "./signUpForm.scss"

const SignUpForm = ({ emailSignUp }) => {
  const [userCredentials, setUserCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  })

  const handleChange = e => {
    const { value, name } = e.target
    setUserCredentials(prevUserCredentials => ({ ...prevUserCredentials, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { lastName, firstName, email, password, passwordConfirm } = userCredentials
    if (password !== passwordConfirm) return alert("Your password do not match!")
    emailSignUp(firstName, lastName, email, password)
  }

  return (
    <div className="sign-up">
      <form className="form-sign-up" onSubmit={handleSubmit}>
        <FormInput
          name="firstName"
          type="text"
          handleChange={handleChange}
          value={userCredentials.firstName}
          label="Name"
          required
        />
        <FormInput
          name="lastName"
          type="text"
          handleChange={handleChange}
          value={userCredentials.lastName}
          label="Surname"
          required
        />
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
        <FormInput
          name="passwordConfirm"
          type="password"
          value={userCredentials.passwordConfirm}
          handleChange={handleChange}
          label="Password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  )
}

const mapDispatchToPro = dispatch => ({
  emailSignUp: (firstName, lastName, email, password) =>
    dispatch(
      emailSignUpStart({ user: { email, password }, additionalData: { firstName, lastName } })
    ),
})

export default connect(null, mapDispatchToPro)(SignUpForm)
