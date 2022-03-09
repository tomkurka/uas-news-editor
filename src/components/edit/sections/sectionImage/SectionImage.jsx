import React from "react"
import { connect } from "react-redux"
import { useDropzone } from "react-dropzone"

import {
  deleteArticleSection,
  updateArticleSections,
  uploadImageStart,
} from "../../../../redux/editArticle/editArticleActions"
import SectionLabel from "../selectionLabel/SectionLabel"

const SectionImage = ({ uploadImage, image: { id, imageUrl } }) => {
  const { getRootProps } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => updateImage(acceptedFiles[0]),
  })

  const updateImage = img => {
    if (!img) return
    handleUpload(img)
  }

  const handleUpload = image => {
    if (image) {
      const kbSize = Math.round(image.size / 1024)
      if (kbSize > 500) {
        alert("Maximum image size is 500kb. Your size is " + kbSize + " kb.")
      } else {
        uploadImage({ image, id })
      }
    }
  }

  return (
    <div className="image-main-container">
      <SectionLabel id={id}>Preview Image</SectionLabel>
      <div {...getRootProps()} className="img-placeholder">
        <input
          type="file"
          onChange={e => updateImage(e.target.files[0])}
          className="custom-file-input"
        />
        {!imageUrl ? (
          <div>
            <div className="label">Upload Image</div>
          </div>
        ) : (
          <img src={imageUrl} alt="preview" className="preview-img"></img>
        )}
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  updateSection: properties => dispatch(updateArticleSections(properties)),
  uploadImage: properties => dispatch(uploadImageStart(properties)),
  deleteSection: id => dispatch(deleteArticleSection(id)),
})

export default connect(null, mapDispatchToProps)(SectionImage)
