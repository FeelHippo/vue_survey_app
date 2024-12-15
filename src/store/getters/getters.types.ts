import type { _GettersTree, Store } from 'pinia'
import type { SurveyState } from '../store.types'
import type { AnswerData, PieChartData, PolarChartData } from '@/entity/answer.types'

export interface SurveyGetters extends _GettersTree<SurveyState> {
  getAllAnswers(this: Store<'survey', SurveyState>): AnswerData[]
  aggregateBinaryAnswersData(this: Store<'survey', SurveyState>): PieChartData
  aggregateRangeAnswersData(this: Store<'survey', SurveyState>): PolarChartData
  aggregateOpenAnswersData(this: Store<'survey', SurveyState>): (string | number)[][]
}
