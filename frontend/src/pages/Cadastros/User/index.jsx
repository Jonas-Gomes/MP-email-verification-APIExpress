import React from 'react';
import { BodyLogin, Button, FormLogin, Header, Input, LoginContainer, Title } from './styles';

const Caduser = ()=>{
    return(
        <LoginContainer>

            <Header>
                <h2>Programação para web 2</h2>
            </Header>

            <BodyLogin>
                <FormLogin>
                    <Title>Cadastro de usuários</Title>
                    <div>
                        <Input placeholder="Nome"/>
                        <Input placeholder="Email"/>
                        <Input placeholder="Telefone"/>
                        <Input placeholder="Senha" type="password"/>
                    </div>
                    <Button>Cadastrar</Button>
                </FormLogin>
            </BodyLogin>

        </LoginContainer>
    )
}

export default Caduser;