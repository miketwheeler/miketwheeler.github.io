<template>
    <div class="hero-image">
        <v-img src="/profile/portraitRMBG.png" width="340" height="340" cover></v-img>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.hero-image {
    position: absolute;
    bottom: -38px;
    border-radius: 999px;
    overflow: hidden;
    z-index: 2;
    border: 6px solid rgb(var(--v-theme-surface));
}
</style>
