/**登录接口 */
import requests from "../request";
interface Login {
    phone :number;
    password:any
}
/**点击登录调用 */
export const  apiLoginInfo = (data:Login)=>{
  return  requests({url:'/login/cellphone',method: 'GET',params:{...data}})

} 