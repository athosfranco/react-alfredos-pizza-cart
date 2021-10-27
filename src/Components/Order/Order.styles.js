import styled from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 95%;
  height: 90%;
  transition: 0.5s ease-out;
  overflow-y: auto;
  cursor: default;

  h2 {
    text-align: center;
    padding-top: 1rem;
  }

  p {
    padding: 1rem;
    cursor: default;
  }
  //Scrollbar
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 100px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #e31837;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #f31837;
  }
`;

export const OrderItem = styled.div`
  padding: 5px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ce9e00;
  height: 80px;
  cursor: pointer;
  &:hover {
    background-color: #eab300;
  }
`;

export const ItemDesc = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  h4 {
    font-family: "Oswald", sans-serif;
    font-size: 1.2rem;
  }

  span {
    font-style: italic;
  }
`;

export const ItemQtdContainer = styled.div`
  display: flex;
  align-items: right;
  justify-content: right;
  width: 100%;
`;

export const ItemPrice = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: right;
  text-align: right;
`;

export const ItemQtd = styled.span`
  text-align: left;
`;

export const BtnIncreaseQtd = styled.span`
  padding: 4px 12px;
  border: 1px solid #ce9e00;
  border-radius: 0px 8px 8px 0px;
  cursor: pointer;
  text-align: center;
  transition: 0.2s ease-out;
  &:hover {
    background-color: #4e9f3d;
    color: #eee;
    border: 1px solid #4e9f3d;
    transition: 0.2s ease-out;
  }
`;
export const BtnDecreaseQtd = styled.span`
  padding: 4px 12px;
  border: 1px solid #ce9e00;
  border-radius: 8px 0px 0px 8px;
  cursor: pointer;
  text-align: center;
  transition: 0.2s ease-out;
  &:hover {
    background-color: #e31837;
    color: #eee;
    border: 1px solid #e31837;
    transition: 0.2s ease-out;
  }
`;

export const ScrollableContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  transition: 0.3s ease-out;
  padding: 10px;
  height: 90%;
`;

export const DeleteItemBtn = styled.button`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  outline: none;
  border: none;
  background: transparent;
  padding: 5px;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const OrderMsg = styled.p`
  padding: 0;
  text-align: center;
  color: ${(props) => (props.color === "red" ? "#e31837" : "inherit")};
`;
