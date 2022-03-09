import React from "react"
import ArticleSectionsContainer from "../articleSectionsContainer/ArticleSectionsContainer"

import "./articleEdit.scss"

const ArticleEdit = () => {
  return (
    <div className="article-edit">
      <div className="article-edit-container">
        <ArticleSectionsContainer />
      </div>
    </div>
  )
}

export default ArticleEdit
