import { createContentLoader } from 'vitepress'

export default createContentLoader('src/recipes/!(*index).md', {
  transform(rawData) {
    return rawData.sort((a, b) => {
      const t1 = a.frontmatter.title.toUpperCase()
      const t2 = b.frontmatter.title.toUpperCase()
      return t1 < t2 ? -1 : t1 > t2 ? 1 : 0
    })
  }
})
