<template>
  <div class="bg-zinc-950 shadow-lg rounded-xl p-8">
    <h2 class="text-2xl font-bold text-center mb-6 text-white">Login</h2>
    <input
      v-model="email"
      type="email"
      placeholder="Email"
      class="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
    />
    <input
      v-model="password"
      type="password"
      placeholder="Password"
      class="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
    />
    <button
      @click="loginUser"
      class="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
    >
      Login
    </button>
    <p v-if="error" class="text-red-500 text-sm mt-3 text-center">
      {{ error }}
    </p>

    <p v-if="success" class="text-green-600 text-sm mt-3 text-center">
      {{ success }}
      </p>

    <p class="text-center text-sm mt-4 text-gray-400">
        Don't have an account?
        <NuxtLink
        to="/auth/register"
        class="text-orange-500 hover:underline font-medium"
        >
        Register
    </NuxtLink> 
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'

const config = useRuntimeConfig()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')

const error = ref('')
const success = ref('')
const loading = ref(false)

async function loginUser() {
  error.value = ''
  success.value = ''

  if (!email.value || !password.value) {
    error.value = 'All fields are required'
    return
  }

  loading.value = true

  try {
    const response = await $fetch(`${config.public.apiBase}/auth/login`, {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value
      }
    })

    console.log('Login response:', response)

    if (response.data) {
      authStore.setAuth(response.data.token, response.data.user)
    }

    success.value = 'Login successful! Redirecting...'

    setTimeout(() => {
      navigateTo('/dashboard')
    }, 1000)

  } catch (err) {
    error.value =
      err?.data?.message ||
      err?.data?.error ||
      'Login failed'
  } finally {
    loading.value = false
  }
}
</script>