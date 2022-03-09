import UserActionTypes from "./userTypes"

const initialState = {
  errorMessage: "",
  currentUser: "",
  isLoading: false,
  isUserInitializeCompleted: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.EMAIL_SIGN_IN_START:
      return { ...state, isLoading: true, errorMessage: "" }
    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
        errorMessage: "",
      }
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        isUserInitializeCompleted: false,
        isLoading: false,
        errorMessage: action.payload,
      }
    case UserActionTypes.EMAIL_SIGN_UP_START:
      return { ...state, isLoading: true, errorMessage: "" }
    case UserActionTypes.EMAIL_SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
        errorMessage: "",
      }
    case UserActionTypes.EMAIL_SIGN_UP_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }
    case UserActionTypes.SIGN_OUT_START:
      return { ...state, isLoading: true, errorMessage: "" }
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
        errorMessage: "",
      }
    case UserActionTypes.SIGN_OUT_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }
    case UserActionTypes.USER_INITIALIZE_COMPLETED: {
      return { ...state, isUserInitializeCompleted: true }
    }
    case UserActionTypes.UPDATE_USER_PROFILE_START:
      return { ...state, isLoading: true, errorMessage: "" }
    case UserActionTypes.UPDATE_USER_PROFILE_SUCCESS:
      return { ...state, isLoading: false, errorMessage: "", currentUser: action.payload }
    case UserActionTypes.UPDATE_USER_PROFILE_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }
    default:
      return state
  }
}

export default userReducer
