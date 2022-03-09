import React from "react"
import { connect } from "react-redux"
import LoadAnimation from "../loadAnimation/LoadAnimation"

import "./loadAnimationHandler.scss"

const LoadAnimationHandler = ({ isLoadingEditorArticle, isLoadingUserArticles, isLoadingUser }) => {
  if (isLoadingEditorArticle || isLoadingUserArticles || isLoadingUser) {
    return <LoadAnimation />
  }

  return <div></div>
}

const mapStateToProps = state => ({
  isLoadingEditorArticle: state.userArticles.isLoading,
  isLoadingUserArticles: state.userArticles.isLoading,
  isLoadingUser: state.userArticles.isLoading,
})

export default connect(mapStateToProps)(LoadAnimationHandler)
