import { takeLatest, put, all, call, select } from "redux-saga/effects"
import {
  createUserArticleFailure,
  createUserArticleSuccess,
  deleteUserArticleFailure,
  deleteUserArticleSuccess,
  fetchUserArticlesFailure,
  fetchUserArticlesSuccess,
  togglePublishArticleFailure,
  togglePublishArticleSuccess,
  saveUserArticleFailure,
  saveUserArticleStart as saveUserArticleStart2,
  saveUserArticleSuccess,
} from "./userArticlesActions"
import uuid from "react-uuid"

import { firestore } from "../../firebase/firebaseUtils"
import { selectCurrentUser } from "../user/userSelectors"

import UserArticlesActionTypes from "./userArticlesTypes"
import { articleTemplate } from "./articleTemplates"
import { selectUserArticle, selectUserArticles } from "./userArticlesSelectors"
import { deleteReference } from "../../functions/redux/reduxFunctions"
import { selectEditArticle } from "../editArticle/editArticleSelectors"

export function* fetchUserArticlesAsync() {
  try {
    const currentUser = yield select(selectCurrentUser)
    const articlesRef = yield firestore
      .collection(`articles`)
      .doc(currentUser.id)
      .collection("articles")
    const snapshot = yield articlesRef.get()
    const articles = {}

    snapshot.forEach(doc => {
      articles[doc.id] = doc.data()
    })

    yield put(fetchUserArticlesSuccess(articles))
  } catch (error) {
    yield put(fetchUserArticlesFailure(error.message))
  }
}

export function* saveUserArticleAsync({ payload }) {
  try {
    let editArticle = payload?.article
    if (!editArticle) editArticle = yield select(selectEditArticle)
    const currentUser = yield select(selectCurrentUser)

    editArticle.lastModifiedAt = new Date().getTime()
    const articleRef = yield firestore
      .collection(`articles`)
      .doc(currentUser.id)
      .collection("articles")
      .doc(editArticle.id)
    yield articleRef.set(editArticle)

    if (editArticle.isPublished) {
      yield firestore.collection("publicArticles").doc(editArticle.id).set(editArticle)
    }

    let userArticles = yield select(selectUserArticles)
    userArticles = deleteReference(userArticles)

    yield (userArticles[editArticle.id] = editArticle)

    yield put(saveUserArticleSuccess(userArticles))
  } catch (error) {
    yield put(saveUserArticleFailure(error.message))
  }
}

export function* togglePublishUserArticleAsync({ payload: { id } }) {
  try {
    const article = yield select(selectUserArticle(id))
    if (!article?.title || !article?.subtitle || !article?.imageUrl || article?.tags.length < 1) {
      yield put(togglePublishArticleFailure("Missing parameters"))
      if (!article?.title) throw alert("Article must have a title!")
      if (!article?.subtitle) return alert("Article must have a subtitle!")
      if (!article?.imageUrl) return alert("Article must have the main image!")
      if (article?.tags.length < 1) return alert("Please add at least one tag to the article!")
    }

    const articleRef = yield firestore.collection(`publicArticles`).doc(id)

    if (article.isPublished === true) {
      article.isPublished = false
      yield articleRef.delete()
    } else {
      article.isPublished = true
    }
    yield put(saveUserArticleStart2({ article }))

    yield put(togglePublishArticleSuccess())
  } catch (error) {
    yield put(togglePublishArticleFailure(error))
  }
}

export function* createUserArticleAsync({ payload: { history } }) {
  try {
    const currentUser = yield select(selectCurrentUser)
    const id = uuid()
    const newArticle = yield articleTemplate({
      id,
      authorId: currentUser.id,
      author: currentUser.fullName,
    })
    const collectionRef = yield firestore
      .collection(`articles`)
      .doc(currentUser.id)
      .collection("articles")
      .doc(id)
    yield collectionRef.set(newArticle)
    yield put(createUserArticleSuccess(newArticle))
    yield history.push(`/article/${id}`)
  } catch (error) {
    yield put(createUserArticleFailure(error.message))
  }
}

export function* deleteUserArticleAsync({ payload: { id } }) {
  try {
    const currentUser = yield select(selectCurrentUser)
    const articleRef = yield firestore
      .collection("articles")
      .doc(currentUser.id)
      .collection("articles")
      .doc(id)
    yield articleRef.delete()

    const publishArticleRef = yield firestore.collection("publicArticles").doc(currentUser.id)
    yield publishArticleRef.delete()
    const articles = yield select(selectUserArticles)
    yield delete articles[id]
    yield put(deleteUserArticleSuccess(deleteReference(articles)))
  } catch (error) {
    yield put(deleteUserArticleFailure(error.message))
  }
}

export function* fetchUserArticlesStart() {
  yield takeLatest(UserArticlesActionTypes.FETCH_ARTICLES_START, fetchUserArticlesAsync)
}
export function* saveUserArticleStart() {
  yield takeLatest(UserArticlesActionTypes.SAVE_ARTICLE_START, saveUserArticleAsync)
}
export function* togglePublishUserArticleStart() {
  yield takeLatest(
    UserArticlesActionTypes.TOGGLE_PUBLISH_ARTICLE_START,
    togglePublishUserArticleAsync
  )
}
export function* createUserArticleStart() {
  yield takeLatest(UserArticlesActionTypes.CREATE_ARTICLE_START, createUserArticleAsync)
}
export function* deleteUserArticleStart() {
  yield takeLatest(UserArticlesActionTypes.DELETE_ARTICLE_START, deleteUserArticleAsync)
}

export default function* userArticlesSagas() {
  yield all([
    call(fetchUserArticlesStart),
    call(saveUserArticleStart),
    call(togglePublishUserArticleStart),
    call(createUserArticleStart),
    call(deleteUserArticleStart),
  ])
}
