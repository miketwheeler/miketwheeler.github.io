<template>
    <v-chip color="transparent">
        <div v-if="logoList.length > 0" class="d-flex flex-wrap align-center justify-center">
            <img v-for="logo in logoList" :key="`logo-${logo}`" :src="logo" alt="Logo" class="my-4 mx-2" width="20"
                height="20" />
        </div>
    </v-chip>
</template>


<script lang="ts" setup>

const props = defineProps({
    logoList: {
        type: Array<string>,
        required: true
    }
});
</script>


<style scoped></style>
