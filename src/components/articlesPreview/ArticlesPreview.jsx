import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import { createUserArticleStart } from "../../redux/userArticles/userArticlesActions"
import { selectUserArticlesArraySortedDate } from "../../redux/userArticles/userArticlesSelectors"
import ArticlePreview from "../articlePreview/ArticlePreview"

import "./articlesPreview.scss"

const ArticlesPreview = ({ userArticlesArray, createArticle, history }) => {
  return (
    <div className="articles-preview">
      <div className="articles-preview-header">
        <div className="label">Your articles</div>
        <div className="create-article-button" onClick={() => createArticle({ history })}>
          New
        </div>
      </div>
      <div className="articles-preview-container">
        {userArticlesArray?.map(article => (
          <ArticlePreview key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  userArticlesArray: selectUserArticlesArraySortedDate(state),
})

const mapDispatchToPro = dispatch => ({
  createArticle: data => dispatch(createUserArticleStart(data)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToPro)(ArticlesPreview))
