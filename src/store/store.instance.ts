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
    }),
    getters,
    actions,
  },
)
