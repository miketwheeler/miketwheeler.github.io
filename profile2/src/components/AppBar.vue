<template>
    <v-card class="mx-auto sticky-appbar">
        <v-app-bar color="surface" elevation-3>
            <v-container fluid max-width="1400" class="d-flex justify-content-center align-center py-0  fill-height">
                <v-app-bar-title>
                    <div class="app-bar-title" style="z-index: 1000000; min-width: fit-content;">
                        Michael <div class="app-bar-title-special-text">Wheeler</div>
                    </div>
                </v-app-bar-title>

                <div class="hero-actions">
                    <v-btn class="hero-btn mr-2" rounded="xl" :density="smAndUp ? 'default' : 'comfortable'"
                        variant="tonal" :icon="!smAndUp" href="https://github.com/miketwheeler" target="_blank"
                        :style="smAndUp ? 'transition-delay: 0.2s;' : 'transition-delay: 0s;'"
                        v-tooltip="'Visit my GitHub'">
                        <v-icon icon="mdi-github" class="hero-btn-icon" />
                        <span class="hero-btn-label">GitHub</span>
                    </v-btn>

                    <v-btn class="hero-btn" rounded="xl" :density="smAndUp ? 'default' : 'comfortable'" variant="tonal"
                        :icon="!smAndUp" :style="smAndUp ? 'transition-delay: 0.2s;' : 'transition-delay: 0s;'"
                        v-tooltip="'Visit my LinkedIn'" href="https://linkedin.com/in/michaeltwheeler" target="_blank">
                        <v-icon icon="mdi-linkedin" class="hero-btn-icon" />
                        <span class="hero-btn-label">LinkedIn</span>
                    </v-btn>
                </div>
            </v-container>

            <v-fade-transition mode="out-in">
                <AppbarProfileBubble v-if="!smAndUp" />
            </v-fade-transition>

        </v-app-bar>
    </v-card>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify';
import AppbarProfileBubble from '@/components/inserts/hero/AppbarProfileBubble.vue';

const { smAndUp } = useDisplay()

</script>

<style lang="scss" scoped>
.sticky-appbar {
    position: sticky;
    top: 0;
    z-index: 1000;
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

.hero-actions {
    display: flex;
    align-items: center;
    padding-right: 0;
}

.hero-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition:
        padding 0.2s ease,
        gap 0.2s ease;
    text-transform: none;
}

.hero-btn-label {
    white-space: nowrap;
    overflow: hidden;
    max-width: 120px;
    opacity: 1;
    transition:
        max-width 0.2s ease,
        opacity 0.15s ease;
}

.hero-btn-icon {
    padding: 0;
}

/* Small screens */
@media (max-width: 599px) {
    .hero-actions {
        padding-right: 60px;
    }

    .hero-btn {
        padding-left: 0;
        padding-right: 0;
        gap: 0;
    }

    .hero-btn-label {
        max-width: 0;
        opacity: 0;
    }
}
</style>