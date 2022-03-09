import React from "react"

import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"
import { connect } from "react-redux"
import TextareaAutosize from "react-textarea-autosize"
import { updateArticleSections } from "../../../../redux/editArticle/editArticleActions"
import SectionLabel from "../selectionLabel/SectionLabel"

const SectionYoutubeVideo = ({ youtubeVideo, updateSection }) => {
  return (
    <div>
      <SectionLabel id={youtubeVideo.id}>YouTube Video</SectionLabel>
      <TextareaAutosize
        className="textarea-edit subtitle"
        placeholder="Enter video ID"
        value={youtubeVideo?.linkId}
        onChange={e =>
          updateSection({ id: youtubeVideo.id, properties: { linkId: e.target.value } })
        }
      />
      <TextareaAutosize
        className="textarea-edit subtitle"
        placeholder="Label"
        value={youtubeVideo?.label}
        onChange={e =>
          updateSection({ id: youtubeVideo.id, properties: { label: e.target.value } })
        }
      />
      <LiteYouTubeEmbed
        id={youtubeVideo.linkId}
        title={youtubeVideo.label}
        className="youtube-video"
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  updateSection: properties => dispatch(updateArticleSections(properties)),
})

export default connect(null, mapDispatchToProps)(SectionYoutubeVideo)
