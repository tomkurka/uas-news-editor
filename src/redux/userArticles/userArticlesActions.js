import UserArticlesActionTypes from "./userArticlesTypes"

export const fetchUserArticlesStart = () => ({
  type: UserArticlesActionTypes.FETCH_ARTICLES_START,
})
export const fetchUserArticlesSuccess = data => ({
  type: UserArticlesActionTypes.FETCH_ARTICLES_SUCCESS,
  payload: data,
})
export const fetchUserArticlesFailure = errorMessage => ({
  type: UserArticlesActionTypes.FETCH_ARTICLES_FAILURE,
  payload: errorMessage,
})

export const saveUserArticleStart = data => ({
  type: UserArticlesActionTypes.SAVE_ARTICLE_START,
  payload: data,
})
export const saveUserArticleSuccess = data => ({
  type: UserArticlesActionTypes.SAVE_ARTICLE_SUCCESS,
  payload: data,
})
export const saveUserArticleFailure = errorMessage => ({
  type: UserArticlesActionTypes.SAVE_ARTICLE_FAILURE,
  payload: errorMessage,
})

export const togglePublishArticleStart = data => ({
  type: UserArticlesActionTypes.TOGGLE_PUBLISH_ARTICLE_START,
  payload: data,
})
export const togglePublishArticleSuccess = data => ({
  type: UserArticlesActionTypes.TOGGLE_PUBLISH_ARTICLE_SUCCESS,
  payload: data,
})
export const togglePublishArticleFailure = errorMessage => ({
  type: UserArticlesActionTypes.TOGGLE_PUBLISH_ARTICLE_FAILURE,
  payload: errorMessage,
})

export const createUserArticleStart = data => ({
  type: UserArticlesActionTypes.CREATE_ARTICLE_START,
  payload: data,
})
export const createUserArticleSuccess = data => ({
  type: UserArticlesActionTypes.CREATE_ARTICLE_SUCCESS,
  payload: data,
})
export const createUserArticleFailure = errorMessage => ({
  type: UserArticlesActionTypes.CREATE_ARTICLE_FAILURE,
  payload: errorMessage,
})

export const deleteUserArticleStart = data => ({
  type: UserArticlesActionTypes.DELETE_ARTICLE_START,
  payload: data,
})
export const deleteUserArticleSuccess = data => ({
  type: UserArticlesActionTypes.DELETE_ARTICLE_SUCCESS,
  payload: data,
})
export const deleteUserArticleFailure = errorMessage => ({
  type: UserArticlesActionTypes.DELETE_ARTICLE_FAILURE,
  payload: errorMessage,
})
