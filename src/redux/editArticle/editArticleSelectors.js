import { createSelector } from "reselect"

const selectEdit = state => state.editArticle

export const selectEditArticle = createSelector([selectEdit], edit => edit.article)

export const selectEditArticleTags = createSelector([selectEditArticle], article => article.tags)

export const selectEditArticleTitle = createSelector([selectEditArticle], article => article.title)

export const selectEditArticleMainSubtitle = createSelector(
  [selectEditArticle],
  article => article.subtitle
)
export const selectEditArticleAuthor = createSelector(
  [selectEditArticle],
  article => article.author
)
export const selectCardSettingVisible = createSelector(
  [selectEditArticle],
  article => article.settingCardVisible
)
export const selectEditArticleId = createSelector([selectEditArticle], article => article.id)
export const selectEditArticleIsPublished = createSelector(
  [selectEditArticle],
  article => article.isPublished
)
export const selectEditArticleCreatedAt = createSelector(
  [selectEditArticle],
  article => article.createdAt
)
export const selectEditArticleLastModifiedAt = createSelector(
  [selectEditArticle],
  article => article.lastModifiedAt
)
export const selectEditArticleImageUrl = createSelector(
  [selectEditArticle],
  article => article.imageUrl
)
export const selectEditArticleSection = createSelector(
  [selectEditArticle],
  article => article.sections
)

export const selectEditArticleSectionOrder = createSelector(
  [selectEditArticle],
  article => article.sectionsOrder
)

export const selectEditArticleSectionsArray = createSelector(
  [selectEditArticleSection, selectEditArticleSectionOrder],
  (sections, order = []) => order.map(value => sections[value])
)
