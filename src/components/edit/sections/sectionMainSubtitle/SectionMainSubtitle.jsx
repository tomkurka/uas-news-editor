import React from "react"
import { connect } from "react-redux"
import TextareaAutosize from "react-textarea-autosize"
import { updateArticle } from "../../../../redux/editArticle/editArticleActions"
import { selectEditArticleMainSubtitle } from "../../../../redux/editArticle/editArticleSelectors"

const SectionMainSubtitle = ({ subtitle, updateArticle }) => {
  return (
    <div className="subtitle-container">
      <div className="text-section-label">Subtitle</div>
      <TextareaAutosize
        className="textarea-setting subtitle"
        placeholder="Enter title"
        value={subtitle}
        onChange={e => updateArticle({ subtitle: e.target.value })}
        maxLength={250}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  subtitle: selectEditArticleMainSubtitle(state),
})

const mapDispatchToProps = dispatch => ({
  updateArticle: properties => dispatch(updateArticle(properties)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SectionMainSubtitle)
