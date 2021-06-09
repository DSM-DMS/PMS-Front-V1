import styled from 'styled-components';

export const ChangePassword = styled.div`
    width: 100%;
    height: 60%;
`
export const ChangePasswordInput = styled.input`
    width:95%;
    height: 25%;
    outline: none;
    border: none;
    color: #9e9e9e;
    font-size:16px;
    margin: 15px 0;
`;
export const ChangePasswordItemBox = styled.div`
    width:100%;
    height: 20%;
    border-bottom: 1px solid #c8c8c8;
    display: flex;
    align-items: flex-end;
`;
export const ChangePasswordTitle = styled.div`
    display: flex;
    font-size: 13px;
    color: #9e9e9e;
    h4{
        font-size: 18px;
        color: black;
        margin-right: 2%;
    }
`;
export const ErrorMessage = styled.div`
    color: red;
    font-size: 13px;
    display: none;
`;
export const ChangePasswordWrapper = styled.div`
    width:90%;
    height: 100%;
`;
export const ChangePasswordBtn = styled.button`
    width: 25%;
    height: 12%;
    background-color:#c8c8c8;
    color: white;
    border: none;
    border-radius: 2px;
    margin-top: 20px;
    font-size: 16px;
`;