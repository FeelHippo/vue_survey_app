import type { AnswerData } from '@/entity/answer.types'
import { type SurveyActions } from './actions.types'
import type { Store } from 'pinia'
import type { SurveyState } from '../store.types'

export const actions: SurveyActions = {
  /// fetches all available answers from the API
  /// TODO: limit range by date
  fetchSurveyAnswers(this: Store<'survey', SurveyState>): void {
    const response: AnswerData[] = this.survey.getAllAnswers()
    this.answers = response.map(({ id, type, title, description, user, answer, mark, completedAt }) => ({
      id,
      type,
      title,
      description,
      user,
      answer,
      mark,
      completedAt,
    }))
  },
  /// posts all newly created answers to the API
  postAllAnswers(this: Store<'survey', SurveyState>): void {
    this.survey.postAllAnswers(this.answers)
  },
  /// adds a newly created answer to the store
  createAnswer(this: Store<'survey', SurveyState>, payload: AnswerData): void {
    this.answers.push({
      ...payload,
    })
  },
  /// add a new question to the store
  createQuestions(
    this: Store<'survey', SurveyState>,
    payload: AnswerData[],
  ): void {
    payload.forEach((question) => {
      const { id, type, title, description } = question
      this.questions.push({
        id,
        type,
        title,
        ...(
          description && { description }
        ),
      })
    })
  },
}
