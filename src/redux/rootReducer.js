import { combineReducers } from "redux"
import editArticleReducer from "./editArticle/editArticleReducer"
import localSettingReducer from "./localSetting/localSettingReducer"
import userReducer from "./user/userReducer"
import userArticlesReducer from "./userArticles/userArticlesReducer"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["localSetting"],
  blacklist: ["editArticle", "userArticles", "user"],
}

const rootReducer = combineReducers({
  user: userReducer,
  editArticle: editArticleReducer,
  userArticles: userArticlesReducer,
  localSetting: localSettingReducer,
})

export default persistReducer(persistConfig, rootReducer)
