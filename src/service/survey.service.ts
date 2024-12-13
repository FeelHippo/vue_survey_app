import type { AnswerData } from "@/entity/answer.types";
import type { SurveyServiceTypes } from "./survey.types";
import { Answer } from "@/entity/answer.instance";

export class SurveyService implements SurveyServiceTypes {
  // if this were an API client, the constructor would receive
  // an instance of e.g. Axios but NOT UI libraries such as Redux or Thunk
  constructor(private readonly data: AnswerData[]) {}
  /// fetches all available answers from API
  /// TODO: limit range by date
  getAllAnswers(): AnswerData[] {
    // GET http call here
    return this.data; // generate list of QuestionData for plot
  }
  postAllAnswers(answers: AnswerData[]): void {
    // POST http call here
    this.data.concat(answers)
  }
  createAnswers(answers: AnswerData[]): void {
    // POST http call here
    answers.forEach((answer) => {
      const parsedAnswer = new Answer(answer)
      if (!parsedAnswer.validate()) {
        throw new Error('Answer does not validate')
      }
      console.log('Answer:', answer);
    })
  }
}
