import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md3 } from 'vuetify/blueprints'
import 'vuetify/styles'
import { colorPalette } from '@/utils/colors'

export default createVuetify({
  components,
  directives,
  blueprint: md3,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colorPalette.primary,
          secondary: colorPalette.secondary,
          error: colorPalette.error,
        }
      }
    }
  }
})
