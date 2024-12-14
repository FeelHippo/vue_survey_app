<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { useSurveyStore } from '../store/store.instance';

const store = useSurveyStore()
store.fetchSurveyAnswers()
</script>

