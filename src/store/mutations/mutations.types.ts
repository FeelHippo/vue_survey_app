import type { _SubscriptionCallbackMutationBase, Store } from 'pinia'
import type { SurveyState } from '../store.types'
import type { QuestionInterface } from '@/entity/answer.types'

export type SurveyMutationBase =
  | Omit<_SubscriptionCallbackMutationBase, 'type'>
  | Omit<_SubscriptionCallbackMutationBase, 'storeid'>
  | {
      fetchSurveyAnswers(this: Store<'survey', SurveyState>, state: SurveyState, payload: QuestionInterface[]): void
      createAnswer(this: Store<'survey', SurveyState>, state: SurveyState, payload: QuestionInterface): void
    }
