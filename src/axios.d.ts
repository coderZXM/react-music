
import * as axios from 'axios'
/**解决axios默认字段报错问题 */
 
declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>
  }
}
