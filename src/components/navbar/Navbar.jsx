import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import { ICONLogoOutline } from "../../icon/icons"
import { signOutStart } from "../../redux/user/userActions"
import DarkThemeToggle from "../darkThemeToggle/DarkThemeToggle"

import "./navbar.scss"

const Navbar = ({ signOut, history, location }) => {
  const path = location.pathname

  return (
    <div className="navbar">
      <div className="theme-container">
        <DarkThemeToggle />
      </div>

      <div className="navbar-container-desktop">
        <div className="side-logo" onClick={() => history.push("/")}>
          <ICONLogoOutline className="app-icon" />
          <div className="app-name">
            UAS <span className="app-name-bold">News Editor</span>
          </div>
        </div>
        <div className="side-links">
          <div onClick={() => history.push("/")} className={`link ${path === "/" ? "active" : ""}`}>
            Dashboard
          </div>
          <div
            onClick={() => history.push("/account")}
            className={`link ${path === "/account" ? "active" : ""}`}
          >
            Account
          </div>
          <div onClick={signOut} className="link">
            Sign Out
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutStart()),
})

export default connect(null, mapDispatchToProps)(withRouter(Navbar))
