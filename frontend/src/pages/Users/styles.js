import styled from 'styled-components';

export const HomeContainer = styled.div`
    min-height: 100vh;
    width: 100%;

    display: flex;

    background-color: #ddd;
`;

export const Sidebar = styled.div`
    height: 100vh;
    width: 20%;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #4D4D4D;
`;

export const TitleContainer = styled.div`
    width: 98%;

    margin-top: 3%;

    text-align: center;

    h1{
         font-size: 2.5em;

        color: #f58220;

        margin-left: 1%;
    }
    h2{
        font-size: 2.5em;

        color: #fff;

        margin-left: 1%;
    }
`;


export const OptionSelected = styled.button`
    height: 25%;
    width: 85%;

    border: none;
    outline: none;

    color: #f58220;

    border-bottom: 1px solid #f58220;

    font-weight: 700;

    background-color: transparent;

    cursor: pointer;

    text-align: left;

`;

export const Logout = styled.button`
    height: 40px;
    width: 100%;

    border: none;
    outline: none;

    color: #4D4D4D;

    background-color: #FFF;

    font-weight: 700;

    cursor: pointer;

    margin-top: 50%;

    :hover{
        filter: brightness(90%);
    }
`;

export const BodyContainer = styled.div`
    height: 100vh;
    width: 80%;

    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const ActorContainer = styled.div`
    width: 98%;

    border-bottom: 1px solid #4d4d4d;

    margin-top: 3%;

    h2{
        color: #4d4d4d;

        margin-bottom: 1%;
    }
`;

export const ListActor = styled.div`
    height: 70%;
    width: 98%;

    margin-top: 1%;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: auto;

    padding-right: 0.3%;

    ::-webkit-scrollbar {
        width: 10px;               /* width of the entire scrollbar */
    }

    ::-webkit-scrollbar-track{
        background: #fff;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #4d4d4d;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
    }
`;

export const RegisterContainer = styled.div`
    height: 20%;
    width: 98%;

    border-top: 1px solid #4d4d4d;

    margin-top: 2%;

    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const RegisterButton = styled.button`
    height: 30px;
    width: 20%;

    border: none;
    outline: none;

    border-radius: 4px;

    background-color: #4D4D4D;

    color: #fff;

    font-weight: 700;

    cursor: pointer;

    :hover{
        filter: brightness(90%);
    }
`;