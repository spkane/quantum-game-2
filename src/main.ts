import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'
import '@/config/firebase'
import { i18n } from './i18n'

createApp(App)
  .use(router)
  // FIXME: vue3 support soon: https://github.com/MatteoGabriele/vue-gtag/issues/168#issuecomment-684498923
  // .use(VueGtag, {
  //   config: { id: 'UA-56225776-1' },
  // })
  .use(i18n)
  .use(store)
  .mount('#app')
