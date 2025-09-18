<template>
  <div class="page-wrapper">
    <Navbar />

    <main class="issue-wrapper">
      <div v-if="mainArticle" class="main-article">
        <h1 class="main-title">
          <a v-if="mainArticle.title_link"
             :href="mainArticle.title_link"
             target="_blank"
             rel="noopener noreferrer">
            {{ mainArticle.title }}
          </a>
          <span v-else>{{ mainArticle.title }}</span>
        </h1>
        <p class="main-summary">{{ mainArticle.summary }}</p>
      </div>

      <div v-for="article in otherArticles" :key="article.id" class="article-box">
        <h2 class="article-title">
          <a v-if="article.title_link"
             :href="article.title_link"
             target="_blank"
             rel="noopener noreferrer">
            {{ article.title }}
          </a>
          <span v-else>{{ article.title }}</span>
        </h2>

        <p class="article-date">{{ formatDate(article.created_at) }}</p>

        <img v-if="article.image"
             :src="article.image"
             alt="Article Image"
             class="article-image" />

        <p v-if="article.image_source_name && article.image_source_link" class="image-source">
          (source:
          <a :href="article.image_source_link" target="_blank" rel="noopener noreferrer">
            {{ article.image_source_name }}
          </a>)
        </p>

        <div class="article-content" v-html="article.content" />
      </div>

      <div v-if="!mainArticle" class="loading">Loading issue...</div>
    </main>

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
  components: { Navbar, Footer },
  setup() {
    const route = useRoute()
    const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL
    const mainArticle = ref<any>(null)
    const otherArticles = ref<any[]>([])

    const formatDate = (dateStr: string): string => {
      const date = new Date(dateStr)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    onMounted(async () => {
      const clickedId = route.params.id
      if (!clickedId) return

      try {
        const res = await fetch(`${API_BASE_URL}/issues/${clickedId}`)
        const data = await res.json()

        const updated = data.articles.map((article: any) => ({
          ...article,
          image: `${API_BASE_URL}/article-image/${article.image_name}`
        }))

        mainArticle.value = updated.find(a => a.id === clickedId)
        otherArticles.value = updated
      } catch (err) {
        console.error('Failed to fetch issue articles:', err)
      }
    })

    return { mainArticle, otherArticles, formatDate }
  }
})
</script>

<style scoped>
.page-wrapper {
  background-color: #f7c3a1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.issue-wrapper {
  flex: 1;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-article {
  text-align: center;
  margin-bottom: 40px;
  max-width: 800px;
}
.main-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  color: #1a1a1a;
  margin-bottom: 10px;
}
.main-summary {
  font-size: 1.3rem;
  color: #333;
  line-height: 1.6;
  white-space: pre-wrap;
}
.article-box {
  background-color: #f7c3a1;
  border: 2px solid #000;
  border-radius: 16px;
  padding: 20px 30px;
  max-width: 800px;
  width: 100%;
  margin-bottom: 30px;
}
.article-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  color: #1a1a1a;
  margin-bottom: 10px;
}
.article-date {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 16px;
}
.article-image {
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  object-position: center;
}
.image-source {
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 20px;
}
.image-source a {
  color: #0077cc;
  text-decoration: underline;
  font-style: italic;
}
.article-content {
  font-size: 1.1rem;
  color: #1a1a1a;
  line-height: 1.8;
  white-space: pre-wrap;
}
.loading {
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  margin-top: 60px;
}
</style>
