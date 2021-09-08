import axios from 'axios'
import instanceVue from '@/main'
import {appLogin} from '@/assets/js/appback'
import store from '@/store'
// import Promise from 'bluebird'

// window.Promise = Promise
// var domain = {
//   prefixA:'/',
//   // prefixB:'www.bbb.com'
// }process.env.NODE_ENV == 'development')

var env = process.env.NODE_ENV ;
// console.log(axios)
var href = location.href;
var time,timerArr={},count=0;
// var baseURL = !(/bdt\./.test(href)) ? 'http://api.test.hrhbbx.com/' : 'https://bdt.hrhbbx.com/';
// if (env == 'development'){
//   baseURL='';
// }
var instanceA = axios.create({
 /* baseURL: baseURL,*/
  // timeout: 5000,
  // headers: {'X-Custom-Header': 'foobar'}
});

let needOpenid = true
// 添加请求拦截器
instanceA.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // console.log('xxxx--yyy');
  // console.log(JSON.stringify(config))
  // 依据参数中loading字段 添加loading
  // console.log(typeof config.data.loading=='undefined',config.data.loading)
  if(hasData(config)){
    // post请求 有data的情况
    if(config.data.loading||typeof config.data.loading=='undefined'){
      // data参数 中 没有loading字段或loading 为 true的情况
      countLoading(config)
    }
    if(config.data.needOpenid||typeof config.data.needOpenid=='undefined'){
      // data参数 中 没有needOpenid字段或needOpenid 为 true的情况
      config.headers['bdb-openid'] = window.localStorage.getItem('bdb_openid')
      config.headers['bdb-wx'] = "bdt"
    }
  }else{
    // 没有 data的情况
    countLoading(config)
    config.headers['bdb-openid'] = window.localStorage.getItem('bdb_openid')
    config.headers['bdb-wx'] = "bdt"
  }
  config.headers['hyb-token'] = store.state.token
  
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instanceA.interceptors.response.use(function (response) {
  // console.log('我是分割线');
  // console.log(instanceVue.$route);
  response.config.headers['request-count']>=0 && clear(response.config.headers['request-count'])
  // store.dispatch('setLoading',false)
// console.log(response.config)
  //请求成功后返回response.data错误1在页面单独处理
  if(response.config.url.indexOf('/msconsumer/api/activity/detail') > -1){
    response.data.curLine = response.headers.date
  }
  return response;


}, function (error) {
  // console.log(JSON.stringify(error))
  var index = error.config.headers['request-count']
  // 对响应错误做点什么
  //这里拦截401
  clear(index)
  if(error.response.status==401){
    if(window.locJs){
      appLogin();
    }else{
      if(instanceVue.$route.path != '/account/login'){
        instanceVue.$router.replace({
          path:'/account/login',
          query:{
              redirectPath:instanceVue.$route.path
              }
          })
      }
      
    }
    
  }
  return Promise.reject(error);
});
function countLoading(config){
  var timer = setTimeout(()=>{
    if(instanceVue.$route.path.indexOf('poster') > -1){
      store.dispatch('setLoading',false)
    }else{
      store.dispatch('setLoading',true)
    }
   
  },30)
  timerArr['count'+count] = timer
  config.headers['request-count'] = count
  count++
}
function hasData(config){
  return typeof config.data!=='undefined'
}
function clear(index){
  var key = 'count' + index
  clearTimeout(timerArr[key])
  delete timerArr[key]
  if(!checkRemain()){
    store.dispatch('setLoading',false)
  }
}

function checkRemain(){
  let values = Object.values(timerArr)
  if(values.length > 0){
    
    return true
  }

  return false
}

export default instanceA
