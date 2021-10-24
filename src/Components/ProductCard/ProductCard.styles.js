import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  grid-column-end: span 4;
  display: flex;
  flex-direction: column;
  color: #eeee;
  cursor: default;
  transition: all 0.3s ease 0s;
  width: 260px;
  margin-bottom: 30px;

  h3 {
    font-family: "Oswald", sans-serif;
    font-size: 1.5rem;
    letter-spacing: 2px;
    text-shadow: 3px 3px 14px rgba(0, 0, 0, 0.5);
  }
  p {
    margin: 10px 0;
    text-shadow: 3px 3px 14px rgba(0, 0, 0, 0.5);
    font-style: italic;
    min-height: 50px;
  }
  h5 {
    font-size: 1.5rem;
    text-shadow: 3px 3px 14px rgba(0, 0, 0, 0.5);
  }
  @media only screen and (max-width: 1000px) {
    grid-column-end: span 6;
  }
  @media only screen and (max-width: 700px) {
    grid-column-end: span 12;
  }
`;

export const ImgWrapper = styled.div`
  overflow: hidden;
`;

export const ProductImg = styled.img`
  border: 1px solid black;
  width: 260px;
  height: 180px;
  max-height: 180px;
  transition: transform 0.5s ease-out;
  &:hover {
    transform: scale(1.5);
  }
`;

export const ProductQuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const ProductQuantity = styled.h3`
  background: transparent;
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
  color: #eee;
  outline: none;
  border: none;
  -webkit-appearance: none;
  margin: 0;
`;

export const AddToOrderBtn = styled.button`
  width: 100%;
  font-size: 1rem;
  padding: 1rem;
  margin-top: 10px;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const AddBtn = styled.button`
  width: 100px;
  text-align: center;
  padding: 10px;
  font-size: 1rem;
  margin-top: 10px;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const RemoveBtn = styled.button`
  width: 100px;
  text-align: center;
  font-size: 1rem;
  padding: 10px;
  margin-top: 10px;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
