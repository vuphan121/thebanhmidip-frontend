<template>
  <section class="hero">
    <img class="hero-logo" :src="heroLogoUrl" alt="Logo" />
    <h1 class="hero-title">The Banh Mi Dip</h1>
    <p class="hero-subtext">
      Get your daily 5-minute dose of Vietnam’s freshest tech, finance, and policy news – straight from the oven!
    </p>
    <div class="hero-form">
      <input type="email" placeholder="Enter your email" />
      <button>Subscribe</button>
    </div>
  </section>
</template>

<script setup lang="ts">
const heroLogoUrl = `${import.meta.env.VITE_BACKEND_API_URL}/article-image/banhmipic.jpg`
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
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
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
</style>