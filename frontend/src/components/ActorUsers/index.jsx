import React, { useState } from 'react';
import { ActorContainer, ButtonsContainer, InfoContainer, MainButton, SecondButton } from './styles';
import Modal from '../Modal';

const Actor = ()=>{
    const [state, setState] = useState(false);
    const [user, setuser] = useState({
        name: "Fulano de tal",
        email: "fulanodetal@gmail.com",
        contato: "(83) 9 9999-9999",
    });
    const [modalState, setModalState] = useState({ property: " ", handle: null });

    function showModal(property) {
        setModalState({ property, handle: setuser });
        setState(true);
    }

    function hideModal() {
        setState(false);
    }

    return(
        <ActorContainer>
            <InfoContainer>
                <h4>{user.name}</h4>
                <h5>Email: {user.email}</h5>
                <h5>Contato: {user.contato}</h5>
            </InfoContainer>

            <ButtonsContainer>
                <MainButton
                onClick={() => {
                    showModal("name");
                  }}
                >Editar</MainButton>
                <SecondButton>Deletar</SecondButton>
            </ButtonsContainer>
            <Modal
            property={modalState.property}
            value={user[modalState.property]}
            handle={modalState.handle}
            show={state}
            handleClose={hideModal}
          />
        </ActorContainer>
    )
}

export default Actor;