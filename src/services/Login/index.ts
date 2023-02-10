/**登录接口 */
import requests from "../request";
interface Login {
    phone :number;
    captcha:number
}
/**点击登录调用 */
export const  apiLoginInfo = (data:Login)=>{
  return  requests({url:'/login/cellphone',method: 'GET',params:{...data}})

} 
/**获取验证码登录 */
export const apiVerification = (phone:number)=>{
   return requests({
     url:'/captcha/sent',
     method:'GET',
     params:{phone}

   })
}