<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signIn } from '@/services/auth'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

async function handleSubmit() {
  error.value = ''
  loading.value = true
  try {
    await signIn(email.value, password.value)
    router.push('/admin/dashboard')
  } catch (e: any) {
    error.value = e.message || 'Fehler beim Anmelden'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section class="page">
    <div class="container">
      <div class="login-card">
        <h1>Admin Login</h1>
        <form @submit.prevent="handleSubmit" class="form">
          <div class="form-group">
            <label for="email">E-Mail</label>
            <input id="email" v-model="email" type="email" class="form-input" required />
          </div>
          <div class="form-group">
            <label for="password">Passwort</label>
            <input id="password" v-model="password" type="password" class="form-input" required />
          </div>
          <p v-if="error" class="error">{{ error }}</p>
          <button type="submit" class="btn btn-primary" :disabled="loading" style="width:100%">
            {{ loading ? 'Wird angemeldet...' : 'Anmelden' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 48px 0;
}

.login-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.login-card h1 {
  font-size: 1.5rem;
  color: var(--text-heading);
  margin-bottom: 24px;
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text);
}

.form-input {
  padding: 10px 14px;
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
  background: var(--bg-card);
  color: var(--text);
}

.form-input:focus {
  border-color: var(--accent);
}

.error {
  color: var(--danger);
  font-size: 0.85rem;
}
</style>