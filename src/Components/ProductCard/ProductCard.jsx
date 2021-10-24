import React, { useState } from "react";
import {
  ProductCardWrapper,
  ImgWrapper,
  ProductImg,
  ProductQuantity,
  ProductQuantityContainer,
  AddToOrderBtn,
  AddBtn,
  RemoveBtn,
} from "./ProductCard.styles";

const ProductCard = ({ img, name, desc, category, price, onGetProduct }) => {
  //Controle da quantidade dos produtos
  let [productQtd, setProductQtd] = useState(1);

  //Modifica a quantidade do produto
  const changeQuantityHandler = (e) => {
    e.preventDefault();
    e.target.innerHTML === "+"
      ? productQtd < 15 && setProductQtd(productQtd + 1)
      : productQtd > 1 && setProductQtd(productQtd - 1);
  };

  //funçao que adiciona o produto selecionado ao carrinho
  const addProductHandler = (e) => {
    e.preventDefault();
    const quantity = Number(
      e.target.previousElementSibling.getElementsByTagName("h3")[0].innerHTML
    );
    const addToOrder = {
      productName: name,
      category: category,
      quantity: quantity,
      price: price,
      totalPrice: quantity * price,
    };
    onGetProduct(addToOrder);
  };

  //formato de conversão de número em valor monetário (propriedades de toLocaleString)
  const currencyFormat = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  };
  return (
    <ProductCardWrapper>
      <ImgWrapper>
        <ProductImg src={img} alt="" />
      </ImgWrapper>
      <h3>{name}</h3>
      <p>{desc}</p>
      <h5>{price.toLocaleString("pt-BR", currencyFormat)}</h5>
      <form>
        <ProductQuantityContainer>
          <RemoveBtn onClick={changeQuantityHandler}>-</RemoveBtn>
          <ProductQuantity>{productQtd}</ProductQuantity>
          <AddBtn onClick={changeQuantityHandler}>+</AddBtn>
        </ProductQuantityContainer>
        <AddToOrderBtn onClick={addProductHandler}>
          Adicionar ao Pedido
        </AddToOrderBtn>
      </form>
    </ProductCardWrapper>
  );
};

export default ProductCard;
