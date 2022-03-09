import { createSelector } from "reselect"

const selectArticles = state => state.userArticles

export const selectUserArticles = createSelector([selectArticles], articles => articles.articles)

export const selectUserArticlesArray = createSelector([selectUserArticles], articles =>
  Object.values(articles)
)

export const selectUserArticlesArraySortedDate = createSelector(
  [selectUserArticlesArray],
  articles => articles.sort((a, b) => b.lastModifiedAt - a.lastModifiedAt)
)

export const selectUserArticle = id =>
  createSelector([selectUserArticles], articles => articles[id])
