import React from "react"
import { connect } from "react-redux"
import TextareaAutosize from "react-textarea-autosize"
import { updateArticleSections } from "../../../../redux/editArticle/editArticleActions"
import SectionLabel from "../selectionLabel/SectionLabel"

import "./sectionParagraph.scss"

const SectionParagraph = ({ updateSection, paragraph }) => {
  return (
    <div className="paragraph-container">
      <SectionLabel id={paragraph.id}>Paragraph</SectionLabel>

      <TextareaAutosize
        className="textarea-edit subtitle"
        placeholder="Enter Paragraph"
        value={paragraph?.paragraph}
        onChange={e =>
          updateSection({ id: paragraph.id, properties: { paragraph: e.target.value } })
        }
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  updateSection: properties => dispatch(updateArticleSections(properties)),
})

export default connect(null, mapDispatchToProps)(SectionParagraph)
