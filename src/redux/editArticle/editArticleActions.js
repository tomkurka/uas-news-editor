import EditArticleActionTypes from "./editArticleTypes"

export const copyArticle = data => ({
  type: EditArticleActionTypes.COPY_ARTICLE,
  payload: data,
})

export const updateArticle = data => ({
  type: EditArticleActionTypes.UPDATE_ARTICLE,
  payload: data,
})

export const updateArticleSections = data => ({
  type: EditArticleActionTypes.UPDATE_ARTICLE_SECTIONS,
  payload: data,
})

export const addToArticleSection = data => ({
  type: EditArticleActionTypes.ADD_TO_ARTICLE_SECTION,
  payload: data,
})
export const deleteArticleSection = data => ({
  type: EditArticleActionTypes.DELETE_ARTICLE_SECTION,
  payload: data,
})

export const addSubtitle = () => ({
  type: EditArticleActionTypes.ADD_SUBTITLE,
})

export const addParagraph = () => ({
  type: EditArticleActionTypes.ADD_PARAGRAPH,
})

export const addHighlight = () => ({
  type: EditArticleActionTypes.ADD_HIGHLIGHT,
})

export const uploadImageStart = data => ({
  type: EditArticleActionTypes.UPLOAD_IMAGE_START,
  payload: data,
})

export const uploadImageSuccess = data => ({
  type: EditArticleActionTypes.UPLOAD_IMAGE_SUCCESS,
  payload: data,
})

export const uploadImageFailure = errorMessage => ({
  type: EditArticleActionTypes.UPLOAD_IMAGE_FAILURE,
  payload: errorMessage,
})

export const uploadMainImageStart = data => ({
  type: EditArticleActionTypes.UPLOAD_MAIN_IMAGE_START,
  payload: data,
})

export const uploadMainImageSuccess = data => ({
  type: EditArticleActionTypes.UPLOAD_MAIN_IMAGE_SUCCESS,
  payload: data,
})

export const uploadMainImageFailure = errorMessage => ({
  type: EditArticleActionTypes.UPLOAD_MAIN_IMAGE_FAILURE,
  payload: errorMessage,
})

export const toggleSettingCard = () => ({
  type: EditArticleActionTypes.TOGGLE_SETTING_CARD,
})

export const addTag = tag => ({
  type: EditArticleActionTypes.ADD_TAG,
  payload: tag,
})

export const deleteTag = id => ({
  type: EditArticleActionTypes.DELETE_TAG,
  payload: id,
})
