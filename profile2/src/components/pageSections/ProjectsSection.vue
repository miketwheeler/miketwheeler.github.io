<template>
    <v-container id="projects">
        <div class="mb-6 mt-8 mx-4" style="font-size: 2.8rem; opacity: 0.6;">Projects & Experience</div>
        <v-card minHeight="900" variant="text" rounded="xl">
            <v-row>
                <v-col cols="12">
                    <ProjectCard v-for="project in projects" :key="`project-${project.id}`" :project="project" />
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>


<script lang="ts" setup>
import { computed } from 'vue';
import ProjectCard from '@/components/inserts/ProjectCard.vue';
import { projectCardList, type Project } from '@/data/data';


const projects = computed(() => projectCardList)
</script>


<style scoped></style>