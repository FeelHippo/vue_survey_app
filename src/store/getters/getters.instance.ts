import type { Store } from 'pinia'
import type { QuestionInterface } from '@/entity/answer.types'
import type { SurveyGetters } from './getters.types'
import { Question } from '@/entity/answer.instance'
import type { SurveyState } from '../store.types'

export const getters: SurveyGetters = {
  getAllAnswers(this: Store<'survey', SurveyState>, state: SurveyState): QuestionInterface[] {
    return state.answers.map((answer) => new Question(answer))
  },
}
