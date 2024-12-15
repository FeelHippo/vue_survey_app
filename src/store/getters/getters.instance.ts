import type { Store } from 'pinia'
import { type AnswerData, type PieChartData, type PolarChartData } from '@/entity/answer.types'
import type { SurveyGetters } from './getters.types'
import { Answer } from '@/entity/answer.instance'
import type { SurveyState } from '../store.types'
import { colorPalette } from '@/utils/colors'
import { rangeAnswersDataSet } from '@/utils/data.aggregate'

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
        (answer) => answer.type == 'AGREE_OR_ELSE'
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
          backgroundColor: [colorPalette.secondary, colorPalette.error],
          data,
        }
      ],
    }
  },
  // format data for OUT_OF_FIVE,
  aggregateRangeAnswersData(this: Store<'survey', SurveyState>): PolarChartData {
    const today = new Date()
    const beginningOfMonth = new Date(new Date().getFullYear(), 10, 1)
    const beginningOfYear = new Date(new Date().getFullYear(), 0, 1)
    const [pastMonthDataSet, pastYearDataSet] = [[beginningOfMonth, today], [beginningOfYear, today]].map(([from, to]) => {
      return this
      .answers
      .filter(
        (answer) =>
          (new Date(answer.completedAt!) >= from && new Date(answer.completedAt!) <= to)
          && answer.type == 'OUT_OF_FIVE'
      ).map((answer) => answer.mark) as number[]
    })
    const pastMonthData = rangeAnswersDataSet(pastMonthDataSet)
    const pastYearData = rangeAnswersDataSet(pastYearDataSet)
    return {
      labels: ['Strongly Disagree', 'Somewhat Disagree', 'Neutral', 'Somewhat Agree', 'Strongly Disagree'],
      datasets: [
        {
          label: `Current Dataset`,
          backgroundColor: colorPalette.primary,
          pointBackgroundColor: colorPalette.gray,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: colorPalette.gray,
          data: pastMonthData,
        },
        {
          label: `Past Dataset`,
          backgroundColor: colorPalette.error,
          pointBackgroundColor: colorPalette.secondary,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: colorPalette.secondary,
          data: pastYearData,
        },
      ],
    }
  },
  // format data for OPEN_ENDED
  aggregateOpenAnswersData(this: Store<'survey', SurveyState>): (string | number)[][] {
    const dataSet =
      this
      .answers
      .filter(
        (answer) => answer.type == 'OPEN_ENDED'
      ).map((answer) => answer.answer)
    return [...Array(10)]
      .map(
        () =>
          [
            dataSet[~~(dataSet.length * Math.random())],
            Math.random() * (36 - 8) + 8
          ]
        ) as (string | number)[][]
  }
}
