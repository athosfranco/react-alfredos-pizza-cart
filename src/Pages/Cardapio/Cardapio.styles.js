import styled from "styled-components";
import background from "../../Images/orderbackground2.png";

export const CardapioContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)),
    url(${background});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    color: #eeee;
    font-family: "Oswald", sans-serif;
    font-size: 4rem;
    text-align: center;
    margin-top: 40px;
  }
`;
export const ProductSectionContainer = styled.div`
  display: grid;
  width: 100%;

  grid-template-columns: 1fr repeat(12, minmax(auto, 60px)) 1fr;
  grid-gap: 15px;

  @media only screen and (max-width: 700px) {
    grid-gap: 55px;
  }
`;

export const ProductCardContainer = styled.div`
  margin-top: 32px;
  grid-column: 2 / span 12;
  display: grid;
  grid-template-columns: repeat(12, minmax(auto, 60px));
  grid-gap: 40px;
`;

export const BackToHomeBtn = styled.a`
  color: white;
  width: 20px;
  height: 20px;
  background: transparent;
  outline: none;
  border: none;
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
  position: fixed;
  left: 5px;
  transition: 0.2s ease;
  &:hover {
    left: 0;
    color: #e31837;
  }
  @media only screen and (max-width: 700px) {
    left: 0;
    padding: 10px 5px;
  }
`;
