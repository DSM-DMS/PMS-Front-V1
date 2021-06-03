import styled from 'styled-components'

export const ChildrenStatus = styled.div`
    width: 95%;
    height: 83%;
    margin-top: 2%;
    display: flex;
`;
export const StatusItemWrapper = styled.div`
    width: 55%;
    height:100%;
    box-sizing:border-box;
    color: #9e9e9e;
    display : flex;
    flex-direction:column;
    justify-content: space-between;
`;
export const ChildrenStatusItem = styled.div`
    width: 100%;
    height: 23%;
    background-color: white;
    border: 1px solid #c8c8c8;
    box-sizing: border-box;
    padding: 2%;
`;
export const CheckStatus = styled.div`
    color: #9e9e9e;
    width: 60%;
    height: 100%;
    font-size: 14px;
    text-align:left;
    padding-left: 7%;
    line-height:2;
`;
export const ItemInnerWrapper = styled.div`
    width: 98%;
    height: 60%;
    margin-top: 3%;
    display: flex;
`;
export const ItemImgWrapper = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const PrizePoint = styled.div`
    color: white;
    text-align:center;
    width: 36%;
    height: 70%;
    border-radius: 50%;
    box-sizing: border-box;
    padding-top: 5%;
    font-size: 18px;
    background-color: #4775b2;
`
export const PenaltyPoint = styled(PrizePoint)`
    background-color:#d37c7c;
`;
export const ItemTitle = styled.div`
    color: #9e9e9e;
    font-size: 15px;
    border-bottom:1px solid #c8c8c8;
`;