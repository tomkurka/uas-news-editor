import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { ICONBackBroken, ICONSaveOutline, ICONSettingBold } from "../../../icon/icons"
import { toggleSettingCard } from "../../../redux/editArticle/editArticleActions"
import { saveUserArticleStart } from "../../../redux/userArticles/userArticlesActions"
import { selectEditArticleId } from "../../../redux/editArticle/editArticleSelectors"

import "./articleProperties.scss"

const ArticleProperties = ({ toggleSettingCard, saveArticle, history }) => {
  return (
    <div className="article-properties">
      <div className="article-properties-container">
        <div className="icon-container">
          <ICONBackBroken
            className="icon-df-color icon-el-size icon"
            onClick={() => history.push("/")}
          />
          <div>Back</div>
        </div>
        <div className="icon-container">
          <ICONSaveOutline className="icon-df-color icon-el-size icon" onClick={saveArticle} />
          <div>Save</div>
        </div>
        <div className="icon-container" onClick={toggleSettingCard}>
          <ICONSettingBold className="icon-df-color icon-el-size icon-highlight" />
          <div>Setting</div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => ({
  id: selectEditArticleId(state),
})

const mapDispatchToProps = dispatch => ({
  toggleSettingCard: () => dispatch(toggleSettingCard()),
  saveArticle: () => dispatch(saveUserArticleStart()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleProperties))
