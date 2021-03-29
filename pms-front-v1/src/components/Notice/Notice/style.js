import styled from "styled-components";

const MainWrapper = styled.div`
    width: 100%;
    height: 1130px;
    background-color: #f6f6f6;
`;
const MainItemWrapper = styled.div`
    position: relative;
    top: -5%;
    margin: 0 auto;
    width: 78%;
    height: 680px;
    box-shadow: 0px 5px 5px #00000029;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-sizing: border-box;
    padding: 2% 4%;
`;
const Search = styled.div`
    width: 100%;
    height: 6%;
    margin: 0.5% 0%;
    display: flex;
    justify-content:flex-end;
    input{
        border: 1px solid #c8c8c8;
        background-color: #f6f6f6;
        font-size: 17px;
        color: #9e9e9e;
        width: 23%;
        height: 100%;
        outline: none;
        box-sizing:border-box;
        padding-left: 1%;
    }
    select{
        color: #9e9e9e;
        font-size: 17px;
        background-color: white;
        width: 10%;
        height: 100%;
        outline: none;
        border:1px solid #c8c8c8;
        option{
            color: #c8c8c8;
            font-size: 16px;
        }
    }
`;
const ItemWrapper = styled.div`
    width: 100%;
    height: 75%;
`;
const ItemTitle = styled.div`
    border-bottom: 1px solid #c8c8c8;
    width: 100%;
    height: 10%;
    font-weight: 1000;
    font-size: 18px;
    display: flex;
    .title{
        text-align:left;
        width: 70%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 0.8%;
        display: flex;
    }
    .writer{
        width: 10%;
        height: 100%;
        text-align:center;
        box-sizing: border-box;
        padding-top: 0.8%;
    }
    .day{
        width: 20%;
        height: 100%;
        text-align:center;
        box-sizing: border-box;
        padding-top: 0.8%;
    }
`;
const Item = styled(ItemTitle)`
    font-weight:600;
    font-size: 16px;
`;
const NewItem = styled.div`
    color:#D37C7C;
    width: 1%;
    height: 40%;
    font-size: 12px;
    margin-left: 1%;
    position: relative;
    top: 1.5px;
`;
const Page = styled.div`
    width: 10%;
    height: 7%;
    margin-top: 2%;
    font-size: 18px;
    color:#9e9e9e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 43%;
    .pageitem{
        width: 20%;
        height: 80%;
        text-align:center;
    }
`;
const MainWrittenWrapper = styled(MainWrapper)`
    height: 2000px;
`;
const MainWrittenItemWrapper = styled(MainItemWrapper)`
    height: 850px;
    h3{
        font-weight: 600;
        margin-bottom: 2%;
    }
`;
const WrittenInfo = styled.div`
    color: #9e9e9e;
    font-size: 16px;
    width: 100%;
    border-bottom: 1px solid #c8c8c8;
    height: 5%;
    display: flex;
    box-sizing:border-box;
        padding-top: 0.5%;
    .infotype{
        margin-right: 63%;
    }
    .infotitle{
        font-weight: 600;
        width: 5%;
        border-right: 1px solid #c8c8c8;
        margin-left: 5%;
        height: 90%;
    }
`;
const WrittenItem = styled.div`
    font-weight: 550;
    margin-top: 1%;
    width: 100%;
    height: 42%;
    overflow-y: scroll;
    line-height: 180%;
`;
const AddFile = styled.div`
    border: 1px solid #c8c8c8;
    width: 100%;
    height: 7%;
    display: flex;
    align-items:center;
    border-left: none;
    border-right: none;
    color: #9e9e9e;
    font-size: 16px;
    .filetitle{
        font-weight: 600;
        width: 5%;
        border-right: 2px solid #c8c8c8;
        height: 50%;
        margin-right: 1%;
        padding-right: 1%;
    }
    .fileitem{
        width: 90%;
        height: 50%;
    }
`;
const CommentWrapper = styled.div`
    width: 100%;
    height: 33%;
    margin-top: 1%;
`;
const CommentTitle = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    h3{
        font-weight: 600;
        margin-bottom: 2%;
    }
    .commentAmount{
        color: #9e9e9e;
        font-size: 13px;
        box-sizing: border-box;
        padding-top: 0.4%;
    }
`;
const CommentContent = styled.div`
    input{
        width: 100%;
        border-radius: 3%;
        height:25%;
        outline: none;
        background-color: #f6f6f6;
        border:none;
        font-size: 17px;
        color: #9e9e9e;
        box-sizing: border-box;
        padding-left: 2%;
    }
    width: 100%;
    height:85%;
    .commentItemWrapper{
        width: 100%;
        height: 75%;
        overflow-y:scroll;
        margin-top: 1%;
    }
`;
const CommentItem = styled.div`
    width: 99%;
    height: auto;
    display: flex;
    margin-top: 1%;
    align-items: center;
    .profileimage{
        width: 4.4%;
        height: 50px;
        margin-left: 1%;
    }
    .comment{
        width: auto;
        height: auto;
        background-color:#f6f6f6;
        border-radius: 20px;
        font-size: 14px;
        font-weight:600;
        padding: 1%;
        .title{
            font-size: 15px;
            font-weight: 800;
            position: relative;
            top: -5px;
        }
        .content{
            h4{
                font-size: 16px; 
                font-weight: 700;
            }
            display: flex;
            line-height: 110%;
        }
    }
`;
const BottomItemWrapper = styled(MainItemWrapper)`
    height: 600px;
    margin-top: 3%;
`;
const ItemW = styled(Item)`
    border-top: 1px solid #c8c8c8;
    font-weight: 800;
    height: 11%;
`;
const PageW = styled(Page)`
    position: relative;
    top: 12%;
`;
export{
    MainWrapper,
    MainItemWrapper,
    Search,
    ItemTitle,
    ItemWrapper,
    Item,
    Page,
    NewItem,
    MainWrittenWrapper,
    MainWrittenItemWrapper,
    WrittenItem,
    WrittenInfo,
    AddFile,
    CommentWrapper,
    CommentTitle,
    CommentContent,
    CommentItem,
    BottomItemWrapper,
    ItemW,
    PageW
}