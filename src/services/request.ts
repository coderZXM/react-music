/**对于axios二次封装 */
import axios from "axios";

const requests = axios.create({
	baseURL:'http://codercba.com:9002/',
	//timeout:5000
})
/**请求拦截器 */
requests.interceptors.request.use((config)=>{
	//config是配置对象，
	return config
})

/**响应拦截器 */

requests.interceptors.response.use((res)=>{
   return res.data
},(err)=>{
	return Promise.reject(new Error(err));
})

export default requests
