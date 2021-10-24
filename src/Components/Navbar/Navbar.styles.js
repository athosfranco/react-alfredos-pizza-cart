import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  font-weight: 700;
  max-width: 100vw;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Navlink = styled(Link)`
  color: #ffff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  margin: 0;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #ffff;

  p {
    font-weight: bold;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  z-index: 999;
`;

export const Notification = styled.div`
  width: 1.3rem;
  height: 1.3rem;
  line-height: 1.3rem;
  border-radius: 50%;
  font-size: ${(props) => (props.qtd > 99 ? "0.6rem" : "0.9rem")};
  color: #fff;
  text-align: center;
  background: #e31837;
  position: fixed;
  top: 20px;
  right: 20px;
`;

export const ReactTooltipData = styled.a``;
