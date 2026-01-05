<template>
    <v-container id="intro" minWidth="100%" class="px-0">
        <div class="mb-6 mt-8 mx-4 px-4" style="font-size: 2.8rem; opacity: 0.6;">Introduction</div>
        <v-card minHeight="900" elevation="4" class="pa-8" :color="cardBackground">
            <v-row>
                <v-col cols="12" md="7" height="400">
                    <v-card elevation="0" :color="cardBackground">
                        <v-card-title>
                            <div class="text-h4 text-primary">
                                Hello! Mike here.
                            </div>
                        </v-card-title>
                        <v-card-subtitle class="mb-6">Welcome to my profile</v-card-subtitle>
                        <v-card-text class="ga-8 d-flex flex-column justify-center align-center text-grey">
                            <div v-for="(paragraph, index) in introParagraphs" :key="index">
                                <div style="font-size: 1.1rem;">
                                    {{ paragraph }}
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="5" class="ga-6 d-flex flex-column px-6">
                    <v-row>
                        <v-col cols="12" sm="6" md="12">
                            <v-card class="py-6 px-8" height="100%" rounded="xl">
                                <v-card-title class="text-primary">Primary Skillset</v-card-title>
                                <v-card-text class="px-6">
                                    <ul>
                                        <li v-for="(item, index) in primarySkillsList" :key="index">{{ item }}</li>
                                    </ul>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="6" md="12">
                            <v-card class="py-6 px-8" height="100%" rounded="xl">
                                <v-card-title class="text-primary">Secondary Skillset</v-card-title>
                                <v-card-text class="px-6">
                                    <ul>
                                        <li v-for="(item, index) in secondarySkillsList" :key="index">{{ item }}</li>
                                    </ul>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <v-divider class="mt-12 mb-6" />

            <v-row>
                <v-col cols="12" md="10" class="mx-auto">
                    <v-card elevation="0" :color="cardBackground">
                        <v-card-title class="text-primary">Goals</v-card-title>
                        <v-card-text class="text-grey" style="font-size: 1.1rem;">
                            <p>
                                My early goal was to become comfortable across the full stack, not just on the frontend.
                                I’ve since built and deployed complete applications using JavaScript-based frontends,
                                Blazor Server with C# and .NET, and multiple backend architectures including FastAPI,
                                Django REST Framework, and Node.js. These projects helped solidify my understanding of
                                application design, data modeling, and real-world deployment.
                            </p>
                            <br />
                            <p>
                                My current focus is on shipping more ambitious, production-ready systems. I’m actively
                                working toward the public launch of Personaprint, a personality-driven matching platform
                                built with Vuetify and TypeScript on the frontend and FastAPI, Pydantic, and MongoDB on
                                the backend. Longer term, I’m looking to contribute as part of a collaborative
                                engineering team, where larger scope, shared problem-solving, and thoughtful design lead
                                to software that’s more impactful than any one person could build alone.
                            </p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>


<script lang="ts" setup>
import { cardBackground } from '@/globals/globals';



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
    "I’m a full-stack developer who enjoys solving complex problems and building systems that make sense. I’m motivated by learning, and I make a point to push my understanding a little further every day.",
    "Through my Management Information Systems degree, I gained experience across software development, project management, databases, and systems design, working on large, real-world projects that had a tangible impact in my community.",
    "Since graduating, I’ve continued to deepen my skills through online coursework and a full-stack bootcamp. I’ve built and deployed production applications for small organizations, developed this site, and I’m currently working on a personality-driven platform focused on creating more meaningful technical connections.",
    "I tend to gravitate toward projects that sit at the intersection of thoughtful design and solid engineering, where technical decisions have a real impact on usability and clarity. I’m particularly interested in building tools that help people understand complex information more easily, whether that’s through clean interfaces, well-structured data, or intelligent automation. My goal is to build software that feels deliberate, reliable, and genuinely useful."
])
</script>


<style scoped></style>