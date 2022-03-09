import { deleteReference } from "../../functions/redux/reduxFunctions"
import uuid from "react-uuid"
import {
  imageTemplate,
  paragraphTemplate,
  highlightTemplate,
  subtitleTemplate,
  youtubeVideoTemplate,
  linkTemplate,
} from "./templates"

export const updateArticle = (previousArticle, properties) => {
  const newArticle = { ...previousArticle, ...properties }
  return deleteReference(newArticle)
}

export const updateSections = (previousArticle, { id, properties }) => {
  const newArticle = deleteReference(previousArticle)
  newArticle.sections[id] = { ...newArticle.sections[id], ...properties }
  return newArticle
}

export const AddSectionTypes = {
  SUBTITLE: "SUBTITLE",
  PARAGRAPH: "PARAGRAPH",
  HIGHLIGHT: "HIGHLIGHT",
  IMAGE: "IMAGE",
  YOUTUBE_VIDEO: "YOUTUBE_VIDEO",
  LINK: "LINK",
}

export const addSection = (previousArticle, { type }) => {
  const newArticle = deleteReference(previousArticle)
  const id = uuid()

  switch (type) {
    case AddSectionTypes.SUBTITLE:
      newArticle.sections[id] = subtitleTemplate({ id })
      break
    case AddSectionTypes.PARAGRAPH:
      newArticle.sections[id] = paragraphTemplate({ id })
      break
    case AddSectionTypes.HIGHLIGHT:
      newArticle.sections[id] = highlightTemplate({ id })
      break
    case AddSectionTypes.IMAGE:
      newArticle.sections[id] = imageTemplate({ id })
      break
    case AddSectionTypes.YOUTUBE_VIDEO:
      newArticle.sections[id] = youtubeVideoTemplate({ id })
      break
    case AddSectionTypes.LINK:
      newArticle.sections[id] = linkTemplate({ id })
      break
    default:
      console.log("Type was not found!")
  }
  newArticle.sectionsOrder.push(id)
  return newArticle
}

export const deleteSection = (previousArticle, id) => {
  const newArticle = deleteReference(previousArticle)
  const index = newArticle.sectionsOrder.indexOf(id)
  delete newArticle.sections[id]
  newArticle.sectionsOrder.splice(index, 1)
  return newArticle
}

export const toggleSettingCard = previousArticle => {
  const newArticle = deleteReference(previousArticle)
  newArticle.settingCardVisible = !newArticle?.settingCardVisible
  return newArticle
}

export const addTag = (previousArticle, tag) => {
  const newArticle = deleteReference(previousArticle)
  newArticle.tags.push(tag)
  return newArticle
}

export const deleteTag = (previousArticle, id) => {
  const newArticle = deleteReference(previousArticle)
  newArticle.tags = newArticle.tags.filter(tag => tag.id !== id)
  return newArticle
}
