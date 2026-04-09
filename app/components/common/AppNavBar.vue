<template>
  <nav class="flex items-center justify-between px-8 py-5 bg-zinc-950 shadow-sm">
    <NuxtLink to="/">
        <h1 class="text-2xl font-bold text-orange-600">RecipeBook</h1>
    </NuxtLink>
    <div class="flex items-center gap-6 text-white">
      <NuxtLink to="/" class="hover:text-orange-600 transition">Home</NuxtLink>
      <NuxtLink to="/recipes" class="hover:text-orange-600 transition">Recipes</NuxtLink>
      <NuxtLink to="/about" class="hover:text-orange-600 transition">About</NuxtLink>
      <span v-if="authStore.isAuthenticated" class="text-white font-medium">Welcome, {{ authStore.user?.name }}</span>
      <button
        v-if="authStore.isAuthenticated"
        @click="handleLogout"
        class="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg transition"
      >
        Logout
      </button>

      <NuxtLink
        v-if="!authStore.isAuthenticated"
        to="/auth/register"
        class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
      >
        Get Started
      </NuxtLink>

      <NuxtLink
        v-if="!authStore.isAuthenticated"
        to="/auth/login"
        class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
      >
        Login
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()

function handleLogout() {
  authStore.logout()
  navigateTo('/auth/login')
}
</script>