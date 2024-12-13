import type { _GettersTree, Store } from 'pinia'
import type { SurveyState } from '../store.types'
import type { QuestionInterface } from '@/entity/answer.types'

export interface SurveyGetters extends _GettersTree<SurveyState> {
  getAllAnswers(this: Store<'survey', SurveyState>, state: SurveyState): QuestionInterface[]
}
