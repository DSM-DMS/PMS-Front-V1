import styled from 'styled-components'

export const UserInformation = styled.div`
    width: 100%;
    height: 30%;
    h4{
        font-size: 18px;
        margin-bottom: 4%;
    }
`;
export const UserInformationItem = styled.div`
        width: 90%;
        height: 28%;
        border-top: 0.5px solid #c8c8c8;
        display: flex;
`;
export const UserInformationItemBot = styled(UserInformationItem)`
    border-bottom: 0.5px solid #c8c8c8;
`;
export const ItemTitle = styled.div`
    background: #F6F6F6 0% 0% no-repeat padding-box;
    width: 20%;
    height: 100%;
    color:#9e9e9e;
    font-size: 16px;
    box-sizing: border-box;
    padding: 2.4% 2%;
`;
export const ItemContent = styled.div`
    width:80%;
    height:100%;
    color: #9e9e9e;
    font-size: 16px;
    box-sizing:border-box;
    padding: 2% 3%;
`;
export const NickNameInput = styled.input`
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
`;