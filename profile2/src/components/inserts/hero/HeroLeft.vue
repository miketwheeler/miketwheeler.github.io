<template>
    <div class="hero-left" style="z-index: 1000000;">
        <v-card class="pa-6" color="transparent">
            <v-card-title color="primary" class="text-h4 adtl-card-styles">
                Full Stack Developer
            </v-card-title>
            <v-card-subtitle class="text-h5">
                Jack of All Trades
            </v-card-subtitle>
            <v-card-text class="text-h5">
                <p>Hero Left</p>
            </v-card-text>
        </v-card>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.hero-left {
    height: 100%;
    display: flex;
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;
    z-index: 10;
    justify-content: end;
    width: 100%;
    max-width: fit-content;
    /* vertical centering */
}

.adtl-card-styles {
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
}
</style>
