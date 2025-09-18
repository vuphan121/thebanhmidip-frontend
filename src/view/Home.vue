<template>
  <div>
    <Navbar />
    <Hero />
    <ArticleGrid :articles="articles" @clickArticle="handleClick" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
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
    const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL

    const handleClick = (article: any) => {
      console.log('Clicked article:', article)
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
        console.error('❌ Failed to fetch articles:', err)
      }
    })

    return { articles, handleClick }
  }
})
</script>
