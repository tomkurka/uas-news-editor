import UserArticlesActionTypes from "./userArticlesTypes"
import { updateArticle } from "./userArticlesUtils"

const initialState = {
  articles: {},
  isLoading: false,
  errorMessage: "",
}

const userArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserArticlesActionTypes.FETCH_ARTICLES_START:
      return { ...state, isLoading: true, errorMessage: "" }
    case UserArticlesActionTypes.FETCH_ARTICLES_SUCCESS:
      return { ...state, isLoading: false, articles: action.payload, errorMessage: "" }
    case UserArticlesActionTypes.FETCH_ARTICLES_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }

    case UserArticlesActionTypes.SAVE_ARTICLE_START:
      return { ...state, isLoading: true, errorMessage: "" }
    case UserArticlesActionTypes.SAVE_ARTICLE_SUCCESS:
      return { ...state, isLoading: false, articles: action.payload, errorMessage: "" }
    case UserArticlesActionTypes.SAVE_ARTICLE_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }

    case UserArticlesActionTypes.TOGGLE_PUBLISH_ARTICLE_START:
      return { ...state, isLoading: true, errorMessage: "" }
    case UserArticlesActionTypes.TOGGLE_PUBLISH_ARTICLE_SUCCESS:
      return { ...state, isLoading: false, errorMessage: "" }
    case UserArticlesActionTypes.TOGGLE_PUBLISH_ARTICLE_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }

    case UserArticlesActionTypes.CREATE_ARTICLE_START:
      return { ...state, isLoading: true, errorMessage: "" }
    case UserArticlesActionTypes.CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: "",
        articles: updateArticle(state.articles, action.payload),
      }
    case UserArticlesActionTypes.CREATE_ARTICLE_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }

    case UserArticlesActionTypes.DELETE_ARTICLE_START:
      return { ...state, isLoading: true, errorMessage: "" }
    case UserArticlesActionTypes.DELETE_ARTICLE_SUCCESS:
      return { ...state, isLoading: false, articles: action.payload, errorMessage: "" }
    case UserArticlesActionTypes.DELETE_ARTICLE_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }
    default:
      return state
  }
}

export default userArticlesReducer
