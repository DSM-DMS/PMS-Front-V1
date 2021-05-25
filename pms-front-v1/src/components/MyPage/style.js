 import styled from "styled-components";
export const MainWrapper = styled.div`
    width: 100%;
    height: 1130px;
    background-color: #f6f6f6;
`;
export const MyPageWrapper = styled.div`
    position: relative;
    top: -7%;
    margin: 0 auto;
    width: 78%;
    height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 5px 5px #00000029;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    .myPageItem{
        width: 85%;
        border-top: 1px solid #c8c8c8;
        height: 80%;
        display: flex;
        .itemBox{
            width:50%;
            height: 97%;
            box-sizing:border-box;
            padding-top:3%;
            .childrenInformation{
                width:100%;
                height:98%;
                border-top: 1px solid #c8c8c8;
                background-color:#f6f6f6;
                display: flex;
                justify-content: center;
                align-items:center;
                flex-direction: column;
            }
        }
    }
`;
export const ChangePassword = styled.div`
    width: 100%;
    height: 60%;
    .changePasswordTitle{
        display: flex;
        font-size: 13px;
        color: #9e9e9e;
        h4{
            font-size: 18px;
            color: black;
        }
    }
    .changePasswordItem{
        width:90%;
        height: 100%;
        .changepassworditeminput{
            width:100%;
            height: 20%;
            border-bottom: 1px solid #c8c8c8;
            display: flex;
            align-items: flex-end;
        }
        .errormessage{
            color: red;
            font-size: 13px;
            display: none;
        }
        input{
            width:95%;
            height: 25%;
            outline: none;
            border: none;
            color: #9e9e9e;
            font-size:16px;
            margin: 15px 0;
        }
        button{
            width: 25%;
            height: 12%;
            background-color:#c8c8c8;
            color: white;
            border: none;
            border-radius: 2px;
            margin-top: 20px;
            font-size: 16px;
        }
    }
`
export const MyChildren = styled.div`
    background-color: white;
    width: 95%;
    height:10%;
    border: 1px solid #c8c8c8;
    display: flex;
    align-items:center;
    box-sizing: border-box;
    padding: 0 2%;
    .childrenprofile{
        width: 9%;
        height: 80%;
    }
    .children-Status{
        margin-left: 2%;
        width: 45%;
        height: 80%;
        font-size: 14px;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        justify-content:center;
    }
    h5{
        font-size: 15px;
    }
`;
export const ChildrenStatus = styled.div`
    width: 95%;
    height: 83%;
    margin-top: 2%;
    display: flex;
    .childrenStatus{
        width: 55%;
        height:100%;
        box-sizing:border-box;
        color: #9e9e9e;
        display: flex;
        flex-direction:column;
        justify-content: space-between;
    }
    .childrenStatus.right{
        display: block;
        width: 43%;
        margin-left: 2%;
        background-color: white;
        font-size: 12px;
        border:1px solid #c8c8c8;
        padding: 1%;
        .Title{
            border-bottom: 1px solid #c8c8c8;
            font-size: 16px;
        }
    }
`;
export const Activity = styled.div`
        color:#d37c7c;
        border: 1px solid #de7c7c;
        width: 98%;
        height: 15%;
        margin-top: 5%;
        display: flex;
        box-sizing: border-box;
        padding: 2% 0%;
        .point{
            width: 25%;
            height:100%;
            box-sizing:border-box;
            padding: 5% 3%;
            font-size: 25px;
            text-align:right;
        }
        .TiTle{
            width: 75%;
            height:100%;
            box-sizing:border-box;
            padding: 3%;
            font-size: 15px;
            h3{
                font-weight:550;
                font-size: 17px;
            }
        }
`;
export const ChildrenStatusItem = styled.div`
    width: 100%;
    height: 23%;
    background-color: white;
    border: 1px solid #c8c8c8;
    box-sizing: border-box;
    padding: 2%;
    .itemTitle{
        color: #9e9e9e;
        font-size: 15px;
        border-bottom:1px solid #c8c8c8;
    }
    .childrenStatusItemMain{
        width: 98%;
        height: 60%;
        margin-top: 3%;
        display: flex;
        .checkstatus{
            color: #9e9e9e;
            width: 60%;
            height: 100%;
            font-size: 14px;
            text-align:left;
            padding-left: 7%;
            line-height:2;
            b{
                font-weight: 700;
                color: black;
            }
        }
        .rightimg{
            width: 40%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .score{
                color: white;
                text-align:center;
                width: 36%;
                height: 70%;
                border-radius: 50%;
                box-sizing: border-box;
                padding-top: 5%;
                font-size: 18px;
            }
            .score.plus{
                background-color: #4775b2;
            }
            .score.minus{
                background-color:#d37c7c;
            }
        }
    }
`;