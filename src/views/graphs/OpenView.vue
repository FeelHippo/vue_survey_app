<template>
  <vue-word-cloud
    style="
      height: 480px;
      width: 50%;
      margin: 0 auto;
    "
    :words="data"
    :color="options"
  />
</template>

<script lang="ts">
import VueWordCloud from 'vuewordcloud';
import { useSurveyStore } from '../../store/store.instance';
import { colorPalette } from '../../utils/colors';

const store = useSurveyStore()

export default {
  components: {
    [VueWordCloud.name]: VueWordCloud,
  },
  setup() {
    const data = store.aggregateOpenAnswersData
    const options =
      ([, weight]) => weight > 20 ? colorPalette.primary : colorPalette.secondary
    return {
      data,
      options,
    }
  },
}
</script>
