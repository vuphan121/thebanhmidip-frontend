<template>
  <div class="article-card" @click="$emit('click', article)">
    <img v-if="article.image" :src="article.image" alt="Article Image" />
    <h3>
      <a
          v-if="showLink && article.title_link"
          :href="article.title_link"
          target="_blank"
          rel="noopener noreferrer"
      >
        {{ article.title }}
      </a>
      <span v-else>{{ article.title }}</span>
    </h3>
    <p>{{ article.summary }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ArticleCard',
  props: {
    article: { type: Object, required: true },
    showLink: { type: Boolean, default: false }
  }
}
</script>
<style scoped>
.article-card {
  background-color: #fff7ef;
  border: 2px solid #1a1a1a;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(94, 65, 47, 0.2);
}

.article-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-bottom: 1px solid #f0e6d2;
}

.article-card h3 {
  margin: 12px;
  color: #4b2e1e;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.4;
}

.article-card p {
  margin: 0 12px 16px;
  color: #5a4531;
  font-size: 0.95rem;
  line-height: 1.4;
  flex-grow: 1;
}
</style>
