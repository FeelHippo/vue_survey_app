import type { AnswerData } from '@/entity/answer.types'
import type { Store } from 'pinia'

export interface SurveyRootState {
  version: number
}

export interface SurveyState extends SurveyRootState {
  questions: AnswerData[]
  answers: AnswerData[]
  dateFrom: Date | string
  dateTo: Date | string
}

export type SurveyStore = Store<'survey', SurveyState>
