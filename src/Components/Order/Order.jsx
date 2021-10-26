import React from "react";
import {
  OrderContainer,
  OrderItem,
  OrderMsg,
  BtnDecreaseQtd,
  BtnIncreaseQtd,
  ItemPrice,
  ItemDesc,
  ItemQtdContainer,
  ItemQtd,
  ScrollableContent,
  DeleteItemBtn,
} from "./Order.styles";
import { AiOutlineClose } from "react-icons/ai";

const Order = ({ order, onUpdateOrder, onRenderAlert }) => {
  //funçao pra excluir item da lista de pedido
  const deleteItemHandler = (itemToDelete) => {
    const orderArrayTemp = JSON.parse(
      localStorage.getItem("orderArray")
    ).filter((item) => item.productName !== itemToDelete);
    onUpdateOrder(orderArrayTemp);
  };

  //formato .toLocaleString
  const currencyFormat = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  };

  //modifica quantidade do produto
  const productQtdHandler = (productName, modifier) => {
    const orderArrayTemp = JSON.parse(localStorage.getItem("orderArray"));

    orderArrayTemp.forEach((element) => {
      if (element.productName === productName) {
        if (modifier === "increase") {
          if (element.quantity < 15) {
            element.quantity++;
            element.totalPrice = element.quantity * element.price;
          } else
            onRenderAlert(
              undefined,
              `Só é possível pedir um máximo de 15 unidades por item em um pedido.`,
              `Ok`
            );
        } else {
          if (element.quantity > 1) {
            element.quantity--;
            element.totalPrice = element.quantity * element.price;
          } else
            onRenderAlert(
              undefined,
              `Não é possível reduzir mais a quantidade deste item. Para removê-lo do pedido, clique no "X" ao lado direito do item.`,
              `Ok`
            );
        }
      }
    });
    onUpdateOrder(orderArrayTemp);
  };

  //exibe um modal com informaçoes do produto
  const showProductInfo = (productName, productDesc, btnText) =>
    onRenderAlert(productName, productDesc, btnText);

  return (
    <OrderContainer orderLength={order?.length}>
      <ScrollableContent>
        {order?.map((product) => {
          return (
            <OrderItem>
              <ItemDesc
                onClick={() =>
                  showProductInfo(product.productName, product.desc, "Ok")
                }
              >
                <h4>{product.productName}</h4>
                <span>{product.category}</span>
                <ItemQtd>Quantidade: {product.quantity}</ItemQtd>
              </ItemDesc>

              <ItemPrice>
                {product.totalPrice.toLocaleString("pt-BR", currencyFormat)}
                <ItemQtdContainer>
                  <BtnDecreaseQtd
                    onClick={() => {
                      productQtdHandler(product.productName, "decrease");
                    }}
                  >
                    -
                  </BtnDecreaseQtd>
                  <BtnIncreaseQtd
                    onClick={() => {
                      productQtdHandler(product.productName, "increase");
                    }}
                  >
                    +
                  </BtnIncreaseQtd>
                </ItemQtdContainer>
              </ItemPrice>
              <DeleteItemBtn
                onClick={() => deleteItemHandler(product.productName)}
              >
                <AiOutlineClose />
              </DeleteItemBtn>
            </OrderItem>
          );
        })}
        <OrderMsg>
          {!order?.length && "Não há nenhum item adicionado ao seu pedido."}
        </OrderMsg>
      </ScrollableContent>
    </OrderContainer>
  );
};

export default Order;
