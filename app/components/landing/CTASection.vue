<template>
  <section class="px-8 py-20">
    <div class="max-w-4xl mx-auto bg-orange-500 text-white rounded-3xl p-10 text-center shadow-xl">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        Ready to build your personal cookbook?
      </h2>

      <p class="text-lg mb-8 text-orange-100">
        Join now and start saving, organizing, and sharing your favorite recipes.
      </p>

      <NuxtLink
        to="/auth/register"
        class="inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg hover:bg-orange-100 transition"
      >
        Create Account
      </NuxtLink>
    </div>
  </section>
</template>