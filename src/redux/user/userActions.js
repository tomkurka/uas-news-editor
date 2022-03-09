import UserActionTypes from "./userTypes"

export const emailSignUpStart = credentials => ({
  type: UserActionTypes.EMAIL_SIGN_UP_START,
  payload: credentials,
})

export const emailSignUpSuccess = user => ({
  type: UserActionTypes.EMAIL_SIGN_UP_SUCCESS,
  payload: user,
})

export const emailSignUpFailure = errorMessage => ({
  type: UserActionTypes.EMAIL_SIGN_UP_FAILURE,
  payload: errorMessage,
})

export const emailSignInStart = credentials => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: credentials,
})

export const emailSignInSuccess = user => ({
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user,
})

export const emailSignInFailure = errorMessage => ({
  type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: errorMessage,
})

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
})

export const signOutSuccess = user => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
  payload: user,
})

export const signOutFailure = errorMessage => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: errorMessage,
})

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
})

export const userInitializeCompleted = () => ({
  type: UserActionTypes.USER_INITIALIZE_COMPLETED,
})

export const updateUserProfileStart = data => ({
  type: UserActionTypes.UPDATE_USER_PROFILE_START,
  payload: data,
})
export const updateUserProfileSuccess = profile => ({
  type: UserActionTypes.UPDATE_USER_PROFILE_SUCCESS,
  payload: profile,
})
export const updateUserProfileFailure = errorMessage => ({
  type: UserActionTypes.UPDATE_USER_PROFILE_FAILURE,
  payload: errorMessage,
})
