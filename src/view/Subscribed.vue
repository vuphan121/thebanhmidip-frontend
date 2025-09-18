<template>
  <div class="page-wrapper">
    <Navbar />

    <main class="confirmation-wrapper">
      <div class="confirmation-box">
        <h1 class="confirmation-title">🎉 You're Subscribed!</h1>
        <p class="confirmation-message">
          Thank you for subscribing to <strong>The Banh Mi Dip</strong> newsletter.
        </p>
        <p class="confirmation-message">
          You’ll now receive updates, exclusive stories, and delicious content straight to your inbox.
        </p>

        <router-link to="/" class="home-link">← Back to Homepage</router-link>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.page-wrapper {
  background-color: #f7c3a1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.confirmation-wrapper {
  flex: 1;
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.confirmation-box {
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 100%;
}

.confirmation-title {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  color: #5E8C61;
  margin-bottom: 20px;
}

.confirmation-message {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 10px;
  line-height: 1.6;
}

.home-link {
  display: inline-block;
  margin-top: 20px;
  color: #5E8C61;
  font-weight: bold;
  text-decoration: none;
  font-size: 1rem;
}
</style>
