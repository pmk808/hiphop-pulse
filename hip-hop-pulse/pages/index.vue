<template>
  <div class="hero-section bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white">
    <h1 class="hero-title text-6xl mb-4">Hip-Hop Pulse</h1>
    <p class="hero-tagline text-2xl text-red-500">Culture Beyond the Beat</p>
    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="rounded-lg overflow-hidden mt-8"
      indicators
    >
      <img :src="item" class="w-full" draggable="false">
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase.js'

const items = ref<string[]>([])
const carouselRef = ref()

const fetchImages = async () => {
  const { data, error } = await supabase
    .storage
    .from('images')
    .list('', { limit: 7 })

  if (error) {
    console.error('Error fetching images:', error)
    return
  }

  if (data) {
    const imageUrls = data.map(file => `https://aicilwgadairuwpfqvsj.supabase.co/storage/v1/object/public/images/${file.name}`)
    items.value = imageUrls
  }
}

onMounted(async () => {
  await fetchImages()

  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.hero-title {
  font-family: 'Staatliches', sans-serif;
}

.hero-tagline {
  font-family: 'Bebas Neue', sans-serif;
}
</style>
