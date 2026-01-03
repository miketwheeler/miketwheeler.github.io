<template>
    <v-card v-if="project" :key="`project-card-${project.id}`" class="pa-4 mb-4" rounded="xl">

        <!-- FEATURED CARD -->
        <v-card-text v-if="project.featured">
            <div v-if="project.cardTitle && project.logoList"
                class="d-flex text-subtitle-1 w-100 justify-space-between mb-2 flex-wrap">
                <div class="text-h4">
                    {{ project.cardTitle }}
                </div>
                <div class="align-center d-flex">
                    <LogoBar :logoList="project.logoList" />
                </div>
            </div>
            <div class="d-flex flex-column w-100 card-description text-grey">
                <v-img v-if="project.gifId && project.featured"
                    :src="`https://media.giphy.com/media/${project.gifId}/giphy.gif`" width="100%" />
                {{ project.cardDescription }}
            </div>
            <v-row class="mt-4">
                <v-col cols="12">
                    <v-btn v-if="project.siteLink" class="mr-2" :href="project.siteLink" target="_blank" color="primary"
                        rounded="xl">
                        App Demo
                    </v-btn>
                    <v-btn v-if="project.projectLink" :href="project.projectLink" target="_blank" color="primary"
                        rounded="xl">
                        Code Repo
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-text>

        <!-- REGULAR CARD -->
        <v-card-text v-else>
            <v-row>
                <v-col cols="12" sm="7" class="d-flex justify-space-between">
                    <v-row>
                        <v-col cols="12">
                            <div v-if="project.cardTitle">
                                <div class="text-h6 mb-2">
                                    {{ project.cardTitle }}
                                </div>
                                <div class="text-body-2 text-grey card-description text-grey">
                                    {{ project.cardDescription }}
                                </div>
                            </div>
                        </v-col>
                        <!-- <v-col cols="12"></v-col>
                        <v-spacer /> -->
                        <v-col cols="12" class="d-flex justify-end mt-auto">
                            <div class="d-flex w-100">
                                <v-btn v-if="project.siteLink" class="mr-2" :href="project.siteLink" target="_blank"
                                    rounded="xl" color="primary">
                                    App Demo
                                </v-btn>
                                <v-btn v-if="project.projectLink" :href="project.projectLink" target="_blank"
                                    rounded="xl" color="primary" variant="flat" v-tooltip="'See it on GitHub'"
                                    class="px-0">
                                    <v-icon icon="mdi-github"></v-icon>
                                </v-btn>
                                <v-spacer />
                                <LogoBar v-if="project.logoList" :logoList="project.logoList" />
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" sm="5">
                    <v-img v-if="project.gifId && !project.featured" rounded="xl"
                        :src="`https://media.giphy.com/media/${project.gifId}/giphy.gif`" />
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>

    <v-divider class="my-4" width="75%" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import data from '@/data/data';
import LogoBar from './LogoBar.vue';
import { cardBackground } from '@/globals/globals';


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

const props = defineProps({
    project: {
        type: Object as () => Project | null,
        required: true
    }
})
</script>

<style scoped>
.card-description {
    white-space: pre-line;
}
</style>