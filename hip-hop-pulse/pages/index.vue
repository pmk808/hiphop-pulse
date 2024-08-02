<template>
  <div class="hero-section bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white">
    <h1 class="hero-title text-6xl mb-4">Hip-Hop Pulse</h1>
    <p class="hero-tagline text-2xl text-red-500">Culture Beyond the Beat</p>
    <div v-if="imageUrl" class="rounded-lg overflow-hidden mt-8">
      <img :src="imageUrl" class="w-full" draggable="false">
    </div>
    <div v-else class="mt-8">Loading image...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase.js'

const imageUrl = ref<string | null>(null)

const fetchImage = async () => {
  const { data, error } = await supabase
    .storage
    .from('images') // Replace 'images' with your bucket name
    .list('')

  if (error) {
    console.error('Error fetching images:', error)
  } else if (data.length > 0) {
    const firstImage = data[0]
    imageUrl.value = supabase.storage.from('images').getPublicUrl(firstImage.name).data.publicUrl
    console.log('Fetched image URL:', imageUrl.value) // Debugging log
  }
}

onMounted(() => {
  fetchImage()
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.hero-title {
  font-family: 'Staatliches', sans-serif;
}
</style>