<template>
  <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close-btn" @click="$emit('close')">×</button>

      <h2 class="modal-title">Subscribe to The Banh Mi Dip</h2>
      <p class="modal-subtext">Enter your email to Get your daily 5-minute flavor bomb of Vietnam’s freshest news and insights delivered to your inbox!</p>

      <form @submit.prevent="handleSubmit" class="modal-form">
        <input
            v-model="email"
            type="email"
            placeholder="you@example.com"
            class="email-input"
            required
        />
        <button type="submit" class="submit-btn" :disabled="loading">
          {{ loading ? 'Sending...' : 'Subscribe' }}
        </button>
      </form>

      <p v-if="success" class="success-message">🎉 Check your email to confirm your subscription!</p>
      <p v-if="error" class="error-message">⚠️ {{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'

const props = defineProps<{ show: boolean }>()
const emit = defineEmits(['close'])

const email = ref('')
const loading = ref(false)
const success = ref(false)
const error = ref<string | null>(null)

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_PROJECT_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
)

const handleSubmit = async () => {
  loading.value = true
  success.value = false
  error.value = null

  const { error: signUpError } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: 'https://thebanhmidip.com/subscribed'
    }
  })

  if (signUpError) {
    error.value = signUpError.message
  } else {
    success.value = true
    email.value = ''
  }

  loading.value = false
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-color: #f7c3a1;;
  border-radius: 16px;
  padding: 40px 30px;
  max-width: 460px;
  width: 90%;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.close-btn {
  position: absolute;
  top: 14px;
  right: 16px;
  font-size: 1.5rem;
  background: transparent;
  border: none;
  color: #4b2e1e;
  cursor: pointer;
}

.modal-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #5E8C61;
  margin-bottom: 10px;
}

.modal-subtext {
  font-size: 1rem;
  color: #444;
  margin-bottom: 20px;
  line-height: 1.5;
}

.modal-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.email-input {
  padding: 10px 14px;
  border: 2px solid #5E8C61;
  border-radius: 8px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.submit-btn {
  background-color: #F7C3A1;
  color: #4B2E1E;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success-message {
  color: #5E8C61;
  margin-top: 16px;
  font-weight: bold;
}

.error-message {
  color: #d00000;
  margin-top: 16px;
  font-weight: bold;
}
</style>
