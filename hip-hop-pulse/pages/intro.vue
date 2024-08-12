<template>
  <div>
    <button @click="goToHome" class="back-home-button">
      <span class="arrow">↑</span>
    </button>
    <section class="description-section h-screen flex flex-col justify-center items-center text-center text-white" data-aos="fade-up">
      <div class="description-content p-8">
        <p class="description-text text-lg">
          Hip-hop is not just a genre—it's a living, breathing cultural phenomenon that sprang from the streets of the Bronx in the 1970s. Imagine a vibrant mosaic where every piece tells a story: rapping (MCing) amplifies voices with rhythm and poetry, DJing mixes beats that keep the party alive, graffiti art splashes urban canvases with bold colors and messages, and breakdancing defies gravity with every spin and pop. Together, these elements form a powerful expression of the experiences and creativity of marginalized communities.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => {
  router.push('/')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.description-text {
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 300;
}

/* Styles for the back home button */
.back-home-button {
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: transform 0.3s ease;
  position: fixed; /* Use fixed positioning */
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000; /* Ensure the button is on top */
}

.back-home-button:hover {
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