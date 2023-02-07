import {createSlice} from '@reduxjs/toolkit'

//定义初始化数据
const initialState = {
    isLogin : false
}

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
    }

})

//reduder方法的每一个case都会生成一个新的Action
export const {Logout,infoLogin} = homeSlice.actions

export default homeSlice.reducer