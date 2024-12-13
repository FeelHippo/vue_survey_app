import type { _ActionsTree, _StoreOnActionListenerContext, Store } from 'pinia'
import type { AnswerData } from '../../entity/answer.types'
import type { SurveyState, SurveyStore } from '../store.types'

export type Context = _StoreOnActionListenerContext<SurveyStore, 'survey', unknown>

export interface SurveyActions extends _ActionsTree {
  fetchSurveyAnswers(this: Store<'survey', SurveyState>, context: Context): void
  postAllAnswers(this: Store<'survey', SurveyState>, context: Context): void
  createAnswer(this: Store<'survey', SurveyState>, context: Context, payload: AnswerData): void
  createQuestion(this: Store<'survey', SurveyState>, context: Context, payload: AnswerData): void,
}
