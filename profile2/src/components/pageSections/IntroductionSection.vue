<template>
    <v-container id="intro" minWidth="100%">
        <div class="mb-6 mt-8 mx-4" style="font-size: 2.8rem; opacity: 0.6;">Introduction</div>
        <v-card minHeight="900" elevation="4" class="pa-8">

            <v-grid>
                <v-row>
                    <v-col cols="12" sm="6" class="ga-6 d-flex flex-column px-6">
                        <v-card color="surface-light" class="py-6 px-8"
                            style="border-radius: 20px; filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));">
                            <v-card-title>Primary Skillset</v-card-title>
                            <v-card-text class="px-6">
                                <ul>
                                    <li v-for="(item, index) in primarySkillsList" :key="index">{{ item }}</li>
                                </ul>
                            </v-card-text>
                        </v-card>
                        <v-card color="surface-light" class="py-6 px-8"
                            style="border-radius: 20px; filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));">
                            <v-card-title>Secondary Skillset</v-card-title>
                            <v-card-text class="px-6">
                                <ul>
                                    <li v-for="(item, index) in secondarySkillsList" :key="index">{{ item }}</li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" sm="6" height="400">
                        <v-card elevation="0">
                            <v-card-subtitle>Welcome to my profile</v-card-subtitle>
                            <v-card-title class="mb-6">
                                <v-text class="text-h4" color="primary">
                                    Hello! Mike Wheeler here!
                                </v-text>
                            </v-card-title>
                            <v-card-text class="ga-8 d-flex flex-column justify-center align-center">
                                <div v-for="(paragraph, index) in introParagraphs" :key="index">
                                    <div class="body2" style="max-width: 100%; font-size: 1.2rem; opacity: 0.6;">
                                        {{ paragraph }}
                                    </div>
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-grid>
        </v-card>
    </v-container>
</template>


<script lang="ts" setup>


const primarySkillsList = ref([
    'Vue.js & Vuetify',
    'FastAPI',
    'Javascript',
    'Typescript',
    'Python',
    'C#, .NET',
    'Blazor Server',
    'HTML & CSS',
    'Git',
    'MS SQL Server',
    'NoSQL',
    'Rest APIs & Web Services',
    'Agile, Scrum & Kanban',
])

const secondarySkillsList = ref([
    'React',
    'Node.js',
    'Express.js',
    'Django',
    'Azure Cloud Services',
    'Remix',
    'ASP.NET Core',
    'Technical Documentation',
    'Project Management & Development',
    'Material UI',
    'MudBlazor (MUI in C#)'
    // '',
    // 'AWS & Azure',
])

const introParagraphs = ref([
    "I code all day every day. Solving problems of all types is what I enjoy doing, it motivates me. I make an effort to learn something new every day.",
    "During the pursuit of my Management Information Systems degree I was exposed to high level project management, programming courses, in-depth databasing and server courses, and participated in many large projects that made a difference in my community.",
    "Since graduating I have continued to take online courses and attended a bootcamp to further my knowledge in web development. I have successfully developed and deployed a website for a small company, created this site, and am currently working on a social site for connecting developers such as myself."
])
</script>


<style scoped></style>