import axios from './base'

//加载当天比赛数据
// export const getEvaluationList = (token,pageNo,pageSize) => {
//   return axios.post(`/msconsumer/api/smart/getEvaluationList?token=${token}`,{
//    "pageNo":pageNo,
//    "pageSize":pageSize
//   })
// }


// // 云保单保额保费分布
// export const getAmountPremium =(token) => {
//     return axios.post('/msconsumer/api/cloud/getAmountPremiumDistribution')
// }

export const getVerCode = (opt) => {
  return axios.post('/msconsumer/api/v1/sms/getVercode',opt)
}

export const registeAccount = (opt) => {
  return axios.post('/msconsumer/api/agent/register',opt)
}

export const loginAccount = (opt) => {
  return axios.post('/msconsumer/api/agent/login',opt)
}

export const loginSMS = (opt) => {
  return axios.post('/msconsumer/api/agent/login/smsLogin',opt,{ 
    headers: { 
      "bdb-wx": "bdt",
      "bdb-openid":opt.openid
    } 
  })
}

export const resetPass = (opt) => {
  return axios.post('/msconsumer/api/v1/changepwd',opt)
}

export const replacePass = (token,opt) => {
  return axios.post(`/msconsumer/api/v1/replacepwd?token=${token}`,opt)
}

// 上传用户头像
export const setUserIcon = (token,opts) => {
  return axios.post(`/msconsumer/api/v1/mycard/savePicture?token=${token}`, opts, { headers: { "Content-Type": "multipart/form-data" } })
}
// 修改用户昵称
export const changeNickname = (token,opts) => {
  return axios.post(`/msconsumer/api/agent/alter/alterNickname?token=${token}`, opts, { headers: { "Content-Type": "multipart/form-data" } })
}

// 修改用户签名
export const changeSignature = (token,opts) => {
  return axios.post(`/msconsumer/api/agent/alter/alterDescribe?token=${token}`, opts, { headers: { "Content-Type": "multipart/form-data" } })
}


// 上传二维码及名片头像
export const uploadImage = (token,opts) => {
  return axios.post(`/msconsumer/api/user/card/uploadImage?token=${token}`, opts, { headers: { "Content-Type": "multipart/form-data" } })
}

export const saveCard = (token,opt) => {
  return axios.post(`/msconsumer/api/user/card/save?token=${token}`,opt)
}

export const getCardInfo = (token) => {
  return axios.get(`/msconsumer/api/user/card/mine?token=`+token)
}

export const requestUserInfo = (token) => {
  return axios.post(`/msconsumer/api/user/home?token=`+token)
}
//微信公众号上绑定
export const smsLogin = (token,opts) => {
  return axios.post(`/msconsumer/api/agent/login/smsLogin?token=`+token,opts, { headers: { "bdb-wx": opts.bdb_wx,"bdb-openid":opts.bdb_openid } })
}
//微信公众号解绑
export const removeBind = (token) => {
  return axios.post(`/msconsumer/api/agent/removeBind?token=`+token)
}
//获取职业认证资格信息
export const certInfo = (token) => {
  return axios.post(`/msconsumer/api/agent/certInfo?token=`+token)
}

export const getCardInfoByCode = (code) => {
  return axios.get(`/msconsumer/api/user/card/`+code)
}

export const logout = (token) => {
  return axios.post(`/msconsumer/api/agent/logout?token=`+token)
}

export const settleClaimApi = () => {
  return axios.post(`/msconsumer/api/v1/myclaim/list`)
}

export const frientRecommendApi = (token) => {
  return axios.post(`/msconsumer/api/poster/recommendNew?token=`+token)
}



export const frientList= (token,opt) => {
  return axios.post(`/msconsumer/api/assistant/listNew?token=`+token,opt)
}


export const queryCommission = (token,opt) => {
  return axios.post(`/msconsumer/api/hx/salary/getHxSalaryInfoByMonth?token=`+token,opt)
}

// 积分接口 （元宝）
export const myPoint = (token) => {
  return axios.post(`/msconsumer/api/agent/point/home?token=`+token)
}