<template>
  <div>
    <button @click="goToHome" class="back-home-button">
      <span class="arrow">↑</span>
    </button>
    <section class="description-section h-screen flex flex-col justify-center items-center text-center text-white" data-aos="fade-up">
      <div class="description-content p-8 bg-black bg-opacity-75 rounded-lg shadow-lg">
        <p class="description-text text-4xl leading-relaxed text-justify">
          <span class="text-red-500 font-bold">Hip-hop</span> is not just a genre—it's a living, breathing cultural phenomenon that sprang from the streets of the
          <span class="text-red-500 font-bold">Bronx</span> in the 1970s. Imagine a vibrant mosaic where every piece tells a story: 
          <span class="text-red-500 font-bold">rapping (MCing)</span> amplifies voices with rhythm and poetry, 
          <span class="text-red-500 font-bold">DJing</span> mixes beats that keep the party alive, 
          <span class="text-red-500 font-bold">graffiti art</span> splashes urban canvases with bold colors and messages, and 
          <span class="text-red-500 font-bold">breakdancing</span> defies gravity with every spin and pop. Together, these elements form a powerful expression of the experiences and creativity of marginalized communities.
        </p>
      </div>
    </section>
    <button @click="goToInfo" class="down-arrow-button">
      <span class="arrow">↓</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => {
  router.push('/')
}

const goToInfo = () => {
  router.push('/info')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');

.description-text {
  font-family: 'Staatliches', sans-serif;
  animation: fadeIn 2s ease-in-out;
}

.back-home-button,
.down-arrow-button {
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  transition: transform 0.3s ease;
}

.back-home-button {
  top: 1rem;
}

.back-home-button:hover,
.down-arrow-button:hover {
  transform: scale(1.1);
}

.down-arrow-button {
  bottom: 1rem;
}

.arrow {
  display: inline-block;
  animation: bounce 1s infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

.description-content {
  max-width: 800px;
  margin: auto;
}
</style>
