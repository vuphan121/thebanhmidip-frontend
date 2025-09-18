<template>
  <header class="navbar">
    <div class="navbar-left">
      <img class="logo" :src="logoUrl" alt="Logo" />
      <span class="brand-name">The Banh Mi Dip</span>
    </div>
    <div class="navbar-right">
      <button class="subscribe-btn">Subscribe</button>
      <div class="menu-icon">☰</div>
    </div>
  </header>
</template>

<script setup lang="ts">
const logoUrl = `${import.meta.env.VITE_BACKEND_API_URL}/article-image/banhmipic.jpg`
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
}
.subscribe-btn {
  background-color: #F7C3A1;
  color: #4B2E1E;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 12px;
}
.menu-icon {
  font-size: 1.5rem;
  color: #F9E4BC;
  cursor: pointer;
}
</style>
