<template>
    <v-container fluid class="ma-0 pa-0">
        <v-container fluid>
            <v-row dense class="hero-row">
                <v-col cols="12" sm="6" :class="smAndUp ? 'd-flex justify-end' : 'd-flex'">
                    <HeroLeft />
                </v-col>
                <v-col cols="6" sm="6" class="d-none d-sm-flex">
                    <v-slide-y-reverse-transition mode="in-out">
                        <HeroRight v-if="smAndUp" />
                    </v-slide-y-reverse-transition>
                </v-col>
            </v-row>
        </v-container>

        <v-tabs v-model="activeTab" class="sticky-tabs" align-tabs="center" grow color="primary" bg-color="background"
            slider-transition="fade">
            <v-tab @click="scrollTo('intro', 0)" style="text-transform: none;">Introduction</v-tab>
            <v-tab @click="scrollTo('tools', 1)" style="text-transform: none;">Tools</v-tab>
            <v-tab @click="scrollTo('projects', 2)" style="text-transform: none;">Projects & Experience</v-tab>
            <v-tab @click="scrollTo('credentials', 3)" style="text-transform: none;">Credentials</v-tab>
        </v-tabs>

        <!-- Scrollable Body -->
        <v-sheet color="background" class="px-0" style="border: 1px solid var(--v-theme-on-surface)">
            <div :ref="sections.intro" class="section pt-8">
                <IntroductionSection />
            </div>
            <div :ref="sections.tools" class="section">
                <ToolsSection />
            </div>
            <div :ref="sections.projects" class="section">
                <ProjectsSection />
            </div>
            <div :ref="sections.credentials" class="section">
                <CredentialsSection />
            </div>

        </v-sheet>

    </v-container>
</template>


<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useDisplay } from 'vuetify';
import IntroductionSection from '@/components/pageSections/IntroductionSection.vue';
import ProjectsSection from '@/components/pageSections/ProjectsSection.vue';
import CredentialsSection from '@/components/pageSections/CredentialsSection.vue';
import ToolsSection from '@/components/pageSections/ToolsSection.vue';


const { smAndUp } = useDisplay()

const activeTab = ref(0)
const sections = {
    intro: ref<HTMLElement | null>(null),
    tools: ref<HTMLElement | null>(null),
    projects: ref<HTMLElement | null>(null),
    credentials: ref<HTMLElement | null>(null),
}

const APPBAR_HEIGHT = 64
const TABS_HEIGHT = 48
const ACTIVATION_LINE = APPBAR_HEIGHT + TABS_HEIGHT + 20 // Added a bit more padding

let isScrollingLocked = false
// let previousClickScrolled = -1;

const scrollTo = (key: keyof typeof sections, index: number) => {
    const el = sections[key].value
    if (!el) return

    isScrollingLocked = true
    activeTab.value = index

    const y = el.getBoundingClientRect().top + window.scrollY - (APPBAR_HEIGHT + TABS_HEIGHT)

    window.scrollTo({
        top: y,
        behavior: 'smooth',
    })

    const checkEnd = () => {
        isScrollingLocked = false
        window.removeEventListener('scrollend', checkEnd)
    }
    window.addEventListener('scrollend', checkEnd, { once: true })

    // previousClickScrolled = index;

    // Fallback for Safari/older browsers that don't support scrollend
    setTimeout(() => { isScrollingLocked = false }, 1000)
}

const updateActiveTab = () => {
    if (isScrollingLocked) return

    const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 10

    if (isAtBottom) {
        activeTab.value = 3 // Index of your last tab
        return
    }

    const sectionKeys = Object.keys(sections) as Array<keyof typeof sections>

    // Find the current section
    // We look for the section that has crossed the activation line
    for (let i = sectionKeys.length - 1; i >= 0; i--) {
        const el = sections[sectionKeys[i]].value
        if (el) {
            const rect = el.getBoundingClientRect()
            // If the top of the section is above our activation line, it's the active one
            if (rect.top <= ACTIVATION_LINE) {
                activeTab.value = i
                break
            }
        }
    }
}

onMounted(() => {
    window.addEventListener('scroll', updateActiveTab, { passive: true })
    updateActiveTab()
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateActiveTab)
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

.hero-row {
    position: relative;
    height: 320px;
    /* adjust to taste */
    overflow: hidden;
    /* THIS hides the spill under tabs */
}
</style>