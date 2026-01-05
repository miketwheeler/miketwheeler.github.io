<template>
    <v-chip :key="logoList.length" color="transparent">
        <div v-if="logoList.length > 0" class="d-flex flex-wrap align-center justify-center">
            <img v-for="logo in logoList" :key="logo.key" :src="logo.searchIcon" alt="Logo" class="my-4 mx-2" width="20"
                height="20" v-tooltip="logo.altName" />
        </div>
    </v-chip>
</template>


<script lang="ts" setup>
import { type Logo } from '@/data/data';


const props = defineProps({
    logoList: {
        type: Object as () => Logo[],
        required: true
    }
});
</script>


<style scoped></style>
