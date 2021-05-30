import styled from 'styled-components';
import {Profile, Triangle} from '../../../assets/index'

export const MyChildren = styled.div`
    background-color: white;
    width: 95%;
    height:10%;
    border: 1px solid #c8c8c8;
    display: flex;
    align-items:center;
    box-sizing: border-box;
    padding: 0 2%;
    h5{
        font-size: 15px;
    }
`;
export const ChildrenProfileImage = styled.div`
    width: 9%;
    height: 80%;
    background-image: url(${Profile});
`;
export const ChildrenInformationValue = styled.div`
    margin-left: 2%;
    width: 45%;
    height: 80%;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content:center;
    margin-right: 40%;
`;
export const TriangleImg = styled.div`
    background-image: url(${Triangle});
    width: 15px;
    height: 8px;
`;