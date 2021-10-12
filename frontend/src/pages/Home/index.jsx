import React from 'react';
import { HomeContainer, Logout, Sidebar, TitleContainer } from './styles';   

const Home = ()=>{

    return(
        <HomeContainer>
            <Sidebar>
                <TitleContainer>
                    <h2>Programação para </h2>
                    <h2>web 2</h2>
                </TitleContainer>

                <Logout>Sair</Logout>
            </Sidebar>

     </HomeContainer>
    )
}

export default Home;