import { put, all, call, takeLatest } from "redux-saga/effects"
import { storage } from "../../firebase/firebaseUtils"
import uuid from "react-uuid"

import {
  uploadImageFailure,
  uploadImageSuccess,
  uploadMainImageFailure,
  uploadMainImageSuccess,
} from "./editArticleActions"
import EditArticleActionTypes from "./editArticleTypes"

export function* uploadImageAsync({ payload: { image, id } }) {
  try {
    const imageRef = yield storage.ref(`images/${id}`)
    yield imageRef.put(image)
    const imageUrl = yield storage.ref("images").child(id).getDownloadURL()
    yield put(uploadImageSuccess({ id, properties: { imageUrl } }))
  } catch (error) {
    yield put(uploadImageFailure(error.message))
  }
}

export function* uploadMainImageAsync({ payload: { image } }) {
  try {
    const id = uuid()
    const imageRef = yield storage.ref(`imagesMain/${id}`)
    yield imageRef.put(image)
    const imageUrl = yield storage.ref("imagesMain").child(id).getDownloadURL()
    yield put(uploadMainImageSuccess({ imageUrl }))
  } catch (error) {
    yield put(uploadMainImageFailure(error.message))
  }
}

export function* uploadImageStart() {
  yield takeLatest(EditArticleActionTypes.UPLOAD_IMAGE_START, uploadImageAsync)
}
export function* uploadMainImageStart() {
  yield takeLatest(EditArticleActionTypes.UPLOAD_MAIN_IMAGE_START, uploadMainImageAsync)
}

export default function* editArticleSagas() {
  yield all([call(uploadImageStart), call(uploadMainImageStart)])
}
