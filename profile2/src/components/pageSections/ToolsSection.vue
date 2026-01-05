<template>
    <v-container id="tools" minWidth="100%">
        <div class="mb-6 mt-8 mx-4" style="font-size: 2.8rem; opacity: 0.6;">Tools</div>
        <v-card :color="cardBackground" elevation="0">
            <v-card-text class="d-flex flex-column">
                <v-row>
                    <v-col cols="12">
                        <v-card elevation="0" variant="text">
                            <v-card-title class="align-center w-100 text-center">Top Languages &
                                Libraries</v-card-title>
                            <v-card-text color="surface-variant-alt" min-height="12px" class="pa-4">
                                <div class="d-flex flex-wrap align-center justify-center">
                                    <a v-for="lang in langsList" :key="lang.key" :href="lang.link" target="_blank"
                                        rel="noreferrer">
                                        <img style="width: 60px; margin: auto 5px;" :src="lang.searchIcon"
                                            :alt="lang.altName" class="ma-4" />
                                    </a>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>

                <v-divider class="mt-4 mb-8 mx-auto" width="75%" />

                <v-row>
                    <v-col cols="12">
                        <v-card elevation="0" variant="text">
                            <v-card-title class="align-center w-100 text-center">Tools</v-card-title>
                            <v-card-text color="surface-variant-alt" min-height="12px" class="pa-4">
                                <div class="d-flex flex-wrap align-center justify-center">
                                    <!-- for each language and library, icon and link -->
                                    <a v-for="tool in toolsList" :key="tool.key" :href="tool.link" target="_blank"
                                        rel="noreferrer">
                                        <img style="width: 60px; margin: auto 5px;" :src="tool.searchIcon"
                                            :alt="tool.altName" class="ma-4" />
                                    </a>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>


<script lang="ts" setup>
import { toolsList, langsList } from '@/data/data';
import { cardBackground } from '@/globals/globals';


</script>


<style scoped></style>