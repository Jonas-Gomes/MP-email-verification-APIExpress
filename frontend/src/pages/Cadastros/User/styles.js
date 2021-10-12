import styled from 'styled-components';

export const LoginContainer = styled.div`
    height: 100vh;
    width: 100%;
`;

export const Header = styled.header`
    height: 20vh;
    width: 100%;

    background-color: #4D4D4D;
    }
    h2{
        font-size: 3em;

        color: #fff;

        margin-left: 1%;
    }

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BodyLogin = styled.div`
    height: 75vh;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormLogin = styled.form`
    height: 400px;
    width: 30%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    div{
        margin-top: 10%;
    }
`;

export const Title = styled.h2`
    color: #4d4d4d;
`

export const Input = styled.input`
    height: 30px;
    width: 100%;

    padding-left: 2%;

    border: none;
    border: 1px solid #ddd;
    border-radius: 4px;

    margin-top: 3%;

    font-weight: 500;

    :focus{
        border: 1px solid #4D4D4D;
    }
`;

export const Button = styled.button`
    height: 35px;
    width: 50%;
 
    background-color: #4D4D4D;

    border-radius: 4px;

    font-weight: 900;
    color: #fff;

    border: none;
    outline: 0;

    margin-top: 3%;

    cursor: pointer;
`;