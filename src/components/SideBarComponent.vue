<template>
  <v-navigation-drawer>
    <v-list-item title="Survey Application" subtitle="Dashboard"></v-list-item>
    <v-divider></v-divider>
    <v-list-item
      v-for="(item,i) in menu"
      :value="item" :key="i"
      :title="item.title"
      link @click="$router.push({ path: item.href })"
    >
      <template #prepend>
        <v-icon v-if="item.icon" :icon="item.icon"></v-icon>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </v-navigation-drawer>
</template>

<script lang="ts">
  export default {
    name: 'SideBar',
    data() {
      return {
        menu: [
          {
            href: '/',
            title: 'Dashboard',
            icon: 'mdi mdi-home',
          },
          {
            href: '/view-stats',
            title: 'Stats',
            icon: 'mdi mdi-list-status',
          },
          {
            href: '/view-stats/agree-survey',
            title: 'Agree or Else Survey',
          },
          {
            href: '/view-stats/best-survey',
            title: 'Best of Five Survey',
          },
          {
            href: '/view-stats/open-survey',
            title: 'Open Ended Survey',
          },
        ],
      }
    },
  }
</script>
