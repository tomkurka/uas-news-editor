import { AddSectionTypes } from "./editArticleUtils"

export const articleTemplate = ({ id, author, authorId }) => {
  const date = new Date().getTime()
  return {
    id,
    author,
    authorId,
    settingCardVisible: false,
    createdAt: date,
    lastModifiedAt: date,
    tags: [],
    title: "",
    subtitle: "",
    sectionOrder: [],
    section: {},
    imageUrl: "",
  }
}

export const subtitleTemplate = ({ id }) => {
  return {
    id,
    type: AddSectionTypes.SUBTITLE,
    subtitle: "",
  }
}
export const paragraphTemplate = ({ id }) => {
  return {
    id,
    type: AddSectionTypes.PARAGRAPH,
    paragraph: "",
  }
}
export const highlightTemplate = ({ id }) => {
  return {
    id,
    type: AddSectionTypes.HIGHLIGHT,
    highlight: "",
  }
}
export const imageTemplate = ({ id }) => {
  return {
    id,
    type: AddSectionTypes.IMAGE,
    imageUrl: "",
  }
}
export const youtubeVideoTemplate = ({ id }) => {
  return {
    id,
    type: AddSectionTypes.YOUTUBE_VIDEO,
    linkId: "",
  }
}
export const linkTemplate = ({ id }) => {
  return {
    id,
    type: AddSectionTypes.LINK,
    link: "",
    name: "",
  }
}
