<template>
  <v-app>
    <v-layout fill-height row>
      <side-bar-component />
      <v-app-bar title="Application bar"></v-app-bar>
      <v-main v-main class="d-flex align-center justify-center" style="min-height: 300px;min-width: 600px">
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import SideBarComponent from './components/SideBarComponent.vue'
  export default {
  components: { SideBarComponent },
    name: 'App',
  }
</script>
