<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
      <p class="toggle">Don't have an account?
        <router-link to="/register" @click="$emit('close')">Register here</router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase_client } from '@/lib/supabase_auth'

const router = useRouter()
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  const { error } = await supabase_client.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if (error) {
    alert(error.message)
  } else {
    router.push('/')
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: #fff7ef;
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

button {
  margin-top: 15px;
  background-color: #5E8C61;
  color: white;
  padding: 10px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
}

.toggle {
  margin-top: 16px;
  font-size: 0.9rem;
  color: #333;
  text-align: center;
}

.toggle a {
  color: #4B2E1E;
  font-weight: bold;
  text-decoration: underline;
}
</style>
