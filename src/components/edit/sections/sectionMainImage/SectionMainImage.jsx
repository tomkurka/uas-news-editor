import React from "react"
import { connect } from "react-redux"
import { uploadMainImageStart } from "../../../../redux/editArticle/editArticleActions"
import { useDropzone } from "react-dropzone"
import { selectEditArticleImageUrl } from "../../../../redux/editArticle/editArticleSelectors"

import "./sectionMainImage.scss"

const SectionMainImage = ({ uploadImage, imageUrl }) => {
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
        uploadImage({ image })
      }
    }
  }

  return (
    <div className="image-main-container">
      <div className="text-section-label">Preview Image</div>
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

const mapStateToProps = state => ({
  imageUrl: selectEditArticleImageUrl(state),
})

const mapDispatchToProps = dispatch => ({
  uploadImage: properties => dispatch(uploadMainImageStart(properties)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SectionMainImage)
