// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
// import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// Create a new Vue instance and mount it to the #app div in index.html
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChessPawn, faChessBishop, faChessRook, faChessKnight, faChessQueen, faChessKing, faCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faChessBishop, faChessPawn, faChessRook, faChessKing, faChessKnight, faChessQueen, faCircle);

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
