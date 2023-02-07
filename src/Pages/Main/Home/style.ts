import styled from "styled-components";

export const HomeDiv= styled.div `
   height:450px;
   width:100%;
   h2{
    display: block;
    margin:40px auto 20px ;
    font-size:35px;
    font-weight:500;
    width: 250px;
    height: 40px;
    //margin: 20px 0;
   }
   .active {
    color:#31c27c !important;
   }
   ul{
       height: 50px;
       display: flex;
       justify-content: center;
       align-items: center;
       li{
           padding: 0 25px;
           display: inline-block;
           font-size: 15px;
           cursor:pointer;
           &:hover{
               color:#31c27c;
           }
       }
   }
   >.ant-carousel {
       height: 340px;
       width: 100%;
       >.slick-slider{
           width: 100%;
           height:100%;
           >.slick-list{
            width: 100%;
           height:100%;
           >.slick-track{
            width: 100%;
           height:100%;
           >div{
               >div{
                   display: flex !important;
               }
             
           }

           }

           }
       }
   }
   .ant-carousel .slick-list .slick-slide >div>div {
       display: flex !important;
       justify-content: center;
       align-items: center;
       >div{
           margin: 10px 20px 0;
       }
   }


   }
   .ant-carousel .slick-dots-bottom{
       bottom: 0px;
   }
   .ant-carousel .slick-dots li {
    background-color: rgb(165,165,165) ;
    display: inline-block;
    height: 11px;
    width: 11px;
    border-radius: 50%;
    .slick-active{
        background: red !important;
    }

       
   }

`

export const  CutDiv  = styled.div`
    position: relative;
    .imgI{
        overflow: hidden;
        img{
            transition: transform .75s;
            &:hover {
                transform: scale(1.1);
                
            }
        }


    }
   .play{
    background-image: url("./img/play.png");
    display: inline-block;
    width: 70px;
    height: 70px;
    img{
        position: absolute;
        left: 32%;
        top: 28%;
        cursor: pointer;
        opacity:0;
       // transform: scale(.7) translateZ(0);
        transition-property: opacity,transform;
        transition-duration: .5s;
        &:hover {
            opacity:1;
        }
        
    }
       
   }


` 

export const  Contentdiv = styled.div `
       position: relative;
       height: 500px;
       width: 100%;
       background-image:url('./img/beijin.jpg');
       h2{
    display: block;
    margin:40px auto 20px ;
    font-size:35px;
    font-weight:500;
    width: 250px;
    height: 40px;
    //margin: 20px 0;
   }
`