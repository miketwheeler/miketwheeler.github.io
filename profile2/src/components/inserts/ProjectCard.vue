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
                    <LogoBar v-if="project.logoList" :logoList="project.logoList" />
                </div>
            </div>
            <div class="d-flex flex-column w-100 card-description text-grey">
                <v-img v-if="project.gifId && project.featured"
                    :src="`https://media.giphy.com/media/${project.gifId}/giphy.gif`" width="100%" />
                <v-card rounded="xl" class="mb-6 mt-2 justify-center align-center d-flex" color="background"
                    min-height="80">
                    <iframe v-if="project.youtubeLink" :src="project.youtubeLink" loading="lazy" width="100%"
                        height="400" frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" title="YouTube video player" allowfullscreen>
                    </iframe>
                    <v-card-title v-else class="text-center">
                        Video Coming Soon...
                    </v-card-title>
                </v-card>
                {{ project.cardDescription }}
            </div>
            <v-row class="mt-4">
                <v-col cols="12">
                    <v-btn v-if="project.siteLink" class="mr-2" :href="project.siteLink" target="_blank" color="primary"
                        rounded="xl" style="text-transform: none;" prependIcon="mdi-open-in-new"
                        v-tooltip="'Open Website in new tab'">
                        App Demo
                    </v-btn>
                    <v-btn v-if="project.projectLink" :href="project.projectLink" target="_blank" color="primary"
                        rounded="xl" style="text-transform: none;" prependIcon="mdi-github"
                        v-tooltip="'See the code on GitHub'" variant="tonal">
                        Code Repo
                    </v-btn>
                    <v-chip v-if="project.private" rounded="xl" color="background" variant="flat"
                        v-tooltip="'Sorry, this project is not public'" style="text-transform: none;" size="large"
                        prepend-icon="mdi-lock">
                        Private Code
                    </v-chip>
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
                        <v-col cols="12" class="d-flex justify-end mt-auto">
                            <div class="d-flex w-100">
                                <v-btn v-if="project.siteLink" class="mr-2" :href="project.siteLink" target="_blank"
                                    rounded="xl" color="primary" style="text-transform: none;"
                                    prepend-icon="mdi-open-in-new" v-tooltip="'Open Website in new tab'">
                                    App Demo
                                </v-btn>
                                <v-btn v-if="project.projectLink" :href="project.projectLink" target="_blank"
                                    rounded="xl" color="primary" v-tooltip="'See it on GitHub'"
                                    style="text-transform: none;" density="comfortable" icon="mdi-github">
                                </v-btn>
                                <v-chip v-if="project.private" rounded="xl" color="background" variant="flat"
                                    v-tooltip="'Sorry, this project is not public'" style="text-transform: none;"
                                    size="large">
                                    Private
                                </v-chip>
                                <v-spacer />
                                <LogoBar v-if="project.logoList" :logoList="project.logoList"
                                    class="align-self-center" />
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" sm="5">
                    <v-img v-if="project.gifId && !project.featured" rounded="xl"
                        :src="`https://media.giphy.com/media/${project.gifId}/giphy.gif`" />

                    <v-card rounded="xl" class="mb-6">
                        <iframe v-if="project.youtubeLink" :src="project.youtubeLink" loading="lazy" width="100%"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;">
                        </iframe>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>

    <v-divider class="my-4" width="75%" />
</template>

<script lang="ts" setup>
import LogoBar from './LogoBar.vue';
import { type Logo, type Project } from '@/data/data';

const props = defineProps({
    project: {
        type: Object as () => Project,
        required: true
    }
})
</script>

<style scoped>
.card-description {
    white-space: pre-line;
}
</style>