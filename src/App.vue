<template>
  <v-app>
    <v-layout>
      <navigation-drawer />
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import NavigationDrawer from './components/SideBarComponent.vue'
  export default {
  components: { NavigationDrawer },
    name: 'App',
  }
</script>
