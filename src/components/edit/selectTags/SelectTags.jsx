import React from "react"
import { connect } from "react-redux"

import Select from "react-select"
import { updateArticle } from "../../../redux/editArticle/editArticleActions"
import { selectEditArticleTags } from "../../../redux/editArticle/editArticleSelectors"

const SelectTags = ({ tags, updateArticle }) => {
  return (
    <div>
      Tags
      <Select
        isMulti
        name="colors"
        options={tagsData}
        onChange={e => updateArticle({ tags: e })}
        value={tags}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  )
}

const tagsData = [
  { label: "Sport", value: "sport" },
  { label: "Počasí", value: "pocasi" },
  { label: "Zahraničí", value: "zahranici" },
  { label: "Česko", value: "cesko" },
  { label: "Koronavirus", value: "koronavirus" },
]

const mapStateToProps = state => ({
  tags: selectEditArticleTags(state),
})

const mapDispatchToProps = dispatch => ({
  updateArticle: properties => dispatch(updateArticle(properties)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectTags)
