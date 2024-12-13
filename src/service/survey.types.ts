import type { AnswerData } from '@/entity/answer.types'
import type { SurveyService } from './survey.service'

export interface SurveyServiceTypes {
  getAllAnswers(): AnswerData[]
  postAllAnswers(answers: AnswerData[]): void
  createAnswers(answers: AnswerData[]): void
}

// register all services here
export interface SurveyProvider {
  survey: SurveyService
}
