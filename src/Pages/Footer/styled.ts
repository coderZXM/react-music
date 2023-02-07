import styled from "styled-components";



export const Footerdiv = styled.div`
    background-color: #333;
    clear: both;
    color: #999;
    height:675px;
    width: 100%;
    .Fmain{
        max-width: 1200px;
        margin: 0 auto;
        position: relative;
        width: 1200px;
        height:100%;
        .FmainT{
            height: 70%;
            width: 100%;
            //background: red;
            display: flex;
            flex-wrap: wrap;
            
            div {
                //flex:2;
                width: 26%;
                height: 50%;
                padding: 0 88px 0  0;
            }
            .dowland{
                h1{
                    font-size: 15px;
                    font-weight: 400;
                    padding: 80px 0 30px;
                }
                ul{
                    display: flex;
                    li {
                        float: left;
                        text-align: center;
                        position: relative;
                        cursor: pointer;
                        &:hover {
                            color:#31c27c; ;
                        }
                        .pc{
                            &:hover {
                                background-position: -2px -49px;
                            }
                        }
                        .mac{
                            &:hover {
                                background-position: -92px  46px !important;
                            }
                        }
                        .and{
                            &:hover {
                                background-position: -185px  46px !important;

                            }
                        }
                        .ipone{
                            &:hover {
                                background-position: -272px 46px !important;

                            }
                        }

                        }
                    }
                }
                i{
                    display: block;
                    margin: 0 29px 12px;
                    width: 48px;
                    height: 48px;
                    background: url(${require("@/asstes/img/header/footer.e3352fc2.png")});
                    //background-position: -92px -49px;
                }
            }
            .product{
                h1{
                    font-size: 15px;
                    font-weight: 400;
                    padding: 80px 0 30px;
                }
                ul{
                    display: flex;
                    li {
                        float: left;
                        text-align: center;
                        position: relative;
                        cursor: pointer;
                        &:hover {
                            color:#31c27c; ;
                        }
                        .pc{
                            &:hover {
                                background-position: -370px -49px !important;
                            }
                        }
                        .mac{
                            &:hover {
                                background-position: -463px  46px !important;
                            }
                        }
                        .and{
                            &:hover {
                                background-position: -563px  46px !important;

                            }
                        }
                        .ipone{
                            &:hover {
                                background-position: -650px 46px !important;

                            }
                        }

                        }
                    }
                }
                i{
                    display: block;
                    margin: 0 29px 12px;
                    width: 48px;
                    height: 48px;
                    background: url(${require("@/asstes/img/header/footer.e3352fc2.png")});
                    //background-position: -92px -49px;
                }

            }
            .cooperation{
                font-size:14px;
                cursor: pointer;
                h1{
                    font-size: 15px;
                    font-weight: 400;
                    padding: 80px 0 30px;
                }
                ul{
                    display: flex;
                    flex-wrap:wrap;
                    li{
                        width:33%;
                        //display: inline-block;
                        line-height: 1.5;
                        margin-bottom:10px;
                        &:hover {
                            color:#31c27c; ;
                        }
                    }

                }
               
                
            }
            .open {
                font-size:14px;
                cursor: pointer;
                h1{
                    font-size: 15px;
                    font-weight: 400;
                    padding: 80px 0 30px;
                }
                ul{
                    display: flex;
                    flex-wrap:wrap;
                    li{
                        width:50%;
                        //display: inline-block;
                        line-height: 1.5;
                        margin-bottom:10px;
                        &:hover {
                            color:#31c27c; ;
                        }
                    }

                }
            }
            .official{
                font-size:14px;
                cursor: pointer;
                h1{
                    font-size: 15px;
                    font-weight: 400;
                    padding: 80px 0 30px;
                }
                li{
                        width:50%;
                        //display: inline-block;
                        line-height: 1.5;
                        margin-bottom:10px;
                        list-style: none;
                        
                        &:hover {
                            color:#31c27c; ;
                        }
                    }
      

            }

        }
        .FmianB{
            height: 30%;
            width: 100%;
            //background: yellow;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            p{
                font-size: 12px;
                color: #999;
                margin: 10px 0;
                span{
                    margin: 0 5px;
                    cursor: pointer;
                       
                    &:hover {
                            color:#31c27c; ;
                        }
                }
            }

        }
    }

`