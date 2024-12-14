import type { _GettersTree, Store } from 'pinia'
import type { SurveyState } from '../store.types'
import type { AnswerData, PieChartData } from '@/entity/answer.types'

export interface SurveyGetters extends _GettersTree<SurveyState> {
  getAllAnswers(this: Store<'survey', SurveyState>): AnswerData[]
  aggregateBinaryAnswersData(this: Store<'survey', SurveyState>): PieChartData
}
