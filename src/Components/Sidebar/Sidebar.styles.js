import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 400px;
  height: 100%;
  background: #ffc500;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px auto;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
  cursor: default;

  @media screen and (max-width: 415px) {
    width: 100%;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 16px;
`;

export const SidebarQtdMsg = styled.p`
  text-align: left;
  margin-left: 20px;
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarTitle = styled.h2`
  margin-top: 8px;
  cursor: default;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 30px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 40px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  &:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(Link)`
  background: #e31837;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 200px;
  margin-top: 1rem;
  box-shadow: 1px 2px 18px 8px rgba(0, 0, 0, 0.52);
`;

export const OrderMsg = styled.p`
  padding: 0;
  text-align: center;
  color: ${(props) => (props.color === "red" ? "#e31837" : "inherit")};
`;

export const OrderTotal = styled.div`
  margin: 0 20px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

export const OrderPriceContainer = styled.div``;
