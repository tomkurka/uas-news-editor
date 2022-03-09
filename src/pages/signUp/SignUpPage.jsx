import React from "react"

import SignUpForm from "../../components/signUpForm/SignUpForm"

import "./signUpPage.scss"

const SignUpPage = () => {
  return (
    <div className="sign-up-page">
      <div className="sign-up-page-container">
        <h2>Sign Up</h2>
        <SignUpForm />
      </div>
    </div>
  )
}

export default SignUpPage
