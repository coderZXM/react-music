import styled from 'styled-components'



export const HeaderDIv = styled.div`
 height: 140px;
 width : 100%;
 background-color:#fff;
 position: relative;
 display:flex;
 justify-content: center;
 .mian{
     height:120px;
     width: 1200px ;
     .mianTop{
         height:75%;
         width: 100%;
         border-bottom: 1px solid #f2f2f2;

        // background: red;
         display: flex;
         .logo{
             flex:1.5;
             height: 100%;
             display: flex;
             justify-content:flex-start;
             align-items:center ;
            //background: url(${require("@/asstes/img/header/logo.png")});
            //background-size: contain, cover;   
         }
         .changetype{
             flex:4;
             display: flex;
             li{
                 flex:1;
                 height: 100%;
                 //background: green;
                 font-size: 18px;
                 padding: 0px 5px;
                 display: flex;
                 justify-content: center;
                 align-items:center ;
                 cursor:pointer;
                 position: relative;
                 
                 &:hover {
                   color: #31c27c;
                  // background-color: #31c27c;
                 }
                 img {
                    position: absolute;
                    height: 14px;
                    top: 20px;
                    right:0px
                 }
             }
             .active{
                color: #fff !important;
                background-color: #31c27c;

             }
         }
         .search{
             flex: 2;
             display: flex;
             margin-top:13px;
             justify-content: center;
             align-items: center;
             span{
                 height: 40px;
             }
             button{
                 height: 40px;
                 line-height:40px ;
                 
                 
             }
         }
         .login{
             flex:2;
             display: flex;
             justify-content: space-around;
             align-items: center;

             img {
                 height:40px;
                 width: 40px;
                 cursor: pointer;
             }

             .login1{
                font-size: 16px;
                cursor: pointer;
             }
             .loginmore{
                 height: 350px;
                 width: 300px;
                 background: #fff;
                 z-index:999;
                 display: flex;
                 flex-direction: column;
                 position: absolute;
                 top: 100px;
                 .Button{
                font-size: 13px;
                display: block;
                line-height: 38px;
                padding:  0px 30px;
                text-align: center;
                height: 35px;
                white-space: nowrap;
                border: 1px solid #c9c9c9;
                border-radius: 3px;
                background: #31c27c;
                cursor: pointer;
                color: #fff;

                     }
                 .loginmoreT{
                    cursor: pointer;
                     display: flex;
                     margin: 10px 0px 0 20px;
                     span {
                         margin: 20px;
                         &:hover {
                             color: #31c27c;
                         }
                     }

                 }
                 .loginmoreB{
                     cursor: pointer;
                     display: flex;
                     flex-direction: column;
                     font-size:16px;
                     div {
                         flex:1;
                         margin-left:20px;
                         &:hover {
                             color: #31c27c;
                         }

                     }
                 }
             }
             .login2{
                font-size: 13px;
                display: block;
                line-height: 38px;
                padding: 0 30px 0 35px;
                text-align: center;
                white-space: nowrap;
                border: 1px solid #c9c9c9;
                border-radius: 3px;
                background: #31c27c;
                cursor: pointer;
                color: #fff;
             }
             .login3{
                font-size: 13px;
                display: block;
                line-height: 38px;
                padding: 0 20px 0 20px;
                text-align: center;
                white-space: nowrap;
                border: 1px solid #c9c9c9;
                border-radius: 3px;
                cursor: pointer;
                &:hover{
                    color: #fff;
                    background: #31c27c;
                }
             }
            }
             
         }
     }
     .mianBottom{
         height: calc(100% - 65px);
         width: 100%;
         .navigationbar{
             display: flex;
             justify-content:center;
             align-items:center;
             height: 100%;
             width: 100%;
             li{
                font-size: 15px;
                padding: 0 30px;
                cursor: pointer;
             }
             .active{
                 color: #31c27c;

             }

         }
     }
 }



`