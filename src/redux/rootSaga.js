import { all, call } from "redux-saga/effects"

import userSagas from "./user/userSagas"
import userArticlesSagas from "./userArticles/userArticlesSagas"
import editArticleSagas from "./editArticle/editArticleSagas"

export default function* rootSaga() {
  yield all([call(userSagas), call(userArticlesSagas), call(editArticleSagas)])
}
