<template>
  <Pie :data="data" :options="options" />
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import { useSurveyStore } from '../../store/store.instance';

const store = useSurveyStore()

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  components: { Pie },
  setup() {
    const data = store.aggregateBinaryAnswersData
    const options = {
      responsive: true,
      maintainAspectRatio: false
    }
    return {
      data,
      options,
    }
  },
}
</script>
