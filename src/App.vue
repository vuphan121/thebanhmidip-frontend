<template>
  <router-view />
</template>

<script lang="ts">
export default {
  name: 'App'
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  font-family: 'Inter', sans-serif;
  background-color: #F7C3A1;
}

*, *::before, *::after {
  box-sizing: inherit;
}
</style>
