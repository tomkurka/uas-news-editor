import React from "react"
import SectionTitle from "../sections/sectionTitle/SectionTitle"
import SectionMainSubtitle from "../sections/sectionMainSubtitle/SectionMainSubtitle"
import SectionMainImage from "../sections/sectionMainImage/SectionMainImage"
import { toggleSettingCard } from "../../../redux/editArticle/editArticleActions"
import { connect } from "react-redux"
import ArticleTags from "../articleTags/ArticleTags"

import "./settingCard.scss"

const SettingCard = ({ toggleSettingCard }) => {
  return (
    <div
      className="setting-card-background"
      onClick={e => {
        toggleSettingCard()
      }}
    >
      <div className="setting-card" onClick={e => e.stopPropagation()}>
        <div className="setting-card-container">
          <SectionTitle />
          <SectionMainSubtitle />
          <SectionMainImage />
          <ArticleTags />
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleSettingCard: () => dispatch(toggleSettingCard()),
})

export default connect(null, mapDispatchToProps)(SettingCard)
