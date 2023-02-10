import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { apiNewestSong } from '../../services/home'

//定义初始化数据
const initialState = {
    isLogin : false,
    userInfo : {},//用户信息
    originalMusic : {},//原创音乐 playlist.subscribers
}
/**获取用户登录信息 */
export const apiuserInfo = createAsyncThunk('apiuserInfo',()=>{
   return  axios.get('https://mock.apifox.cn/m1/1786488-0-default/login').then(res=>{
        return res.data.data
      })
})
/**获取推荐音乐 */
export const getoriginalMusic =createAsyncThunk('getoriginalMusic',()=>{
    return apiNewestSong(2884035).then(res=>{
        return res.playlist.tracks


    })

})
export  const homeSlice = createSlice({
    name:'home',
    initialState,
    reducers :{
        //rtk可以直接改变state的值，使用Immer库，所以没有真的改变state
        /**退出登录 */
        Logout(state) {
            state.isLogin = false
        },
        /**登录 */
        infoLogin(state){
            state.isLogin = true
            

        }
    },
    extraReducers(builder){
        builder.addCase(apiuserInfo.fulfilled,(state,action)=>{
            state.userInfo = action.payload

        })
        builder.addCase(getoriginalMusic.fulfilled,(state,action)=>{
            state.originalMusic = action.payload
        })

    }


})

//reduder方法的每一个case都会生成一个新的Action
export const {Logout,infoLogin} = homeSlice.actions

export default homeSlice.reducer