import React from "react"

import "react-tagsinput/react-tagsinput.css"
import { ICONTrashBold } from "../../../icon/icons"
import uuid from "react-uuid"
import { selectEditArticleTags } from "../../../redux/editArticle/editArticleSelectors"
import { addTag, deleteTag } from "../../../redux/editArticle/editArticleActions"
import { connect } from "react-redux"
import "./articleTags.scss"

const ArticleTags = ({ addTag, deleteTag, tags }) => {
  const handleInput = e => {
    if (e.key === "Enter") {
      if (e.target.value.length >= 2 && tags.length < 5) {
        const value = e.target.value
        addTag({ value, id: uuid() })
        e.target.value = ""
      }
    }
  }

  const handleDelete = id => {
    deleteTag(id)
  }

  return (
    <div className="article-tags">
      <div className="text-section-label">Article Tags</div>
      <div className="article-tags-container">
        {tags.map(tag => (
          <span key={tag.id} className="article-tag">
            {tag.value}
            <ICONTrashBold
              fill="white"
              className="icon-sm-size icon"
              onClick={() => handleDelete(tag.id)}
            />
          </span>
        ))}
        <input
          onKeyDown={handleInput}
          type="text"
          className="tag-input input"
          placeholder="Type Here"
        />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  tags: selectEditArticleTags(state),
})

const mapDispatchToProps = dispatch => ({
  addTag: tag => dispatch(addTag(tag)),
  deleteTag: id => dispatch(deleteTag(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleTags)
