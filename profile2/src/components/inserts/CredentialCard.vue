<template>
    <v-card v-if="educationCategory === 'accredited'" v-for="(edu, index) in education" :key="`education-card-${index}`"
        rounded="xl" class="pa-4 mb-3" elevation="8">
        <v-card-title>
            <div v-if="edu.source && edu.dateComplete"
                class="d-flex text-subtitle-1 w-100 justify-space-between text-primary text-wrap">
                <div>
                    {{ edu.source }}
                </div>
                <div>
                    {{ edu.dateComplete }}
                </div>
            </div>
            <div class="d-flex text-body-2 w-100 justify-space-between text-wrap">
                <div>
                    {{ edu.what }}
                </div>
                <div>
                    {{ edu.location }}
                </div>
            </div>
        </v-card-title>
        <v-card-text class="text-body-2 text-grey">
            {{ edu.blurb }}
        </v-card-text>
    </v-card>


    <v-card v-else v-for="(edu, index) in education" :key="`extracurricular-card-${index}`" :color="cardBackground"
        rounded="xl" class="pa-4 mb-3">
        <v-card-title>
            <div v-if="edu.source && edu.dateComplete"
                class="d-flex text-subtitle-1 w-100 justify-space-between text-primary text-wrap">
                <div>
                    {{ edu.source }}
                </div>
                <div>
                    {{ edu.dateComplete }}
                </div>
            </div>
            <div class="d-flex text-body-2 w-100 justify-space-between text-wrap">
                <div>
                    {{ edu.what }}
                </div>
                <div>
                    {{ edu.location }}
                </div>
            </div>
        </v-card-title>
        <v-card-text class="text-body-2 text-grey">
            {{ edu.blurb }}
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { degreeCardData, type DegreeCard } from '@/data/data';
import { cardBackground } from '@/globals/globals';

// interface Education {
//     source: string | null;
//     dateComplete: string | null;
//     what: string | null;
//     location: string | null;
//     blurb: string | null;
// }

const props = defineProps({
    educationCategory: {
        type: String as () => 'accredited' | 'extracurricular',
        required: true
    }
})

const education = computed<Array<DegreeCard>>(() => {
    return degreeCardData[props.educationCategory as keyof typeof degreeCardData] as Array<DegreeCard>
})

</script>

<style scoped></style>