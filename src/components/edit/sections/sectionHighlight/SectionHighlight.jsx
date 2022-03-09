import React from "react"
import { connect } from "react-redux"
import TextareaAutosize from "react-textarea-autosize"
import { updateArticleSections } from "../../../../redux/editArticle/editArticleActions"
import SectionLabel from "../selectionLabel/SectionLabel"

const SectionHighlight = ({ highlight, updateSection }) => {
  return (
    <div className="highlight-container">
      <SectionLabel id={highlight.id}>Highlight</SectionLabel>
      <TextareaAutosize
        className="textarea-edit subtitle"
        placeholder="Enter Highlight Paragraph"
        value={highlight?.highlight}
        onChange={e =>
          updateSection({ id: highlight.id, properties: { highlight: e.target.value } })
        }
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  updateSection: properties => dispatch(updateArticleSections(properties)),
})

export default connect(null, mapDispatchToProps)(SectionHighlight)
