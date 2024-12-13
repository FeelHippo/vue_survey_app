import 'pinia';

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}

declare module 'pinia' {
  export interface PiniaCustomProperties {
    survey: SurveyProvider
  }
}
