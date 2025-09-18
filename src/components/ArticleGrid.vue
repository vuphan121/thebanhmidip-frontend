<template>
  <div class="app">
    <div class="article-grid">
      <ArticleCard
          v-for="article in articles"
          :key="article.id"
          :article="article"
          @click="$emit('clickArticle', article)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import ArticleCard from './ArticleCard.vue'

export default {
  name: 'ArticleGrid',
  components: { ArticleCard },
  props: {
    articles: { type: Array, required: true }
  }
}
</script>

<style scoped>
.app {
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
}
.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}
</style>
