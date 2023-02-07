import requests from "../request";
/**首页数据 */

/**获取推荐歌单 */
export function apiRecommendedplaylist(limit:number){
    return requests({
        url:'/personalized',
        method:'GET',
        params:{
            limit
        }
    })
}