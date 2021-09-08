import Longpress from './longpress';

export default {
  install(Vue, options) {
    const directives = {
      Longpress
    };
    Object.keys(directives).forEach(key => {
      directives[key].$options = options;
      Vue.directive(key, directives[key]);
    });
  },
};