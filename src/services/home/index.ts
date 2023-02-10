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
/**获取原创歌曲排行榜 */
export function apiNewestSong (id:number){
    return requests({
        url:'/playlist/detail',
        method:'GET',
        params:{
            id,
        }
    })
}