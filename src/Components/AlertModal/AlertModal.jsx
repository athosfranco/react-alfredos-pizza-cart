import React from "react";
import {
  ModalContainer,
  Modal,
  CloseButton,
  Overlay,
} from "./AlertModal.styles";

const AlertModal = ({ text, btnText, onCloseModal }) => {
  //Fecha o modal (envia o boleano 'false' pra App.js que usa setAlertModal pro valor boleano)
  const modalHandler = () => {
    onCloseModal(false);
  };
  return (
    <ModalContainer>
      <Modal>
        <h2>Atenção</h2>
        <p>{text}</p>
        <CloseButton onClick={modalHandler}>{btnText}</CloseButton>
      </Modal>
      <Overlay />
    </ModalContainer>
  );
};

export default AlertModal;
