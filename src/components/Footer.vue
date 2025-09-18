<template>
  <footer class="footer">
    <div class="footer-content">
      <img class="footer-logo" :src="footerLogoUrl" alt="Logo" />
      <span class="footer-name">The Banh Mi Dip</span>
    </div>
    <p class="copyright">© 2025 The Banh Mi Dip.</p>
  </footer>
</template>

<script setup lang="ts">
const footerLogoUrl = `${import.meta.env.VITE_BACKEND_API_URL}/article-image/banhmipic.jpg`
</script>

<style scoped>
.footer {
  background-color: #4B2E1E;
  color: #f0e6d2;
  padding: 40px 20px 20px;
  text-align: center;
}
.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.footer-logo {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 10px;
}
.footer-name {
  font-weight: bold;
  font-size: 1.2rem;
  color: #f9e4bc;
}
.footer p {
  font-size: 0.9rem;
  color: #e0d7c6;
}
</style>
