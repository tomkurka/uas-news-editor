import React from "react"

import Navbar from "../../components/navbar/Navbar"
import UserInformation from "../../components/userInformation/UserInformation"

import "./accountPage.scss"

const AccountPage = () => {
  return (
    <div className="account-page">
      <Navbar />
      <div className="account-page-container">
        <div className="container">
          <UserInformation />
        </div>
      </div>
    </div>
  )
}

export default AccountPage
