import React from "react"
import { connect } from "react-redux"

import { ICONTrashBroken } from "../../../../icon/icons"
import { deleteArticleSection } from "../../../../redux/editArticle/editArticleActions"

import "./sectionLabel.scss"

const SectionLabel = ({ id, children, deleteSection }) => {
  return (
    <div className="section-label">
      <div className="label">{children}</div>
      <ICONTrashBroken onClick={() => deleteSection(id)} className="label-icon icon-df-color" />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteSection: id => dispatch(deleteArticleSection(id)),
})

export default connect(null, mapDispatchToProps)(SectionLabel)
