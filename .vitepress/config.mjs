import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Complex Omelette',
  description: 'A recipe site',
  srcDir: 'src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Recipes', link: '/recipes/' }
    ],

    sidebar: [
      {
        text: 'Lunch',
        collapsed: true,
        items: [
          { text: 'Chicken hummus bowl', link: '/recipes/mbwO3mob' },
          { text: 'Classic swedish meatballs', link: '/recipes/v6LOetpF' }
        ]
      },
      {
        text: 'Dinner',
        collapsed: true,
        items: [{ text: 'Seafood tagine', link: '/recipes/seafood-tagine' }]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
