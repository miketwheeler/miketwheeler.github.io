<template>
    <v-container id="projects">
        <div class="mb-6 mt-8 mx-4" style="font-size: 2.8rem; opacity: 0.6;">Projects & Experience</div>
        <v-card minHeight="900" variant="text" rounded="xl">
            <v-row>
                <v-col cols="12">
                    <section v-for="project in projects" :key="`project-${project.id}`"
                        :id="`project-card-${project.id}`" data-anchor>
                        <ProjectCard :project="project" />
                    </section>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>


<script lang="ts" setup>
import { computed, onMounted, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';
import ProjectCard from '@/components/inserts/ProjectCard.vue';
import { projectCardList, type Project } from '@/data/data';


const route = useRoute()
const projects = computed(() => projectCardList)


const scrollToHash = async () => {
    if (!route.hash) return

    await nextTick() // wait for v-for DOM to exist

    const el = document.querySelector(route.hash)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
    }
}

onMounted(scrollToHash)

watch(
    () => route.hash,
    scrollToHash
)
</script>


<style scoped></style>