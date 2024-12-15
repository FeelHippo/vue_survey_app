<template>
  <v-app>
    <navigation-drawer />
    <v-main
      style="height: 100vh; width: 100vw;"
    >
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import NavigationDrawer from './components/SideBarComponent.vue'
  export default {
  components: { NavigationDrawer },
    name: 'App',
  }
</script>
