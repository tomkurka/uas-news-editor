import React, { useEffect } from "react"
import { connect } from "react-redux"

import { Switch, Route, Redirect } from "react-router-dom"

import AccountPage from "../pages/account/AccountPage"
import DashboardPage from "../pages/dashboard/DashboardPage"
import EditArticlePage from "../pages/editArticle/EditArticlePage"
import NotFoundPage from "../pages/notFound/NotFoundPage"
import SignInPage from "../pages/signIn/SignInPage"
import SignUpPage from "../pages/signUp/SignUpPage"
import { selectCurrentUser, selectIsUserInitializeCompleted } from "../redux/user/userSelectors"
import { fetchUserArticlesStart } from "../redux/userArticles/userArticlesActions"
import LoadAnimation from "./loadAnimation/LoadAnimation"
import PrivateRoute from "./privateRoute/PrivateRoute"
import LoadAnimationHandler from "./loadAnimationHandler/LoadAnimationHandler"

const App = ({ isUserInitializeCompleted, fetchUserArticles, currentUser }) => {
  useEffect(() => {
    if (currentUser) {
      fetchUserArticles()
    }
    // eslint-disable-next-line
  }, [currentUser])
  return (
    <div>
      {isUserInitializeCompleted ? (
        <div>
          <LoadAnimationHandler />
          <Switch>
            <PrivateRoute
              exact
              onlyLogged={true}
              redirect="/sign-in"
              path="/account"
              component={AccountPage}
            />
            <PrivateRoute
              exact
              onlyLogged={true}
              redirect="/sign-in"
              path="/"
              component={DashboardPage}
            />
            <PrivateRoute
              exact
              onlyLogged={true}
              redirect="/sign-in"
              path="/article/:articleId"
              component={EditArticlePage}
            />
            <PrivateRoute
              exact
              onlyLogged={false}
              redirect="/"
              path="/sign-in"
              component={SignInPage}
            />
            <PrivateRoute
              exact
              onlyLogged={false}
              redirect="/"
              path="/sign-up"
              component={SignUpPage}
            />
            <Route exact path="/not-found" component={NotFoundPage} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      ) : (
        <div className="load-animation-container-app">
          <LoadAnimation />
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  isUserInitializeCompleted: selectIsUserInitializeCompleted(state),
  currentUser: selectCurrentUser(state),
})

const mapDispatchToPro = dispatch => ({
  fetchUserArticles: () => dispatch(fetchUserArticlesStart()),
})

export default connect(mapStateToProps, mapDispatchToPro)(App)
