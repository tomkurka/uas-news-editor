import { deleteReference } from "../../functions/redux/reduxFunctions"

export const updateArticle = (previousArticles, articleToAdd) => {
  const newArticles = deleteReference({ ...previousArticles })
  newArticles[articleToAdd.id] = articleToAdd
  return newArticles
}
