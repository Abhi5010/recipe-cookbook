<template>
  <div class="bg-zinc-950 shadow-lg rounded-xl p-8">
    <h2 class="text-2xl font-bold text-center mb-6 text-white">Create Account</h2>

    <input
      v-model="name"
      type="text"
      placeholder="Full Name"
      class="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
    />

    <input
      v-model="email"
      type="email"
      placeholder="Email Address"
      class="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
    />

    <input
      v-model="password"
      type="password"
      placeholder="Password"
      class="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
    />

    <button
      @click="registerUser"
      class="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
    >
      Register
    </button>

    <p v-if="error" class="text-red-500 text-sm mt-3 text-center">
      {{ error }}
    </p>

    <p v-if="success" class="text-green-600 text-sm mt-3 text-center">
      {{ success }}
    </p>

    <p class="text-center text-sm mt-4 text-gray-400">
        Already have an account?
        <NuxtLink
        to="/auth/login"
        class="text-orange-500 hover:underline font-medium"
        >
        Login
    </NuxtLink> 
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const config = useRuntimeConfig()

const name = ref('')
const email = ref('')
const password = ref('')

const error = ref('')
const success = ref('')
const loading = ref(false)

async function registerUser() {
  error.value = ''
  success.value = ''

  if (!name.value || !email.value || !password.value ) {
    error.value = 'All fields are required'
    return
  }

  loading.value = true

  try {
    const response = await $fetch(`${config.public.apiBase}/auth/register`, {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        password: password.value
      }
    })

    success.value = response.message || 'Registration successful'

    name.value = ''
    email.value = ''
    password.value = ''

    setTimeout(() => {
      navigateTo('/auth/login')
    }, 1000)
  } catch (err) {
    error.value =
      err?.data?.message ||
      err?.data?.error ||
      'Registration failed'
  } finally {
    loading.value = false
  }
}
</script>


