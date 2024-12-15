import type { SurveyMutationBase } from './mutations.types'
import type { SurveyState } from '../store.types'
import type { AnswerData } from '../../entity/answer.types'

export const mutations: SurveyMutationBase = {
  fetchSurveyAnswers(state: SurveyState, payload: AnswerData[]): void {
    payload.map((answer) => state.answers.push(answer))
  },
  createAnswer(state: SurveyState, payload: AnswerData): void {
    state.questions.push(payload)
  },
}
