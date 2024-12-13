import { provider } from '../../service/survey.provider';
import type { Pinia } from 'pinia';

export const injectServices = (pinia: Pinia): void => {
  pinia.use(({ store }) => store.survey = provider())
}
