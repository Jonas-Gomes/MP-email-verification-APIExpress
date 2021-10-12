import React from 'react';
import { ActorContainer, BodyContainer, HomeContainer, ListActor, Logout, RegisterButton, RegisterContainer, Sidebar, TitleContainer } from './styles';

import Actor from '../../components/ActorUsers';


const Users = ()=>{

    return(
        <HomeContainer>
            <Sidebar>
                <TitleContainer>
                    <h2>Programação para </h2>
                    <h2>web 2</h2>
                </TitleContainer>

                <Logout>Sair</Logout>
            </Sidebar>

            <BodyContainer>

                <ActorContainer>
                    <h2>Usuários</h2>
                </ActorContainer>

                <ListActor>
                    <Actor />
                    <Actor />
                    <Actor />
                    <Actor />
                    <Actor />
                    <Actor />
                </ListActor>

                <RegisterContainer>
                    <RegisterButton >Cadastrar usuário</RegisterButton>
                </RegisterContainer>
            </BodyContainer>
     </HomeContainer>
    )
}

export default Users;