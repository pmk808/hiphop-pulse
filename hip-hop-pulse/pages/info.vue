<template>
    <div class="info-page">
        <button @click="goToIntro" class="back-intro-button">
            <span class="arrow">↑</span>
        </button>
        <!-- Collapsible Section: Culture -->
        <div class="collapsible-section" @click="toggleSection('culture')">
            <div class="collapsible-header">
                <span>CULTURE</span>
                <span class="arrow" :class="{ 'rotate-90': isSectionOpen('culture') }">→</span>
            </div>
            <div v-if="isSectionOpen('culture')" class="collapsible-content">
                <p>
                    Hip-hop culture is a vibrant and dynamic force that influences music, fashion, language, and
                    lifestyle globally. It began as a way for marginalized communities to express their creativity and
                    experiences, and it has since grown into a worldwide phenomenon.
                </p>
            </div>
        </div>

        <!-- Collapsible Section: Trailblazers and Legends -->
        <div class="collapsible-section" @click="toggleSection('legends')">
            <div class="collapsible-header">
                <span>TRAILBLAZERS AND LEGENDS</span>
                <span class="arrow" :class="{ 'rotate-90': isSectionOpen('legends') }">→</span>
            </div>
            <div v-if="isSectionOpen('legends')" class="collapsible-content">
                <p>
                    The legends of hip-hop, from Grandmaster Flash to Tupac Shakur, have shaped the genre with their
                    groundbreaking music and cultural impact. They are the pioneers who pushed the boundaries of what
                    hip-hop could be.
                </p>
            </div>
        </div>

        <!-- Collapsible Section: Community -->
        <div class="collapsible-section" @click="toggleSection('community')">
            <div class="collapsible-header">
                <span>COMMUNITY</span>
                <span class="arrow" :class="{ 'rotate-90': isSectionOpen('community') }">→</span>
            </div>
            <div v-if="isSectionOpen('community')" class="collapsible-content">
                <p>
                    Hip-hop is deeply rooted in community, serving as a voice for the voiceless and a platform for
                    social change. It's about unity, empowerment, and the collective power of the people.
                </p>
            </div>
        </div>

        <!-- Collapsible Section: Hip-Hop Today -->
        <div class="collapsible-section" @click="toggleSection('today')">
            <div class="collapsible-header">
                <span>HIP-HOP TODAY</span>
                <span class="arrow" :class="{ 'rotate-90': isSectionOpen('today') }">→</span>
            </div>
            <div v-if="isSectionOpen('today')" class="collapsible-content">
                <p>
                    Today, hip-hop is a global movement that transcends borders and cultures. It continues to evolve,
                    influencing new generations and reflecting the realities of modern life.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const openSections = ref<Record<string, boolean>>({})

const toggleSection = (section: string) => {
    openSections.value[section] = !openSections.value[section]
}

const isSectionOpen = (section: string) => {
    return openSections.value[section]
}

const goToIntro = () => {
    router.push('/intro')
}
</script>

<style scoped>
.info-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    position: relative;
}

.back-intro-button {
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.collapsible-section {
    border-bottom: 1px solid #444;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.collapsible-section:hover {
    background-color: #222;
}

.collapsible-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1rem;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.5rem;
    color: #fff;
}

.arrow {
    transition: transform 0.3s ease;
}

.rotate-90 {
    transform: rotate(90deg);
}

.collapsible-content {
    padding: 1rem 1rem 2rem;
    font-family: 'Staatliches', sans-serif;
    font-size: 1rem;
    color: #fff;
    background-color: #111;
    transition: max-height 0.3s ease;
    overflow: hidden;
}
</style>