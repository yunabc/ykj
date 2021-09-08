import { Vue } from '@/store';
import App from './App';
import router from './router';
import store from '@/store';
import { addFastclick } from 'js/util';
import directives from '@/directives';
import animate from "animate.css"


  


Vue.use(directives);

Vue.use(animate);


addFastclick();
Vue.use(require('vue-wechat-title'));

let instanceVue = new Vue({
  'el': '#app',
  store,
  router,
  'components': { App },
  'template': '<App/>'
});

export default instanceVue;
