<template>
    <v-container id="projects">
        <div class="mb-6 mt-8 mx-4" style="font-size: 2.8rem; opacity: 0.6;">Projects</div>
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
import ProjectCard from '@/components/inserts/ProjectCard.vue';
import data from '@/data/data';

interface Project {
    id: string | null;
    featured: boolean | null;
    gifId: string | null;
    imageTitle: string | null;
    cardTitle: string | null;
    cardDescription: string | null;
    projectLink: string | null;
    siteLink: string | null;
    logoList: string[] | null;
}

const projects = computed<Array<Project>>(() => {
    return data.projectCardList as Array<Project>
})
</script>


<style scoped></style>