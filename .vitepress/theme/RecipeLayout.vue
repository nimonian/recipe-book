<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-before>
      <span class="vp-doc">
        <h1>{{ $frontmatter.title }}</h1>
      </span>
    </template>
  </Layout>
</template>
