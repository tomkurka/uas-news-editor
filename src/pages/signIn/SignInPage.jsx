import React from "react"
import SignInForm from "../../components/signInForm/SignInForm"

import "./signInPage.scss"

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <div className="sign-in-page-container">
        <h2>Sign In</h2>
        <SignInForm />
      </div>
    </div>
  )
}

export default SignInPage
