import React, { useState } from "react";
import "./Navbar.styles";
import {
  Nav,
  NavIcon,
  Bars,
  Notification,
  ReactTooltipData,
} from "./Navbar.styles";

const Navbar = ({ toggle, order }) => {
  //'Solidifica' a barra de navegação quando o usuário scrolla
  const [scroll, setScroll] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY > 50 ? setScroll(true) : setScroll(false);
  });

  //número total de itens adicionado ao pedido
  let totalItems = order
    ?.map((product) => product.quantity)
    .reduce((acc, el) => acc + el);

  return (
    <Nav scroll={scroll}>
      <ReactTooltipData
        data-tip={
          order?.length
            ? `Há ${totalItems} ${
                totalItems > 1 ? "itens" : "item"
              } no pedido atual.`
            : `Não há nenhum item adicionado ao seu pedido.`
        }
      >
        <NavIcon onClick={toggle}>
          <Bars />
          {order?.length > 0 && (
            <Notification qtd={totalItems}>{totalItems}</Notification>
          )}
        </NavIcon>
      </ReactTooltipData>
    </Nav>
  );
};

export default Navbar;
