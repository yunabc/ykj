const u = navigator.userAgent;
export const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
export const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
export const isWX = u.match(/MicroMessenger/i) == 'micromessenger' && ua.match(/WindowsWechat/i) != 'windowswechat' && ua.match(/WechatDevTools/i) != 'wechatdevtools';
export const addFastclick = () => {
  var str = navigator.userAgent.toLowerCase();
  var ver = str.match(/cpu iphone os (.*?) like mac os/);
  if (!ver) { // 非IOS系统
    // 引入fastclick文件
    includeFastclickJsFile();
  } else {
    // console.log("你当前的Ios系统版本为："+ver[1].replace(/_/g,"."));
    if (parseInt(ver[1]) >= 11) {
      // 不必引入fastclick文件
    } else {
      // 引入fastclick文件
      includeFastclickJsFile();
    }
  }

  function includeFastclickJsFile() {
    var FastClick = require('fastclick');
    // document.ready=function(){
    FastClick.attach(document.body);
    // }
  }
};

export const getQuery = (key, string) => {
  const reg = new RegExp(`${key}=([^&^#]+)`);
  const arr = reg.exec(string);
  return arr && arr[1];
};

export const throttle = (fn, delay) => {
  let valid = true;
  return function() {
    if (!valid) {
      // 休息时间 暂不接客
      return false;
    }
    // 工作时间，执行函数并且在间隔期内把状态位设为无效
    valid = false;
    setTimeout(() => {
      fn();
      valid = true;
    }, delay);
  };
};
export const isM = () => {
  const innerWidth = window.innerWidth;
  return innerWidth < 1000;
};
