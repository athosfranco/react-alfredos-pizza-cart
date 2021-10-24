import React from "react";
import {
  CardapioContainer,
  ProductSectionContainer,
  ProductCardContainer,
  BackToHomeBtn,
} from "./Cardapio.styles";
import productsData from "../../ProductsData";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { FaArrowLeft } from "react-icons/fa";

const Cardapio = ({ onGetOrder }) => {
  //funçao que adiciona o produto ao pedido e o envia para a array de pedidos em app.js
  const productHandler = (addToOrder) => {
    onGetOrder(addToOrder);
  };
  return (
    <CardapioContainer>
      <BackToHomeBtn href="/">
        <FaArrowLeft />
      </BackToHomeBtn>

      <h1>Pizzas</h1>
      {/* <p>
        Pizzas de tamanho único estilo Napolitana com autêntica farinha italiana
        – Le 5 Stagioni. Uma das marcas reconhecidas pela Associação de
        Pizzaioli de Nápoles, que certifica o padrão clássico. Tenha a
        verdadeira experiência de comer pizza.
      </p> */}
      <ProductSectionContainer>
        <ProductCardContainer>
          {
            //Faz um loop no objeto de produtos pra pegar todas as pizzas
            Object.entries(productsData.pizza).map(([key, product]) => {
              return (
                <ProductCard
                  img={product.img}
                  name={product.name}
                  desc={product.desc}
                  category={product.category}
                  price={product.price}
                  onGetProduct={productHandler}
                ></ProductCard>
              );
            })
          }
        </ProductCardContainer>
      </ProductSectionContainer>
      <h1>Sobremesas</h1>
      <ProductSectionContainer>
        <ProductCardContainer>
          {
            //Faz um loop no objeto de produtos pra pegar todas as pizzas
            Object.entries(productsData.sobremesas).map(([key, product]) => {
              return (
                <ProductCard
                  img={product.img}
                  name={product.name}
                  desc={product.desc}
                  category={product.category}
                  price={product.price}
                  onGetProduct={productHandler}
                ></ProductCard>
              );
            })
          }
        </ProductCardContainer>
      </ProductSectionContainer>
      <h1>Bebidas</h1>
      <ProductSectionContainer style={{ paddingBottom: "100px" }}>
        <ProductCardContainer>
          {
            //Faz um loop no objeto de produtos pra pegar todas as pizzas
            Object.entries(productsData.bebidas).map(([key, product]) => {
              return (
                <ProductCard
                  img={product.img}
                  name={product.name}
                  desc={product.desc}
                  category={product.category}
                  price={product.price}
                  onGetProduct={productHandler}
                ></ProductCard>
              );
            })
          }
        </ProductCardContainer>
      </ProductSectionContainer>
    </CardapioContainer>
  );
};

export default Cardapio;
