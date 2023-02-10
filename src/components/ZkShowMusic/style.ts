import styled  from "styled-components";

export const ShowMusicDiv= styled.div`
 height: 86px;
 width: 280px;
 margin-left:30px;
 display: flex;
 align-items: center;
 position: relative;
 //justify-content: space-evenly;
.left{
    overflow: hidden;
    height:86px;
    width:86px;
    cursor: pointer;
    .play{
        z-index:99;
        height: 45px;
        width: 45px;
        position: absolute;
        left: 20px;
        top:20px;
        opacity: 0;
        transition-property: opacity,transform;
        transition-duration: .5s;
        &:hover {
            opacity: 1;
        }
    }
    img{
        height:86px;
        width:86px;
        transition: transform .75s;
        &:hover {
                transform: scale(1.1);
                
            }
    }
}
.right{
    margin-left:20px;
    .nickname{
        font-size: 14px;
    }
    .author{
        color: #999;
        font-size:12px;
    }
}
.time{
    color: #999;
    font-size:15px;
    position: absolute;
    right: 0;
    bottom: 0;
    line-height: 86px;


}


`