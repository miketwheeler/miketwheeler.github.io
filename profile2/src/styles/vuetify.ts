/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    theme: {
        defaultTheme: 'dark',
        themes: {
            dark: {
                dark: true,
                colors: {
                    background: "rgba(83, 81, 81, 1)",
                    surface: "rgb(26, 26, 26)",

                    primary: "rgb(255, 255, 255)",
                    secondary: "rgb(96, 165, 250)",
                    tertiary: "rgb(34, 211, 238)",

                    success: "rgb(52, 211, 153)",
                    warning: "rgb(251, 191, 36)",
                    error: "rgb(248, 113, 113)",
                    info: "rgb(96, 165, 250)",

                    border: "rgb(47, 47, 47)",

                    textPrimary: "rgb(255, 255, 255)",
                    textSecondary: "rgb(199, 199, 199)",
                    textMuted: "rgb(138, 138, 138)",

                    all: "rgb(250, 142, 96)",
                    friendship: "rgb(52,211,153)",
                    romantic: "rgb(176, 39, 169)",
                    team: "rgb(255, 191, 36)",
                },
            },
        },
    },
})
