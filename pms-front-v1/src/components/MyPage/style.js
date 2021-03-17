 import styled from "styled-components";

const MainWrapper = styled.div`
    width: 100%;
    height: 1130px;
    background-color: #f6f6f6;
`;
const MyPageWrapper = styled.div`
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
`;
const MyPageItem = styled.div`
    width: 85%;
    border-top: 1px solid #c8c8c8;
    height: 80%;
    display: flex;
`
const ItemBox = styled.div`
    width:50%;
    height: 97%;
    box-sizing:border-box;
    padding-top:3%;
`;
const UesrInformation = styled.div`
    width: 100%;
    height: 30%;
    h4{
        font-size: 18px;
    }
`;
const ChangePassword = styled.div`
    width: 100%;
    height: 60%;
`
const UesrInformationItemTop = styled.div`
    width: 90%;
    height: 28%;
    border-top: 0.5px solid #c8c8c8;
    display: flex;
    .ItemTitle{
        background: #F6F6F6 0% 0% no-repeat padding-box;
        width: 20%;
        height: 100%;
        color:#9e9e9e;
        font-size: 16px;
        box-sizing: border-box;
        padding: 2.4% 2%;
    }
    .ItemContent{
        width:80%;
        height:100%;
        color: #9e9e9e;
        font-size: 16px;
        box-sizing:border-box;
        padding: 2% 3%;
    }
    input{
        margin: 1.5% 1%;
        outline:none;
        border: 1px solid #c8c8c8;
        color: black;
        width: 40%;
        height: 65%;
        border-radius: 2px;
        box-sizing:border-box;
        padding-left: 2%;
        font-size: 15px;
    }
`;
const UesrInformationItemBottom = styled(UesrInformationItemTop)`
    border-bottom: 0.5px solid #c8c8c8;
    input{
        border: 1px solid #9e9e9e;
        background-color:#f6f6f6;
    }
`;
const ChangePasswordTitle = styled.div`
    display: flex;
    font-size: 13px;
    color: #9e9e9e;
    h4{
        font-size: 18px;
        color: black;
    }
`;
const ChangePasswordItem = styled.div`
    width:90%;
    height: 100%;
    .changepassworditemin{
        width:100%;
        height: 20%;
        border-bottom: 1px solid #c8c8c8;
        display: flex;
        align-items: flex-end;
        svg{
            margin-bottom: 2%;
        }
    }
    .errormessage{
        color: red;
        font-size: 13px;
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
        margin-top: 10px;
        font-size: 16px;
    }
`;
const ChildrenInformation = styled.div`
    width:100%;
    height:98%;
    border-top: 1px solid #c8c8c8;
    background-color:#f6f6f6;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
`;
const MyChildren = styled.div`
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
    .childreninformation{
        margin-left: 1%;
        width: 40%;
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
const ChildrenStatus = styled.div`
    width: 95%;
    height: 83%;
    margin-top: 2%;
    display: flex;
`;
const ChildrenStatusLeft = styled.div`
    width: 55%;
    height:100%;
    box-sizing:border-box;
    color: #9e9e9e;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
`;
const ChildrenStatusRight = styled(ChildrenStatusLeft)`
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
`;
const Volunteer = styled.div`
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
const ChildrenStatusItem = styled.div`
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
`;
const ChildrenStatusItemMain = styled.div`
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
    }
    .rightimg{
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`;
const PlusScore = styled.div`
    background-color: #4775b2;
    color: white;
    text-align:center;
    width: 36%;
    height: 70%;
    border-radius: 50%;
    box-sizing: border-box;
    padding-top: 5%;
    font-size: 18px;
`;
const MinusScore = styled(PlusScore)`
    background-color: #d37c7c;
`;
export {
    MyPageWrapper,
    MainWrapper,
    MyPageItem,
    ItemBox,
    UesrInformation,
    ChangePassword,
    ChildrenInformation,
    UesrInformationItemTop,
    UesrInformationItemBottom,
    ChangePasswordTitle,
    ChangePasswordItem,
    MyChildren,
    ChildrenStatus,
    ChildrenStatusLeft,
    ChildrenStatusRight,
    Volunteer,
    ChildrenStatusItem,
    ChildrenStatusItemMain,
    PlusScore,
    MinusScore
};