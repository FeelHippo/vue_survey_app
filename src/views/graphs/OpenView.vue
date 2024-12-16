<template>
  <v-container fill-height justify-center align-center>
    <v-col align="center" justify="center">
      <v-timeline>
        <v-timeline-item v-for="(answer, i) in data" :key="i" size="large">
          <template #icon>
            <v-avatar color="secondary" class="text-h5">{{ answer.user[0]! }}</v-avatar>
          </template>
          <v-card class="elevation-2">
            <v-card-title class="text-h5">
              {{ answer.title }}
            </v-card-title>
            <v-card-text>{{ answer.answer }}</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { useSurveyStore } from '../../store/store.instance';

const store = useSurveyStore()

export default {
  setup() {
    const data = store.aggregateOpenAnswersData
    return {
      data,
    }
  },
}
</script>
