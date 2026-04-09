<template>
  <section class="px-8 py-20">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      
      <div>
        <p class="text-orange-500 font-semibold mb-3">
          Discover • Cook • Share
        </p>

        <h1 class="text-5xl font-extrabold leading-tight mb-6 text-white">
          Your Digital
          <span class="text-orange-500">Recipe Cookbook</span>
        </h1>

        <p class="text-lg text-zinc-600 mb-8 text-gray-400">
          Save your favorite recipes, explore delicious dishes, and organize your cooking journey all in one beautiful place.
        </p>

        <div class="flex gap-4">
          <NuxtLink
            to="/auth/register"
            class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Start Cooking
          </NuxtLink>

          
        </div>
      </div>

      <div class="flex justify-center">
        <div class="bg-white shadow-xl rounded-3xl p-6 w-full max-w-md">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
            alt="Food"
            class="rounded-2xl w-full h-72 object-cover"
          />
          <h3 class="text-xl font-bold mt-4">Fresh & Tasty Recipes</h3>
          <p class="text-zinc-600 mt-2">
            Discover recipes for breakfast, lunch, dinner, snacks, and desserts.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>