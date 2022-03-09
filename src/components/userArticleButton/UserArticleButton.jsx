import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import UserArticlesButtonActionTypes from "./UserArticleButtonTypes"
import {
  createUserArticleStart,
  deleteUserArticleStart,
  togglePublishArticleStart,
} from "../../redux/userArticles/userArticlesActions"

const UserArticleButton = ({
  type,
  id,
  history,
  children,
  label,
  className,
  createArticle,
  deleteArticle,
  togglePublishArticle,
}) => {
  const clickHandler = () => {
    switch (type) {
      case UserArticlesButtonActionTypes.EDIT_ARTICLE.id:
        history.push(`/article/${id}`)
        break
      case UserArticlesButtonActionTypes.CREATE_ARTICLE.id:
        createArticle(id)
        break
      case UserArticlesButtonActionTypes.DELETE_ARTICLE.id:
        deleteArticle(id)
        break
      case UserArticlesButtonActionTypes.TOGGLE_PUBLISH.id:
        togglePublishArticle(id)
        break
      default:
        console.log("Error! Enter correct type name!")
    }
  }

  if (children)
    return (
      <span onClick={clickHandler} className={className}>
        {children}
      </span>
    )
  return (
    <button className={"button btn-basic " + className} onClick={clickHandler}>
      {label ? label : UserArticlesButtonActionTypes[type]?.label || "Enter correct type"}
    </button>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteArticle: id => dispatch(deleteUserArticleStart({ id })),
  createArticle: id => dispatch(createUserArticleStart({ id })),
  togglePublishArticle: id => dispatch(togglePublishArticleStart({ id })),
})

export default withRouter(connect(null, mapDispatchToProps)(UserArticleButton))
