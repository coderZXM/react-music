import styled from "styled-components";
 
 export const NavUl = styled.ul `
     height: 50px;
     display: flex;
     justify-content: center;
     align-items: center;
    li{
        list-style: none;
        display: inline-block;
        font-size: 15px;
        cursor: pointer;
        padding: 0 30px;
        &:hover{
            color:#31c27c;
        }
    }
    .active {
        color:#31c27c;
       
    }
 
 
 
 `