<template>
  <div class="page-wrapper">
    <Navbar />

    <main class="article-wrapper">
      <div v-if="article" class="article-box">
        <!-- Clickable title -->
        <h1 class="article-title">
          <a
              v-if="article.title_link"
              :href="article.title_link"
              target="_blank"
              rel="noopener noreferrer"
              class="article-title-link"
          >
            {{ article.title }}
          </a>
          <span v-else>{{ article.title }}</span>
        </h1>

        <!-- Date below title -->
        <p class="article-date">{{ formatDate(article.created_at) }}</p>

        <!-- Article image -->
        <img
            v-if="article.image"
            :src="article.image"
            alt="Article Image"
            class="article-image"
        />

        <!-- Image source link -->
        <p
            v-if="article.image_source_name && article.image_source_link"
            class="image-source"
        >
          (source:
          <a
              :href="article.image_source_link"
              target="_blank"
              rel="noopener noreferrer"
          >
            {{ article.image_source_name }}
          </a>
          )
        </p>

        <!-- Main content -->
        <div class="article-content" v-html="article.content" />
      </div>

      <div v-else class="loading">Loading article...</div>
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
  components: {
    Navbar,
    Footer
  },
  setup() {
    const route = useRoute()
    const article = ref<any>(null)
    const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL

    const formatDate = (dateStr: string): string => {
      const date = new Date(dateStr)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    onMounted(async () => {
      const articleId = route.params.id
      if (!articleId) return

      try {
        const res = await fetch(`${API_BASE_URL}/articles/${articleId}`)
        const data = await res.json()

        article.value = {
          ...data,
          image: `${API_BASE_URL}/article-image/${data.image_name}`
        }
      } catch (err) {
        console.error('Failed to load article:', err)
      }
    })

    return { article, formatDate }
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

.article-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
}

.article-box {
  background-color: #f7c3a1;
  border: 2px solid #000000;
  border-radius: 16px;
  padding: 20px 30px 30px 30px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.article-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin: 0 0 10px;
  color: #1a1a1a;
}

.article-title-link {
  color: #0077cc;
  text-decoration: underline;
}

.article-date {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 16px;
}

.article-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 8px;
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
