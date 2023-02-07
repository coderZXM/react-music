import styled from "styled-components";

export const  LoginDiv = styled.div`
 height: 100%;
 width: 100%;
 display:flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
.Title {
    font-size: 20px;
    line-height: 28px;
    color: #000;
    margin: 16px 0 6px;
}
.username{
    //height: 30px;
    margin: 25px 0px;
    input{
        height:40px;
        width: 250px;
    }
}
.password{
    input{
        height:30px;
        width: 210px;
    }

}
.login{
    height:40px;
    width: 250px;
    background: rgb(68,153,255);
    span{
        color: white;
    }
    

}


`