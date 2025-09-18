<template>
  <section class="hero">
    <img class="hero-logo" :src="heroLogoUrl" alt="Logo" />
    <h1 class="hero-title">The Banh Mi Dip</h1>
    <p class="hero-subtext">
      Get your daily 5-minute flavor bomb of Vietnam’s freshest news and insights!
    </p>

    <form @submit.prevent="handleSubscribe" class="hero-form">
      <input
          type="email"
          v-model="email"
          placeholder="Enter your email"
          :disabled="cooldown || loading"
      />
      <button type="submit" :disabled="cooldown || loading">Subscribe</button>
    </form>

    <p v-if="success" class="message success">Check your email to confirm your subscription.</p>
    <p v-if="error" class="message error">{{ error }}</p>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { userSubscribe } from '@/function/subscribe'

const heroLogoUrl = `${import.meta.env.VITE_BACKEND_API_URL}/article-image/banhmipic.jpg`
const email = ref('')
const cooldown = ref(false)

const { subscribe, success, error, loading } = userSubscribe()

const handleSubscribe = async () => {
  if (!email.value.includes('@')) {
    error.value = 'Please enter a valid email address.'
    return
  }

  if (cooldown.value) return

  cooldown.value = true
  await subscribe(email.value)

  setTimeout(() => {
    cooldown.value = false
  }, 60000)
}
</script>

<style scoped>
.hero {
  text-align: center;
  background-color: #F7C3A1;
  padding: 60px 20px 40px;
}
.hero-logo {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 20px;
}
.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  color: #4B2E1E;
  margin-bottom: 10px;
}
.hero-subtext {
  font-size: 1.2rem;
  color: #3a2c1f;
  margin-bottom: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  padding: 0 20px;
}
.hero-form {
  display: flex;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
  border: 2px solid #4B2E1E;
  border-radius: 10px;
  overflow: hidden;
}
.hero-form input[type="email"] {
  flex: 1;
  padding: 12px;
  border: none;
  font-size: 1rem;
  outline: none;
}
.hero-form button {
  background-color: #4B2E1E;
  color: white;
  padding: 12px 20px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
}
.hero-form button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.message {
  margin-top: 12px;
  font-size: 1rem;
  font-weight: bold;
}
.success {
  color: green;
}
.error {
  color: red;
}
</style>
