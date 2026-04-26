<template>
    <v-container id="hobbies" class="pa-0 pa-sm-4">
        <div class="mb-6 mt-8 mx-4" style="font-size: 2.8rem; opacity: 0.6;">Hobbies & Interests</div>
        <v-card  variant="text"rounded="xl">
            <v-row>
                <v-col cols="12">
                    <section v-for="hobby in hobbies" :key="`hobby-${hobby.id}`"
                        :id="`hobby-card-${hobby.id}`" data-anchor>
                        <ProjectCard :project="hobby" :showCode="false" :showToolset="false" />
                    </section>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>


<script lang="ts" setup>
import { computed, onMounted, nextTick, watch } from 'vue';
import { useRoute } from 'vue-router';
import ProjectCard from '@/components/inserts/ProjectCard.vue';
import { hobbyCardList } from '@/data/data';


const route = useRoute()
const hobbies = computed(() => hobbyCardList)


const scrollToHash = async () => {
    if (!route.hash) return

    await nextTick() // wait for v-for DOM to exist

    const el = document.querySelector(route.hash)
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
    }
}

onMounted(scrollToHash)

watch(
    () => route.hash,
    scrollToHash
)
</script>


<style scoped></style>