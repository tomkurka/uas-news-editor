import EditArticleActionTypes from "./editArticleTypes"
import {
  updateArticle,
  updateSections,
  addSection,
  deleteSection,
  toggleSettingCard,
  addTag,
  deleteTag,
} from "./editArticleUtils"

const initialState = { article: {}, isLoading: false, errorMessage: undefined }

export const editArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case EditArticleActionTypes.COPY_ARTICLE:
      return { ...state, article: action.payload }
    case EditArticleActionTypes.UPDATE_ARTICLE:
      return { ...state, article: updateArticle(state.article, action.payload) }
    case EditArticleActionTypes.UPDATE_ARTICLE_SECTIONS:
      return { ...state, article: updateSections(state.article, action.payload) }
    case EditArticleActionTypes.ADD_TO_ARTICLE_SECTION:
      return { ...state, article: addSection(state.article, action.payload) }
    case EditArticleActionTypes.DELETE_ARTICLE_SECTION:
      return { ...state, article: deleteSection(state.article, action.payload) }
    case EditArticleActionTypes.TOGGLE_SETTING_CARD:
      return { ...state, article: toggleSettingCard(state.article) }
    case EditArticleActionTypes.ADD_TAG:
      return { ...state, article: addTag(state.article, action.payload) }
    case EditArticleActionTypes.DELETE_TAG:
      return { ...state, article: deleteTag(state.article, action.payload) }
    case EditArticleActionTypes.ADD_PARAGRAPH:
      return { ...state }
    case EditArticleActionTypes.ADD_SUBTITLE:
      return { ...state }
    case EditArticleActionTypes.ADD_HIGHLIGHT:
      return { ...state }
    case EditArticleActionTypes.ADD_IMAGE:
      return { ...state }
    case EditArticleActionTypes.UPLOAD_IMAGE_START:
    case EditArticleActionTypes.UPLOAD_MAIN_IMAGE_START:
      return { ...state, isLoading: true, errorMessage: undefined }
    case EditArticleActionTypes.UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        article: updateSections(state.article, action.payload),
        isLoading: false,
        errorMessage: undefined,
      }
    case EditArticleActionTypes.UPLOAD_MAIN_IMAGE_SUCCESS:
      return { ...state, article: updateArticle(state.article, action.payload) }
    case EditArticleActionTypes.UPLOAD_IMAGE_FAILURE:
    case EditArticleActionTypes.UPLOAD_MAIN_IMAGE_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }
    default:
      return state
  }
}

export default editArticleReducer
