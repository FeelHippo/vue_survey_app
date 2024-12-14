import type { Store } from 'pinia'
import type { AnswerData, PieChartData } from '@/entity/answer.types'
import type { SurveyGetters } from './getters.types'
import { Answer } from '@/entity/answer.instance'
import type { SurveyState } from '../store.types'

export const getters: SurveyGetters = {
  getAllAnswers(this: Store<'survey', SurveyState>): AnswerData[] {
    return this.answers.map((answer) => new Answer(answer))
  },
  // format data for AGREE_OR_ELSE,
  aggregateBinaryAnswersData(this: Store<'survey', SurveyState>): PieChartData {
    const dataSet =
      this
      .answers
      .filter(
        (answer) =>
          new Date(answer.completedAt!) >= this.dateFrom && new Date(answer.completedAt!) <= this.dateTo
      )
    const count = dataSet.reduce((acc, curr) => {
        if (curr.mark) {
          acc['yes'] = acc['yes'] + 1
        } else {
          acc['no'] = acc['no'] + 1
        }
        return acc
      }, { yes: 0, no: 0 } as { yes: number, no: number })
    const data = [
      (count.yes * 100) / dataSet.length,
      (count.no * 100) / dataSet.length,
    ]
    return {
      labels: ['Yes', 'No'],
      datasets: [
        {
          backgroundColor: ['#41B883', '#E46651'],
          data,
        }
      ],
    }
  }
  // format data for OUT_OF_FIVE,
  // format data for OPEN_ENDED
}
