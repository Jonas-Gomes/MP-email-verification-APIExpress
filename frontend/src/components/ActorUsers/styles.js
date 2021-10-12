import styled from 'styled-components';

export const ActorContainer = styled.div`
    min-height: 120px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    border-bottom: 1px solid #ddd;

    background-color: #fff;

    border-radius: 4px;

    -webkit-box-shadow: -1px 0px 10px -3px rgba(0,0,0,0.75);
    -moz-box-shadow: -1px 0px 10px -3px rgba(0,0,0,0.75);
    box-shadow: -1px 0px 10px -3px rgba(0,0,0,0.75);

    margin-top: 1%;
`;

export const InfoContainer = styled.div`
    height: 98%;
    width: 85%;

    display: flex;
    justify-content: space-around;
    flex-direction: column;

    p{
        color: #4d4d4d;

        font-weight: 600;
    }

    h5{
        font-size: 1em;
        color: #4d4d4d;
    }
`;

export const ButtonsContainer = styled.div`
    height: 90%;
    width: 10%;

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`;

export const MainButton = styled.button`
    height: 30px;
    width: 98%;

    background-color: #4D4D4D;

    border: none;
    outline: none;

    border-radius: 4px;

    color: #fff;
    
    font-weight: 700;

    cursor: pointer;

    :hover{
        filter: brightness(90%);
    }
`;

export const SecondButton = styled.button`
    height: 30px;
    width: 98%;

    background-color: #f58220;

    border: none;
    outline: none;

    border-radius: 4px;

    color: #fff;
    
    font-weight: 700;

    cursor: pointer;

    :hover{
        filter: brightness(90%);
    }
`;