import type { SurveyMutationBase } from './mutations.types'
import type { SurveyState } from '../store.types'
import type { QuestionInterface } from '../../entity/answer.types'

export const mutations: SurveyMutationBase = {
  fetchSurveyAnswers(state: SurveyState, payload: QuestionInterface[]): void {
    payload.map((answer) => state.answers.push(answer))
  },
  createAnswer(state: SurveyState, payload: QuestionInterface): void {
    state.questions.push(payload)
  },
}
