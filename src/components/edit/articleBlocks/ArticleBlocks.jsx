import React from "react"
import { connect } from "react-redux"
import {
  ICONDocumentTextBroken,
  ICONImageBroken,
  ICONLinkBroken,
  ICONSubtitleBroken,
  ICONTextBroken,
  ICONVideoBroken,
} from "../../../icon/icons"
import { addToArticleSection } from "../../../redux/editArticle/editArticleActions"
import { AddSectionTypes } from "../../../redux/editArticle/editArticleUtils"
import "./articleBlocks.scss"

const ArticleBlocks = ({ addSection }) => {
  return (
    <div className="article-blocks">
      <div className="article-blocks-container">
        <div
          className="section-container"
          onClick={() => addSection({ type: AddSectionTypes.SUBTITLE })}
        >
          <ICONSubtitleBroken className="icon-el-size icon-df-color icon" />
          <div>Subtitle</div>
        </div>
        <div
          className="section-container"
          onClick={() => addSection({ type: AddSectionTypes.PARAGRAPH })}
        >
          <ICONDocumentTextBroken className="icon-el-size icon-df-color icon" />
          <div>Paragraph</div>
        </div>
        <div
          className="section-container"
          onClick={() => addSection({ type: AddSectionTypes.HIGHLIGHT })}
        >
          <ICONTextBroken className="icon-el-size icon-df-color icon" />
          <div>Highlight</div>
        </div>
        <div
          className="section-container"
          onClick={() => addSection({ type: AddSectionTypes.LINK })}
        >
          <ICONLinkBroken className="icon-el-size icon-df-color icon" />
          <div>Link</div>
        </div>
        <div
          className="section-container"
          onClick={() => addSection({ type: AddSectionTypes.IMAGE })}
        >
          <ICONImageBroken className="icon-el-size icon-df-color icon" />
          <div>Image</div>
        </div>
        <div
          className="section-container"
          onClick={() => addSection({ type: AddSectionTypes.YOUTUBE_VIDEO })}
        >
          <ICONVideoBroken className="icon-el-size icon-df-color icon" />
          <div>YouTube</div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addSection: properties => dispatch(addToArticleSection(properties)),
})

export default connect(null, mapDispatchToProps)(ArticleBlocks)
