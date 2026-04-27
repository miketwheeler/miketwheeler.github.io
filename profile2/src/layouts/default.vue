<template>
  <v-main>
    <AppBar />
    <v-container fluid max-width="1400" class="pa-0">
      <router-view />
    </v-container>
  </v-main>

  <AppFooter />
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify';

const theme = useTheme()
</script>
