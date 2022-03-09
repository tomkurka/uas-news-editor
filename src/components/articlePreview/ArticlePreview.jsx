import React from "react"
import { ICONEditBroken, ICONPeopleBroken, ICONTrashBroken, ICONUserBroken } from "../../icon/icons"
import UserArticleButton from "../userArticleButton/UserArticleButton"
import { format } from "date-fns"

import "./articlePreview.scss"

const ArticlePreview = ({ article }) => {
  return (
    <div className="article-preview">
      <div className="article-preview-container">
        <div className="header-side">
          <h3>{article.title || "No title is provided"}</h3>
        </div>
        <div className="content-side">
          <div>{article.subtitle || "No subtitle is provided"}</div>
        </div>
        <div className="edit-side">
          {format(new Date(article.lastModifiedAt), "LLLL dd yyyy")}
          <UserArticleButton type="EDIT_ARTICLE" id={article.id} className="icon-container">
            <ICONEditBroken className="icon-df-color icon-df-size icon" />
          </UserArticleButton>
          <UserArticleButton type="TOGGLE_PUBLISH" id={article.id} className="icon-container">
            {article.isPublished ? (
              <ICONPeopleBroken className="icon-df-color icon-df-size icon" />
            ) : (
              <ICONUserBroken className="icon-df-color icon-df-size icon" />
            )}
          </UserArticleButton>
          <UserArticleButton type="DELETE_ARTICLE" id={article.id} className="icon-container">
            <ICONTrashBroken className="icon-df-color icon-df-size icon" />
          </UserArticleButton>
        </div>
      </div>
    </div>
  )
}

export default ArticlePreview
