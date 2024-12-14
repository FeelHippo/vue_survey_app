import { defineStore } from "pinia";
import { getters } from "./getters/getters.instance";
import { actions } from "./actions/actions.instance";

export const useSurveyStore = defineStore(
  'survey',
  {
    state: () => ({
      version: 1,
      questions: [],
      answers: [],
      dateFrom: new Date('2024-01-01'),
      dateTo: new Date(),
    }),
    getters,
    actions,
  },
)
