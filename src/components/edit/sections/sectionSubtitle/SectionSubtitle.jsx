import React from "react"
import { connect } from "react-redux"
import TextareaAutosize from "react-textarea-autosize"
import { updateArticleSections } from "../../../../redux/editArticle/editArticleActions"
import SectionLabel from "../selectionLabel/SectionLabel"

import "./sectionSubtitle.scss"

const SectionSubtitle = ({ updateSection, subtitle }) => {
  return (
    <div className="subtitle-container">
      <SectionLabel id={subtitle.id}>Subtitle</SectionLabel>

      <TextareaAutosize
        className="textarea-edit subtitle"
        placeholder="Enter Subtitle"
        value={subtitle?.subtitle}
        onChange={e => updateSection({ id: subtitle.id, properties: { subtitle: e.target.value } })}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  updateSection: properties => dispatch(updateArticleSections(properties)),
})

export default connect(null, mapDispatchToProps)(SectionSubtitle)
