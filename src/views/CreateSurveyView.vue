<template>
  <v-container fill-height justify-center align-center>
    <v-col style="height: 100vh;">
      <v-row style="height: 10%;">
        <v-col align="center" justify="center">
          <v-sheet>
            <h2>Create a Questionnaire</h2>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row style="height: 10%;">
        <v-col align="end" justify="center">
          <v-sheet>
            <v-btn
              color="error"
              @click="$router.push({ path: '/' })"
            >
              Cancel
            </v-btn>
          </v-sheet>
        </v-col>
        <v-col align="start" justify="center">
          <v-sheet>
            <v-btn
              color="secondary"
              @click="validateAndSaveAndNavigate"
              :disabled="v.$invalid"
            >
              Create
            </v-btn>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row style="height: 50%;">
        <v-col align="center" justify="center">
          <v-tabs v-model="state.currentTab" style="width: 50%;" class="px-4">
            <v-tab v-for="(tab, i) in state.tabs" :key="tab.id">
              <div class="caption py-1">{{ i + 1 }}/{{ state.tabs.length }}</div>
            </v-tab>
          </v-tabs>
          <v-card-text style="width: 50%;">
            <v-tabs-window v-model="state.currentTab">
              <v-tabs-window-item
                v-for="(question, i) in state.tabs"
                :key="question.id"
              >
                <v-row>
                  <v-col style="width: 50%;">
                    <v-row>
                      <v-col>
                        <v-select
                          v-model="state.tabs[i].type"
                          label="Select Type"
                          :items="selectItems"
                          item-title="title"
                          item-value="value"
                          :class="{ error: v.tabs.$each.$response.$errors[i].type.length }"
                        >
                        </v-select>
                        <div
                          v-for="error in v.tabs.$each.$response.$errors[i].type"
                          :key="error"
                        >
                          {{ error.$message ?? '' }}
                        </div>
                      </v-col>
                    </v-row>
                    <v-row >
                      <v-col>
                        <v-text-field
                          v-model="state.tabs[i].title"
                          label="Title"
                          :class="{ error: v.tabs.$each.$response.$errors[i].title.length }"
                        />
                        <div
                          v-for="error in v.tabs.$each.$response.$errors[i].title"
                          :key="error"
                        >
                          {{ error.$message ?? '' }}
                        </div>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-text-field
                          v-model="state.tabs[i].description"
                          label="Description"
                          :class="{ error: v.tabs.$each.$response.$errors[i].description.length }"
                        />
                        <div
                          v-for="error in v.tabs.$each.$response.$errors[i].description"
                          :key="error"
                        >
                          {{ error.$message ?? '' }}
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </v-col>
      </v-row>
      <v-row style="height: 50%;">
        <v-col align="center" justify="center">
          <v-dialog min-width="400px">
            <template #activator="{ props: activatorProp }" >
              <v-btn
                color="secondary"
                v-bind="activatorProp"
                :disabled="v.$invalid"
              >
                Try it Now!
              </v-btn>
            </template>
            <template #default="{ isActive }">
              <v-slide-group
                selected-class="bg-primary"
                show-arrows
                class="mb-8"
              >
                <v-slide-group-item
                  v-for="tab in state.tabs"
                  :key="tab.id"
                >
                  <v-card
                    height="400"
                    width="100%"
                    class="mx-4"
                    align="center"
                    justify="center"
                  >
                    <v-img
                      color="surface-variant"
                      height="50%"
                      :src="staticAssetMap(tab.type)"
                      cover
                    />
                    <v-card-title>
                      {{ tab.title }}
                    </v-card-title>
                    <v-card-text>
                      {{ tab.description }}
                    </v-card-text>
                    <v-container v-if="tab.type == 'AGREE_OR_ELSE'">
                      <v-row no-gutters justify="space-around">
                        <v-btn class="ma-2 pa-2" color="green">
                          Yes
                        </v-btn>
                        <v-btn class="ma-2 pa-2" color="red">
                          No
                        </v-btn>
                      </v-row>
                    </v-container>
                    <v-container v-else-if="tab.type == 'OUT_OF_FIVE'">
                      <v-row no-gutters justify="space-around">
                        <v-slider
                          v-model="slider"
                          :max="5"
                          :min="1"
                          :step="1"
                          thumb-label
                          :color="sliderColor"
                        ></v-slider>
                      </v-row>
                    </v-container>
                    <v-container v-else-if="tab.type == 'OPEN_ENDED'">
                      <v-row no-gutters justify="space-around">
                        <v-text-field
                          v-model="openAnswer"
                          label="... your answer here"
                        />
                      </v-row>
                    </v-container>
                  </v-card>
                </v-slide-group-item>
              </v-slide-group>
              <v-row>
                <v-col align="center" justify="center">
                  <v-btn
                    color="secondary"
                    text="Close Dialog"
                    @click="isActive.value = false"
                  />
                </v-col>
              </v-row>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { useSurveyStore } from '../store/store.instance';
import { useRouter } from 'vue-router'

import { computed, reactive, ref } from 'vue'
import { uid } from 'uid';
import { helpers, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import type { AnswerData } from '../entity/answer.types';

export default {
  setup() {

    const store = useSurveyStore()
    const router = useRouter()

    const rules = {
        tabs: {
          $each: helpers.forEach(({
            type: { required },
            title: { required },
            description: { required },
          }))
        },
    }
    const state = reactive({
      currentTab: 0,
      tabs: [...Array(3)].map(() => ({
        id: uid(),
        type: '',
        title: '',
        description: '',
      }))
    })

    const v = useVuelidate(rules, state)

    const validateAndSaveAndNavigate = () => {
      if (!v.value.$invalid) {
        store.createQuestions(state.tabs as AnswerData[])
        router.push('/view-stats')
      }
    }

    const assetMap = {
      'AGREE_OR_ELSE': '/first.png',
      'OUT_OF_FIVE': '/second.png',
      'OPEN_ENDED': '/third.png',
    }

    const staticAssetMap = (type: string) => assetMap[type];

    const slider = ref(0)
    const sliderColor = computed(() => ['red', 'orange', 'yellow', 'blue', 'green'][slider.value])
    const openAnswer = ref('')

    return {
      v,
      state,
      selectItems: [
        { title: 'Agree/Disagree', value: 'AGREE_OR_ELSE' },
        { title: 'Survey Scale', value: 'OUT_OF_FIVE' },
        { title: 'Open Answer', value: 'OPEN_ENDED' },
      ],
      validateAndSaveAndNavigate,
      staticAssetMap,
      slider,
      sliderColor,
      openAnswer,
    }
  },
}
</script>

<style>
.v-overlay__scrim {
 opacity: 0.85 !important;
}
</style>
