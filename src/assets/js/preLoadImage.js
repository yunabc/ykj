export const preLoadImage = (imgArr, cb) => {
  const promiseArr = [];
  if(!imgArr||imgArr.length==0){
    return
  }
  imgArr.forEach((src, index) => {
    const img = new Image();
    const promise = new Promise((resolve, reject) => {
      img.onload = () => {
        resolve(index);
      };
      img.onerror = (err) => {
        reject(err);
      };
    });
    promiseArr.push(promise);
    img.src = src;
  });

  Promise.all(promiseArr).then(res => {
    console.log(res);
    cb && cb();
  }).catch(err => {
    console.log(err);
    // cb && cb();
  });
};
