<template>
    <v-container id="intro" minWidth="100%" class="px-0">
        <div class="mb-6 mt-8 mx-4 px-4" style="font-size: 2.8rem; opacity: 0.6;">Introduction</div>
        <v-card minHeight="900" elevation="4" class="pa-8" :color="cardBackground">

            <v-row>
                <v-col cols="12" md="7" height="400">
                    <v-card elevation="0" :color="cardBackground">
                        <v-card-subtitle>Welcome to my profile</v-card-subtitle>
                        <v-card-title class="mb-6">
                            <div class="text-h4 text-primary">
                                Hi! Mike here.
                            </div>
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
                <v-col cols="12" md="6">
                    <v-card elevation="0" :color="cardBackground">
                        <v-card-title class="text-primary">Goals</v-card-title>
                        <v-card-text>
                            <p>
                                Being fairly well versed in javascript-based frontends, I continue to work toward
                                learning the entire stack. I've implemented backends in node.js and a couple instances
                                using both the django REST framework and C#/.NET.
                            </p>
                            <br />
                            <p>
                                Working on a larger app for the complexity and purpose challenges. From my time with
                                working on projects and apps, I've realized it's much easier to dream up a great app
                                than having the amount of time and knowledge to accomplish this all alone. I would like
                                to be a part of a team to develop apps of a wider scope.
                            </p>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6">
                    <v-card elevation="0" :color="cardBackground">
                        <v-card-title class="text-primary">Recent Work</v-card-title>
                        <v-card-text>
                            <p>
                                H&W Stair & Rail is a small metalworking company I had the pleasure of building the site
                                for. A few constraints they exhibited were to implement this within their smaller
                                budget. I worked through and delivered a solution that would have near-zero overhead;
                                for a small and local company it will suit their needs for some time to come. Visitors
                                are able to read up on the business' services and contact them for quotes on any job
                                inquiries they had. It also allows them to showcase projects they have completed.
                            </p>
                            <br />
                            <p>
                                This site is currently live and being maintained on an as needed basis (Please see below
                                for links).
                            </p>
                            <br />
                            <p>
                                This profile is built in React using Javascript, HTML, CSS, and Material UI. The
                                majority of the components are custom built and some are predefined with a lot of tweeks
                                to fit my needs. There are 3 APIs that I have integrated into the app for functionality,
                                this includes a serverless messaging solution.
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
    "I code all day every day. Solving problems of all types is what I enjoy doing, it motivates me. I make an effort to learn something new every day.",
    "During the pursuit of my Management Information Systems degree I was exposed to high level project management, programming courses, in-depth databasing and server courses, and participated in many large projects that made a difference in my community.",
    "Since graduating I have continued to take online courses and attended a bootcamp to further my knowledge in web development. I have successfully developed and deployed a website for a small company, created this site, and am currently working on a social site for connecting developers such as myself."
])
</script>


<style scoped>
.cutout-card {
    background-color: var(--page-bg);
    /* Match the background below the surface */
    box-shadow:
        inset 4px 4px 8px rgba(0, 0, 0, 0.3),
        /* Dark inner shadow (top-left) */
        inset -4px -4px 8px rgba(46, 46, 46, 0.5);
    /* Light inner highlight (bottom-right) */
    border: none;
}
</style>