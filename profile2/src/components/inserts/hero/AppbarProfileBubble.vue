<template>
    <div class="profile-bubble">
        <div class="bubble-bg">
            <div class="hero-image">
                <v-img src="/profile/portraitRMBG.png" :width="profileBubbleSize" :height="profileBubbleSize" cover />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const profileBubbleSize = 50;
</script>

<style lang="scss" scoped>
.profile-bubble {
    position: fixed;
    right: 6px;
    z-index: 1000 !important;
}

.bubble-bg {
    width: 62px;
    height: 62px;
    border-radius: 999px;
    background: rgb(var(--v-theme-background));
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-image {
    position: absolute;
    bottom: -68px;
    border-radius: 999px;
    overflow: hidden;
    z-index: 2;
    border: 6px solid rgb(var(--v-theme-surface));
}
</style>
