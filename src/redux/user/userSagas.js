import { takeLatest, put, all, call, select } from "redux-saga/effects"

import UserActionTypes from "./userTypes"

import {
  auth,
  createUserProfileDocument,
  firestore,
  getCurrentUser,
} from "../../firebase/firebaseUtils"

import {
  emailSignInFailure,
  emailSignInSuccess,
  signOutFailure,
  signOutSuccess,
  emailSignUpFailure,
  emailSignUpSuccess,
  userInitializeCompleted,
  updateUserProfileSuccess,
  updateUserProfileFailure,
} from "./userActions"
import { selectCurrentUser } from "./userSelectors"

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const data = yield call(createUserProfileDocument, userAuth, additionalData)
    yield put(emailSignInSuccess({ ...data }))
  } catch (error) {
    yield put(emailSignInFailure(error))
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(emailSignInFailure(error.message))
  }
}

export function* signUpWithEmail({
  payload: {
    user: { email, password },
    additionalData: { firstName, lastName },
  },
}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)
    yield put(emailSignUpSuccess({ user, additionalData: { firstName, lastName } }))
  } catch (error) {
    yield put(emailSignUpFailure(error))
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData)
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser()
    if (userAuth) {
      yield getSnapshotFromUserAuth(userAuth)
    }
    yield put(userInitializeCompleted())
  } catch (error) {
    put(emailSignInFailure(error))
  }
}

export function* signOut() {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error))
  }
}

export function* updateUserProfileAsync({ payload }) {
  try {
    const currentUser = yield select(selectCurrentUser)
    const userRef = yield firestore.collection("users").doc(currentUser.id)
    yield userRef.update({ ...payload })

    const newCurrentUser = yield { ...currentUser, ...payload }
    yield put(updateUserProfileSuccess(newCurrentUser))
  } catch (error) {
    yield put(updateUserProfileFailure(error.message))
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onEmailSignUpStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_UP_START, signUpWithEmail)
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onUpdateUserProfile() {
  yield takeLatest(UserActionTypes.UPDATE_USER_PROFILE_START, updateUserProfileAsync)
}

export default function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onEmailSignUpStart),
    call(onSignUpSuccess),
    call(isUserAuthenticated),
    call(onSignOut),
    call(onUpdateUserProfile),
  ])
}
