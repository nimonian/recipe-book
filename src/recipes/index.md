<script setup>
import { data as recipes } from './recipes.data.js'
console.log(recipes)
</script>

# Recipes

<ul>
  <li v-for="recipe of recipes">
    <a :href="recipe.url">{{ recipe.frontmatter.title }}</a>
  </li>
</ul>
