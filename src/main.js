import store, { Vue } from '@/store';
import App from './App';
import router from './router';

import { addFastclick } from 'js/util';
import directives from '@/directives';
import animate from 'animate.css/animate.min.css';

Vue.use(directives);

Vue.use(animate);

addFastclick();
Vue.use(require('vue-wechat-title'));

const instanceVue = new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});

export default instanceVue;
