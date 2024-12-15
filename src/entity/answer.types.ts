
// https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
// Application Business Rules. e.g data to/from API's:
export interface AnswerData {
  // define question
  readonly id: string
  readonly type: Type | string
  readonly title: string
  readonly description?: string
  // define answer
  readonly user?: string;
  readonly answer?: string
  readonly mark?: number | boolean
  readonly completedAt?: Date | string
}

export interface PieChartDataDataset {
  backgroundColor: string[]
  data: number[]
}

export interface PieChartData {
  labels: string[]
  datasets: PieChartDataDataset[]
}

export interface PolarChartDataDataset {
  label: string
  backgroundColor: string
  pointBackgroundColor: string
  pointBorderColor: string
  pointHoverBackgroundColor: string
  pointHoverBorderColor: string
  data: number[]
}

export interface PolarChartData {
  labels: string[]
  datasets: PolarChartDataDataset[]
}

// Business Logic Entities:
// actual Entities, "derived" from data we receive from API
export interface AnswerInterface extends AnswerData {
  validate(): boolean
}

export enum Type {
  AGREE_OR_ELSE,
  OUT_OF_FIVE,
  OPEN_ENDED,
}

export const QUESTION_MAX_TITLE_LENGTH = 100
export const QUESTION_ANSWER_MAX_LENGTH = 200
