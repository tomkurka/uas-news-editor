import React, { useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { copyArticle } from "../../../redux/editArticle/editArticleActions"
import { selectCardSettingVisible } from "../../../redux/editArticle/editArticleSelectors"
import { selectUserArticle } from "../../../redux/userArticles/userArticlesSelectors"
import ArticleBlocks from "../articleBlocks/ArticleBlocks"
import ArticleEdit from "../articleEdit/ArticleEdit"
import ArticleProperties from "../articleProperties/ArticleProperties"
import SettingCard from "../settingCard/SettingCard"

import "./editArticle.scss"

const EditArticle = ({ history, copyArticle, article, cardSettingVisible }) => {
  useEffect(() => {
    article ? copyArticle(article) : history.push("/")
    // eslint-disable-next-line
  }, [])

  return (
    <div className="edit-article">
      <div className="edit-article-container">
        <ArticleBlocks />
        <ArticleEdit />
        <ArticleProperties />
        {cardSettingVisible && <SettingCard />}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  article: selectUserArticle(ownProps.match.params.articleId)(state),
  cardSettingVisible: selectCardSettingVisible(state),
})

const mapDispatchToProps = dispatch => ({
  copyArticle: article => dispatch(copyArticle(article)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditArticle))
