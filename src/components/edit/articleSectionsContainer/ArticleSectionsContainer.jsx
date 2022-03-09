import React from "react"
import { connect } from "react-redux"
import { updateArticle } from "../../../redux/editArticle/editArticleActions"
import { selectEditArticleSectionsArray } from "../../../redux/editArticle/editArticleSelectors"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

import SectionParagraph from "../sections/sectionParagraph/SectionParagraph"
import SectionSubtitle from "../sections/sectionSubtitle/SectionSubtitle"
import SectionHighlight from "../sections/sectionHighlight/SectionHighlight"
import SectionImage from "../sections/sectionImage/SectionImage"
import SectionYoutubeVideo from "../sections/sectionYoutubeVideo/SectionYoutubeVideo"
import LinkSection from "../sections/sectionLink/SectionLink"
import { AddSectionTypes } from "../../../redux/editArticle/editArticleUtils"

import "./articleSectionsContainer.scss"

const ArticleSectionsContainer = ({ updateArticle, sectionsArray }) => {
  const handleOnDragEnd = result => {
    if (!result.destination) return
    const items = [...sectionsArray]
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    const newSectionsOrder = items.map(item => item.id)
    updateArticle({ sectionsOrder: newSectionsOrder })
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="section-container">
          {provided => (
            <div className="section-container" {...provided.droppableProps} ref={provided.innerRef}>
              {sectionsArray.map((section, i) => (
                <Draggable key={section.id} draggableId={section.id} index={i}>
                  {provided => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      key={i}
                    >
                      {selectSection(section)}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

const selectSection = section => {
  switch (section.type) {
    case AddSectionTypes.SUBTITLE:
      return <SectionSubtitle subtitle={section} />
    case AddSectionTypes.PARAGRAPH:
      return <SectionParagraph paragraph={section} />
    case AddSectionTypes.HIGHLIGHT:
      return <SectionHighlight highlight={section} />
    case AddSectionTypes.IMAGE:
      return <SectionImage image={section} />
    case AddSectionTypes.YOUTUBE_VIDEO:
      return <SectionYoutubeVideo youtubeVideo={section} />
    case AddSectionTypes.LINK:
      return <LinkSection link={section} />
    default:
      return section
  }
}

const mapStateToProps = state => ({
  sectionsArray: selectEditArticleSectionsArray(state),
})

const mapDispatchToProps = dispatch => ({
  updateArticle: properties => dispatch(updateArticle(properties)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleSectionsContainer)
