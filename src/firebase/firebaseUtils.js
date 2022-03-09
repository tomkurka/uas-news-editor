import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
import "firebase/compat/storage"

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID,
}

// eslint-disable-next-line
firebase.initializeApp(firebaseConfig)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const editorRef = firestore.doc(`users/${userAuth.uid}`)
  const articlesRef = firestore.doc(`articles/${userAuth.uid}`)
  const snapShot = await editorRef.get()

  if (!snapShot.exists) {
    const { email } = userAuth
    const joinedAt = new Date().getTime()
    const { firstName, lastName } = additionalData
    const fullName = firstName + " " + lastName

    try {
      const editorDefaultProperties = {
        email,
        joinedAt,
        fullName,
        bio: "",
        id: userAuth.uid,
        countOfPublishedArticles: 0,
        publishedArticles: [],
        ...additionalData,
      }
      await editorRef.set(editorDefaultProperties)
      await articlesRef.set({})
      return editorDefaultProperties
    } catch (e) {
      console.log("Error creating user", e.message)
    }
  }
  const data = snapShot.data()
  return data
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
