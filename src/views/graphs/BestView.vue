<template>
  <PolarArea :data="data" :options="options" />
</template>

<script lang="ts">
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js'
import { PolarArea } from 'vue-chartjs'
import { useSurveyStore } from '../../store/store.instance';

const store = useSurveyStore()

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

export default {
  components: { PolarArea } as { PolarArea: typeof PolarArea },
  setup() {
    const data = store.aggregateRangeAnswersData
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
