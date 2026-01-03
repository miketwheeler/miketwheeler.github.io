<template>
    <v-container id="credentials">
        <div class="mb-6 mt-8 mx-4" style="font-size: 2.8rem; opacity: 0.6;">Credentials</div>
        <v-row>
            <v-col>
                <div class="text-h6 text-primary ml-2 mb-2">Accredited</div>
                <CredentialCard :educationCategory="'accredited'" />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <div class="text-h6 text-primary ml-2 mb-2">Extracurricular</div>
                <CredentialCard :educationCategory="'extracurricular'" />
            </v-col>
        </v-row>
    </v-container>
</template>


<script lang="ts" setup>
import CredentialCard from '../inserts/CredentialCard.vue';

</script>


<style scoped></style>