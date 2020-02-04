require('intersection-observer');
import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos';
import { MdButton, MdField, MdLayout, MdCard, MdAvatar, MdProgress, MdDialog } from 'vue-material/dist/components'
import 'aos/dist/aos.css'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'


Vue.use(MdButton)
Vue.use(MdField)
Vue.use(MdLayout)
Vue.use(MdCard)
Vue.use(MdAvatar)
Vue.use(MdProgress)
Vue.use(MdDialog)

export const eventBus = new Vue();

new Vue({
  created(){
    AOS.init({
      anchorPlacement: 'bottom-bottom',
      delay: 200,
      offset: 200
    })
  },
  render: h => h(App),
}).$mount('#app')


