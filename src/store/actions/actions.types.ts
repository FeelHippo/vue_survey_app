import type { _ActionsTree, Store } from 'pinia'
import type { AnswerData } from '../../entity/answer.types'
import type { SurveyState } from '../store.types'

export interface SurveyActions extends _ActionsTree {
  fetchSurveyAnswers(this: Store<'survey', SurveyState>): void
  postAllAnswers(this: Store<'survey', SurveyState>): void
  createAnswer(this: Store<'survey', SurveyState>, payload: AnswerData): void
  createQuestion(this: Store<'survey', SurveyState>, payload: AnswerData): void
}
