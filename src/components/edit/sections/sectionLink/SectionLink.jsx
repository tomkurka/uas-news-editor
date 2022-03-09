import React from "react"

import { connect } from "react-redux"
import { updateArticleSections } from "../../../../redux/editArticle/editArticleActions"
import SectionLabel from "../selectionLabel/SectionLabel"
import TextareaAutosize from "react-textarea-autosize"

const SectionLink = ({ link, updateSection }) => {
  return (
    <div className="link-container">
      <SectionLabel id={link.id}>Link</SectionLabel>
      <TextareaAutosize
        className="textarea-edit subtitle"
        placeholder="Enter link"
        value={link?.link}
        onChange={e => updateSection({ id: link.id, properties: { link: e.target.value } })}
      />
      <TextareaAutosize
        className="textarea-edit subtitle"
        placeholder="Enter link name"
        value={link?.name}
        onChange={e => updateSection({ id: link.id, properties: { name: e.target.value } })}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  updateSection: properties => dispatch(updateArticleSections(properties)),
})

export default connect(null, mapDispatchToProps)(SectionLink)
