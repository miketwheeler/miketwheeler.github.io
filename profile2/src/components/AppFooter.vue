<template>
  <v-footer app height="40">
    <v-container fluid max-width="1400" class="d-flex justify-space-between align-center py-0 pr-0 fill-height">
      <div>
        <a v-for="item in items" :key="item.title" class="d-inline-block mx-2 social-link" :href="item.href"
          rel="noopener noreferrer" target="_blank" :title="item.title">
          <v-icon :icon="item.icon" :size="item.icon === '$vuetify' ? 24 : 16" />
        </a>
      </div>

      <div class="text-caption text-disabled" style="right: 16px;">
        &copy; {{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block">Michael Wheeler</span>
        —
        <a class="text-decoration-none on-surface" href="https://vuetifyjs.com/about/licensing/"
          rel="noopener noreferrer" target="_blank">
          Built in Vuetify - MIT License
        </a>
        <a :key="vuetifyIconLinkData.title" class="d-inline-block mx-2 social-link" :href="vuetifyIconLinkData.href"
          rel="noopener noreferrer" target="_blank" :title="vuetifyIconLinkData.title">
          <v-icon :icon="vuetifyIconLinkData.icon" :size="vuetifyIconLinkData.icon === '$vuetify' ? 24 : 16" />
        </a>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
const items = [
  {
    title: 'GitHub',
    icon: 'mdi-github',
    href: 'https://github.com/michaelwheeler',
  },
  {
    title: 'LinkedIn',
    icon: 'mdi-linkedin',
    href: 'https://linkedin.com/in/michaeltwheeler',
  },
]

const vuetifyIconLinkData = {
  title: 'Vuetify Documentation',
  icon: `$vuetify`,
  href: 'https://vuetifyjs.com/',
};
</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(25, 118, 210, 1)
</style>
