<template>
    <v-container fluid class="ma-0 pa-0">
        <!-- <v-card> -->
        <!-- <v-surface> -->
        <v-container fluid>
            <v-row dense class="px-16">
                <v-col v-for="n in 2" :key="n" cols="6">
                    <v-sheet color="surface-variant-alt" height="196"></v-sheet>
                </v-col>
            </v-row>
        </v-container>

        <v-tabs v-model="activeTab" class="sticky-tabs" align-tabs="center" grow color="primary" bg-color="surface"
            style="box-shadow: 0px 16px 28px rgba(25,25,25, 0.6);">
            <!-- style="box-shadow: 0px 16px 28px rgba(200,200,200, 0.2);" -->
            <v-tab @click="scrollTo('intro')" class="tab-styles">Introduction</v-tab>
            <v-tab @click="scrollTo('projects')" class="tab-styles">Projects</v-tab>
            <v-tab @click="scrollTo('credentials')" class="tab-styles">Credentials</v-tab>
        </v-tabs>

        <!-- <v-card-text> -->
        <v-sheet color="surface" class="px-12">
            <!-- Scrollable Body -->
            <div :ref="sections.intro" class="section pt-8">
                <IntroductionSection />
            </div>

            <div :ref="sections.projects" class="section">
                <ProjectsSection />
            </div>

            <div :ref="sections.credentials" class="section">
                <CredentialsSection />
            </div>

        </v-sheet>

        <!-- </v-card-text> -->
        <!-- </v-surface> -->
        <!-- </v-card> -->
    </v-container>
</template>


<script lang="ts" setup>
import IntroductionSection from '@/components/pageSections/IntroductionSection.vue';
import ProjectsSection from '@/components/pageSections/ProjectsSection.vue';
import CredentialsSection from '@/components/pageSections/CredentialsSection.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue'


const activeTab = ref(0)
const sections = {
    intro: ref<HTMLElement | null>(null),
    projects: ref<HTMLElement | null>(null),
    credentials: ref<HTMLElement | null>(null),
}

const scrollTo = (key: keyof typeof sections) => {
    const el = sections[key].value
    if (el) {
        window.scrollTo({
            top: el.offsetTop - 64, // adjust for sticky header height
            behavior: 'smooth',
        })
    }
}

// Update active tab on scroll (basic scrollspy)
const handleScroll = () => {
    const scrollY = window.scrollY
    const sectionEntries = Object.entries(sections)

    for (let i = sectionEntries.length - 1; i >= 0; i--) {
        const [key, elRef] = sectionEntries[i]
        const el = elRef.value

        if (el && scrollY >= el.offsetTop - 100) {
            activeTab.value = i
            break
        }
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>


<style scoped>
.sticky-tabs {
    position: sticky !important;
    top: 64px;
    /* match your app-bar */
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tab-styles {
    text-transform: none;
}

.section {
    /* padding: 64px 16px; */
    /* min-height: 100vh; Optional, gives breathing room per section */
}
</style>