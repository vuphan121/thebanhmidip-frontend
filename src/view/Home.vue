<template>
  <div>
    <Navbar />

    <template v-if="currentPage === 1 && !isLoading">
      <Hero />
      <ArticleGrid :articles="articles" @clickArticle="handleClick" />
    </template>

    <div class="pagination" v-if="!isLoading">
      <span
          class="page-number"
          v-for="n in 8"
          :key="n"
          @click="handlePageClick(n)"
      >
        {{ n }}
      </span>
    </div>

    <div v-if="isLoading" class="spinner-container">
      <div class="spinner"></div>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import ArticleGrid from '@/components/ArticleGrid.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Navbar,
    Hero,
    ArticleGrid,
    Footer
  },
  setup() {
    const articles = ref<any[]>([])
    const router = useRouter()
    const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL

    const currentPage = ref(1)
    const isLoading = ref(false)

    const handlePageClick = (page: number) => {
      currentPage.value = page
      if (page !== 1) {
        isLoading.value = true
      }
    }

    const handleClick = (article: any) => {
      if (article?.id) {
        router.push(`/article/issue/${article.id}`)
      }
    }

    onMounted(async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/articles`)
        const data = await res.json()

        const updatedArticles = data.map((article: any) => ({
          ...article,
          image: `${API_BASE_URL}/article-image/${article.image_name}`
        }))

        articles.value = updatedArticles
      } catch (err) {
        console.error('Failed to fetch articles:', err)
      }
    })

    return { articles, handleClick, currentPage, isLoading, handlePageClick }
  }
})
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 40px 0;
  flex-wrap: wrap;
}

.page-number {
  padding: 8px 14px;
  border: 1px solid #000;
  border-radius: 8px;
  cursor: pointer;
  background-color: #eb9260;
  transition: background-color 0.2s, color 0.2s;
}

.page-number:hover {
  background-color: #000;
  color: #fff;
}

.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
}

.spinner {
  width: 48px;
  height: 48px;
  border: 5px solid #ccc;
  border-top-color: #000;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
