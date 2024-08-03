<template>
  <div class="hero-section bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white">
    <h1 class="hero-title text-6xl mt-8 animate-pulse">Hip-Hop Pulse</h1> <!-- Added margin-top -->
    <p class="hero-tagline text-2xl text-red-500 mb-4">Culture Beyond the Beat</p>
    <div class="carousel-container rounded-lg overflow-hidden mt-4 mb-8"> <!-- Added margin-bottom -->
      <UCarousel
        ref="carouselRef"
        v-slot="{ item }"
        :items="items"
        :ui="{ item: 'basis-full' }"
        class="rounded-lg overflow-hidden"
        indicators
      >
        <img :src="item" class="carousel-image w-full m-2" draggable="false"> <!-- Added margin -->
      </UCarousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const items = [
  'https://aicilwgadairuwpfqvsj.supabase.co/storage/v1/object/public/images/hero1.jpg',
  'https://aicilwgadairuwpfqvsj.supabase.co/storage/v1/object/public/images/hero2.jpg',
  'https://aicilwgadairuwpfqvsj.supabase.co/storage/v1/object/public/images/hero3.jpg',
  'https://aicilwgadairuwpfqvsj.supabase.co/storage/v1/object/public/images/hero4.jpg',
  'https://aicilwgadairuwpfqvsj.supabase.co/storage/v1/object/public/images/hero5.jpg',
  'https://aicilwgadairuwpfqvsj.supabase.co/storage/v1/object/public/images/hero6.jpg',
  'https://aicilwgadairuwpfqvsj.supabase.co/storage/v1/object/public/images/hero7.jpg'
]

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 3000)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.hero-title {
  font-family: 'Staatliches', sans-serif;
  animation: pulse 1s infinite;
}

.hero-tagline {
  font-family: 'Bebas Neue', sans-serif;
}

.carousel-container {
  width: 90%; /* Adjust width as needed */
  max-width: 1500px; /* Adjust max-width as needed */
  height: 600px; /* Adjust height as needed */
  display: flex; /* Ensure the container uses flexbox */
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  margin-bottom: 2rem; /* Add margin below the carousel */
}

.carousel-image {
  object-fit: cover; /* Ensure images cover the carousel area */
  width: calc(100% - 16px); /* Adjust width to account for margin */
  height: calc(100% - 16px); /* Adjust height to account for margin */
  margin: 8px; /* Add margin around images */
}

/* Add pulse animation */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>