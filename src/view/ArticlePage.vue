<template>
  <div>
    <Navbar />

    <div v-if="article" class="article-container">
      <h1 class="article-title">{{ article.title }}</h1>
      <img v-if="article.image" :src="article.image" class="article-image" alt="Article Image" />
      <p class="article-content">{{ article.content }}</p>
    </div>

    <div v-else class="loading">
      Loading article...
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name: 'ArticlePage',
  components: {
    Navbar,
    Footer
  },
  setup() {
    const route = useRoute()
    const article = ref<any>(null)
    const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL

    onMounted(async () => {
      const articleId = route.params.id as string
      try {
        const res = await fetch(`${API_BASE_URL}/articles/${articleId}`)
        const data = await res.json()
        data.image = `${API_BASE_URL}/article-image/${data.image_name}`
        article.value = data
      } catch (err) {
        console.error('Failed to load article:', err)
      }
    })

    return { article }
  }
})
</script>

<style scoped>
.article-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
  background-color: #fff7ef;
  border: 2px solid #1a1a1a;
  border-radius: 16px;
  padding: 24px;
}

.article-title {
  font-size: 2rem;
  color: #4B2E1E;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
}

.article-image {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 12px;
  object-fit: cover;
}

.article-content {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #3a2c1f;
  white-space: pre-line;
}

.loading {
  text-align: center;
  margin-top: 60px;
  font-size: 1.2rem;
  color: #4B2E1E;
}
</style>
