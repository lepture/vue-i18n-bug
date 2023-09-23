import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      home: 'Home',
    },
    ja: {
      home: 'ホーム',
    }
  },
})

app.use(i18n)
app.mount('#app')
