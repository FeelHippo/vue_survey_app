<template>
  <v-container fill-height justify-center align-center>
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

<script lang="ts">
import { useSurveyStore } from '../store/store.instance';

const store = useSurveyStore()
store.fetchSurveyAnswers()
</script>

