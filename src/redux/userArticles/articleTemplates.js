export const articleTemplate = ({ id, author, authorId }) => {
  const date = new Date().getTime()
  return {
    id,
    author,
    authorId,
    createdAt: date,
    lastModifiedAt: date,
    previewImg: "",
    isPublished: false,
    tags: [],
    title: "",
    subtitle: "",
    sectionsOrder: [],
    sections: {},
  }
}
