import React from 'react';
import { BodyLogin, Button, FormLogin, Header, Input, LoginContainer, Title } from './styles';

const Login = ()=>{
    return(
        <LoginContainer>

            <Header>
                <h2>Programação para web 2</h2>
            </Header>

            <BodyLogin>
                <FormLogin>
                    <Title>Login</Title>
                    <div>
                        <Input placeholder="Email"/>
                        <Input placeholder="Senha" type="password"/>
                    </div>
                    <Button>Efetuar Login</Button>
                </FormLogin>
            </BodyLogin>

        </LoginContainer>
    )
}

export default Login;