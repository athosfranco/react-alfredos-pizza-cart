import styled from "styled-components";

export const ModalContainer = styled.div``;

export const Overlay = styled.div`
  position: fixed;
  z-index: 1000;
  min-width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1001;
  margin: 0 auto;
  height: 300px;
  width: 400px;
  background: #ffc500;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.4);

  h2 {
    font-family: "Oswald", sans-serif;
    text-align: center;
    padding: 1rem;
  }

  p {
    text-align: center;
    padding: 1rem 2rem 2rem 2rem;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 650px) {
    width: 90%;
  }
`;

export const CloseButton = styled.button`
  margin: 0 auto;
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: white;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
