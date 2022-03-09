import React from "react"
import { connect } from "react-redux"
import TextareaAutosize from "react-textarea-autosize"
import { updateArticle } from "../../../../redux/editArticle/editArticleActions"
import { selectEditArticleTitle } from "../../../../redux/editArticle/editArticleSelectors"

import "./sectionTitle.scss"

const SectionTitle = ({ title, updateArticle }) => {
  return (
    <div className="title-container">
      <div className="text-section-label">Title</div>
      <TextareaAutosize
        value={title}
        className="textarea-setting title"
        onChange={e => updateArticle({ title: e.target.value })}
        placeholder="Enter title"
        maxLength={80}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  title: selectEditArticleTitle(state),
})

const mapDispatchToProps = dispatch => ({
  updateArticle: properties => dispatch(updateArticle(properties)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SectionTitle)
