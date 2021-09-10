// export default {
// data(){
//   return {
//     intersectionObserver:null,
//     animateClass:''
//   }
// },
// mounted(){
//   this.initObserver(this.observerCb)
// },
// methods:{
//   initObserver(observerCb){
//     this.intersectionObserver = new IntersectionObserver(
//       observerCb,
//       {
//         threshold:[1]
//       }
//     )
//   },
//   observerBind(els,animateClass){
//     this.intersectionObserver.observe(els)
//     this.animateClass = animateClass
//   },

// },
// beforeRouteLeave (to, from, next) {
//   // 导航离开该组件的对应路由时调用
//   this.intersectionObserver.disconnect();
//   next()
// }
// }

function observerCb(entries) {
  // 如果不可见，就返回
  // console.log(entries);
  entries.forEach((item) => {
    const target = item.target;

    const animateClass = target.getAttribute('data-animate');
    const animateArr = animateClass.split('-');
    console.log(item.intersectionRatio)
    if(target.classList.contains('animate__animated')){
      return
    }
    if (item.intersectionRatio > 0.7) {
      target.classList.add('animate__animated', `animate__${animateArr[1]}`);
    } else if (item.intersectionRatio == 0) {
      // target.classList.remove('animate__animated', `animate__${animateArr[1]}`);
    }
  });
  console.log(entries);
}

const intersectionObserver = new IntersectionObserver(
  observerCb,
  {
    threshold: [0,0.7,1]
  }
);
export default {
  removeObserver() {
    intersectionObserver.disconnect();
  },
  bindObserver(selector) {
    const elsNew = Array.from(document.querySelectorAll(selector) || []);
    elsNew.forEach(item => {
      item.setAttribute('data-animate', selector);
      intersectionObserver.observe(item);
    });
  }
};
