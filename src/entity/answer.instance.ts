import {
  QUESTION_ANSWER_MAX_LENGTH,
  QUESTION_MAX_TITLE_LENGTH,
  Type,
  type AnswerData,
  type AnswerInterface,
} from './answer.types'

export class Answer implements AnswerInterface {
  // define question
  readonly id: number
  readonly type: Type
  readonly title: string
  readonly description?: string
  // define answer
  readonly user?: string;
  readonly answer?: string
  readonly mark?: number
  readonly completedAt?: Date | string

  constructor(data: AnswerData) {
    this.id = data.id
    this.type = data.type
    this.title = data.title

    if (data.description) {
      this.description = data.description
    }
    // define question

    if (data.user) {
      this.user = data.user
    }

    if (data.answer) {
      this.answer = data.answer
    }

    if (data.mark) {
      this.mark = data.mark
    }

    if (data.completedAt) {
      this.completedAt = data.completedAt
    }
  }

  validate(): boolean {
    if (this.title.length > QUESTION_MAX_TITLE_LENGTH) return false
    if (this.answer && this.answer.length > QUESTION_ANSWER_MAX_LENGTH) return false
    return true
  }
}
