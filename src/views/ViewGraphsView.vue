<template>
  <v-container fill-height justify-center align-center :class="path === '/view-stats' && 'hero'">
    <v-col style="height: 100vh;">
      <v-row style="height: 25%;">
        <v-col align="center" justify="center">
          <v-sheet>
            <h2>This is the Statistics Section</h2>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row>
        <router-view />
      </v-row>
    </v-col>
  </v-container>
</template>

<script lang="ts" setup>
import { useSurveyStore } from '../store/store.instance';
import { useRoute } from 'vue-router'
import { computed } from 'vue';

const store = useSurveyStore()
store.fetchSurveyAnswers()

const route=useRoute();
const path = computed(() => route.path)

</script>

<style scoped>
.v-sheet {
  background: transparent;
}
.hero {
  background: url('../../public/stats.png');
  background-size: cover;
  height: 100vh;
}
</style>

