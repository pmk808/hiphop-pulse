<template>
  <div class="hero-section bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white" data-aos="fade-up">
    <h1 class="hero-title text-6xl mt-8 animate-pulse" data-aos="fade-down">Hip-Hop Pulse</h1>
    <p class="hero-tagline text-2xl text-red-500 mb-2" data-aos="fade-up">Culture Beyond the Beat</p>
    <div class="carousel-container rounded-lg overflow-hidden mb-8" data-aos="zoom-in">
      <UCarousel
        ref="carouselRef"
        v-slot="{ item }"
        :items="items"
        :ui="{ item: 'basis-full' }"
        class="rounded-lg overflow-hidden"
        indicators
      >
        <div class="carousel-item">
          <img :src="item" class="carousel-image w-full h-full" draggable="false">
        </div>
      </UCarousel>
      <button @click="goToIntro" class="next-page-button">
        <span class="arrow">↓</span>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
const router = useRouter()

const goToIntro = () => {
  router.push('/intro')
}

onMounted(() => {
  AOS.init()
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
  height: auto; /* Ensure height is auto to maintain aspect ratio */
  display: flex; /* Ensure the container uses flexbox */
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  position: relative; /* Position relative to allow absolute positioning of the button */
  margin-bottom: 2rem; /* Add margin below the carousel */
}

.carousel-item {
  overflow: hidden; /* Ensure the image corners are clipped */
}

.carousel-image {
  object-fit: contain; /* Ensure images are fully visible within the carousel */
  width: 100%; /* Ensure images take full width of the carousel */
  height: 100%; /* Ensure images take full height of the carousel */
  transition: border-radius 0.3s ease; /* Smooth transition for border-radius */
}

/* Remove rounded corners during transition */
.carousel-item:active .carousel-image,
.carousel-item:focus .carousel-image {
  border-radius: 0 !important;
}

/* Add pulse animation */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1.15);
  }
  20% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}

/* Styles for the next page button */
.next-page-button {
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  position: absolute; /* Position absolute to overlap the carousel */
  bottom: 1rem; /* Adjust the bottom position to ensure visibility */
  left: 50%;
  transform: translateX(-50%);
  z-index: 10; /* Ensure the button is on top */
  transition: transform 0.3s ease;
}

.next-page-button:hover {
  transform: translateX(-50%) scale(1.1);
}

.arrow {
  display: inline-block;
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
