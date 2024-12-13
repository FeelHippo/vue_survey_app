import { SurveyService } from "./survey.service"
import type { SurveyProvider } from "./survey.types"

import data from '../assets/mock/data.json'

export const provider = (): SurveyProvider => ({
  survey: new SurveyService(data),
})

