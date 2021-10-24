import React from "react";
import {
  SidebarContainer,
  SidebarHeader,
  CheckoutContainer,
  CloseBtn,
  SidebarTitle,
  SidebarQtdMsg,
  CloseIcon,
  SidebarRoute,
  SideBtnWrap,
  OrderTotal,
  OrderPriceContainer,
} from "./Sidebar.styles";

import Order from "../Order/Order";

const Sidebar = ({ isOpen, toggle, order, onUpdateOrder, onRenderAlert }) => {
  //quando o pedido é atualizado na própria sidebar, essa funçao envia a array com o pedido atualizado para app.js
  //'updatedOrder' é a 'filteredOrderArray' de Order.jsx
  const updateOrderHandler = (updatedOrder) => {
    onUpdateOrder(updatedOrder);
  };

  //
  const alertHandler = (text, btnText) => {
    onRenderAlert(text, btnText);
  };

  //Cálculo do preço final do pedido
  let totalPrice = order
    ?.map((itemOnOrder) => itemOnOrder.totalPrice)
    .reduce((acc, currentProductPrice) => acc + currentProductPrice);

  //formato .toLocaleString
  const currencyFormat = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  };

  //número total de itens adicionado ao pedido
  let totalItems = order
    ?.map((product) => product.quantity)
    .reduce((acc, el) => acc + el);

  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarHeader>
        <CloseBtn onClick={toggle}>
          <CloseIcon />
        </CloseBtn>
        <SidebarTitle>Pedido</SidebarTitle>
      </SidebarHeader>

      <Order
        order={order}
        onUpdateOrder={updateOrderHandler}
        onRenderAlert={alertHandler}
      />
      <CheckoutContainer>
        <OrderPriceContainer>
          <OrderTotal>
            <span id="total-text">Subtotal</span>

            <span id="price-text">
              {order?.length
                ? totalPrice?.toLocaleString("pt-BR", currencyFormat)
                : "R$ 0,00"}
            </span>
          </OrderTotal>

          <SidebarQtdMsg>
            {order?.length > 0 &&
              `${totalItems} ${totalItems > 1 ? "itens" : "item"}
             no pedido.`}
          </SidebarQtdMsg>
        </OrderPriceContainer>
        <SideBtnWrap>
          <SidebarRoute to="/">Finalizar Pedido</SidebarRoute>
        </SideBtnWrap>
      </CheckoutContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
