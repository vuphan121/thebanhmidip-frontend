<template>
  <header class="navbar">
    <div class="navbar-left">
      <img class="logo" :src="logoUrl" alt="Logo" />
      <span class="brand-name">The Banh Mi Dip</span>
    </div>

    <div class="navbar-right">
      <div class="social-links">
        <a
            href="https://www.facebook.com/TheBanhMiDip"
            target="_blank"
            aria-label="Facebook"
            rel="noopener noreferrer"
        >
          <i class="fab fa-facebook fa-lg"></i>
        </a>
        <a
            href="https://www.instagram.com/thebanhmidip/"
            target="_blank"
            aria-label="Instagram"
            rel="noopener noreferrer"
        >
          <i class="fab fa-instagram fa-lg"></i>
        </a>
        <a
            href="https://www.reddit.com/user/thebanhmidip/"
            target="_blank"
            aria-label="Reddit"
            rel="noopener noreferrer"
        >
          <i class="fab fa-reddit fa-lg"></i>
        </a>
      </div>

      <button class="subscribe-btn" @click="showSubscribe = true">Subscribe</button>
    </div>
  </header>

  <SubscribeModal :show="showSubscribe" @close="showSubscribe = false" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SubscribeModal from '@/components/SubscribeModal.vue'

const logoUrl = `${import.meta.env.VITE_BACKEND_API_URL}/article-image/banhmipic.jpg`
const showSubscribe = ref(false)
</script>

<style scoped>
.navbar {
  background-color: #5E8C61;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  width: 100%;
  box-sizing: border-box;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.logo {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.brand-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #F9E4BC;
}

.navbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.social-links {
  display: flex;
  gap: 10px;
}

.social-links a {
  color: #fff;
  transition: color 0.2s;
}

.social-links a:hover {
  color: #FFD700;
}

.subscribe-btn {
  background-color: #F7C3A1;
  color: #4B2E1E;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-weight: bold;
  cursor: pointer;
}
</style>
