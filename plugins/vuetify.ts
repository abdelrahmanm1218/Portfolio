import { defineNuxtPlugin } from '#app'
import { createVuetify } from 'vuetify'
import {
  VApp,
  VContainer,
  VRow,
  VCol,
  VCard,
  VCardText,
  VCardTitle,
  VCardSubtitle,
  VBtn,
  VIcon,
  VChip,
  VChipGroup,
  VTimeline,
  VTimelineItem,
  VAvatar,
  VFooter,
  VDivider,
  VImg
} from 'vuetify/components'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components: {
      VApp,
      VContainer,
      VRow,
      VCol,
      VCard,
      VCardText,
      VCardTitle,
      VCardSubtitle,
      VBtn,
      VIcon,
      VChip,
      VChipGroup,
      VTimeline,
      VTimelineItem,
      VAvatar,
      VFooter,
      VDivider,
      VImg
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            // Brand colors
            primary: '#123524',
            brand: '#123524',
            
            // Neutral colors
            background: '#f8f9fa',
            surface: '#ffffff',
            'surface-variant': '#f1f3f4',
            
            // Text colors
            'on-background': '#1a1a1a',
            'on-surface': '#1a1a1a',
            'on-primary': '#ffffff',
            'on-brand': '#ffffff',
            
            // Additional semantic colors
            secondary: '#6c757d',
            accent: '#C9A66B',
            info: '#17a2b8',
            warning: '#ffc107',
            error: '#dc3545',
            success: '#28a745',
          }
        }
      }
    }
  })
  nuxtApp.vueApp.use(vuetify)
})