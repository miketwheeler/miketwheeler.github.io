<template>
    <v-card class="mx-auto sticky-appbar">
        <v-app-bar color="surface" elevation-3>
            <v-container fluid max-width="1400" class="d-flex justify-space-between align-center py-0 pr-0 fill-height">
                <v-app-bar-title>
                    <div class="app-bar-title">
                        Michael <div class="app-bar-title-special-text">Wheeler</div>
                    </div>
                </v-app-bar-title>

                <!-- <template v-slot:append> -->
                <v-btn prepend-icon="mdi-github" style="text-transform: none;" class="mr-2">GitHub</v-btn>
                <v-btn prepend-icon="mdi-linkedin" style="text-transform: none;">LinkedIn</v-btn>
                <!-- </template> -->
            </v-container>
        </v-app-bar>
    </v-card>
</template>

<script lang="ts" setup>
// import { github, linkedin } from '@/public/icons'

</script>

<style scoped>
.sticky-appbar {
    position: sticky;
    top: 0;
    /* match your app-bar */
    z-index: 10;
}

.app-bar-title {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: fit-content;
    gap: 0.75rem;
    font-size: 1.8rem;
}

.app-bar-title-special-text {
    opacity: 65%;
}
</style>