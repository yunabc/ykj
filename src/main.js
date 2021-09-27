import store, { Vue } from '@/store';
import App from './App';
import router from './router';

import { addFastclick } from 'js/util';
import directives from '@/directives';
import animate from 'animate.css/animate.min.css';
// import { Toast, Picker, DatetimePicker } from 'mint-ui'

import { DatetimePicker } from 'mint-ui';
import MintUI from 'mint-ui'
import '@/assets/css/mint/style.css'
Vue.use(MintUI)

// Vue.component(DatetimePicker.name, DatetimePicker);
// Vue.component(Toast.name, Toast)
// Vue.component(Picker.name, Picker)

Vue.component(DatetimePicker.name, DatetimePicker);
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
