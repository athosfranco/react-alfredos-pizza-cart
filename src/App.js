import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cardapio from "./Pages/Cardapio/Cardapio";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { GlobalStyle } from "./global.styles";
import AlertModal from "./Components/AlertModal/AlertModal";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import ReactTooltip from "react-tooltip";
import ReactDOM from "react-dom";

function App() {
  //state que armazena o pedido
  const [order, setOrder] = useState(
    JSON.parse(localStorage.getItem("orderArray"))
  );
  //renderiza modal
  const alertHandler = (text, btnText) => {
    setAlertModal(true);
    setAlertModalContent(
      ReactDOM.createPortal(
        <AlertModal
          text={text}
          btnText={btnText}
          onCloseModal={modalHandler}
        />,
        document.getElementById("overlay-root")
      )
    );
  };
  //////adiciona itens do cardápio ao array do pedido
  const orderHandler = (productToAddToOrder) => {
    //o 'if' verifica se a array já existe no localStorage
    if (localStorage.orderArray) {
      //caso 'true', a array é tirada do localStorage e armazenada em uma variavel temporaria
      const tmpArr = JSON.parse(localStorage.getItem("orderArray"));

      //busca o item a ser atualizado na array
      let i; //variável que vai armazenar o index do item a ser atualizado
      const productAlreadyInOrder = tmpArr.find((currentProduct, index) => {
        i = index;
        return currentProduct.productName === productToAddToOrder.productName;
      });
      //caso o item a ser adicionado ja tenha sido encontrado, o seu preço é atualizado
      if (productAlreadyInOrder) {
        let product = tmpArr[i];
        product.quantity = product.quantity + productToAddToOrder.quantity;
        if (product.quantity > 15) {
          product.quantity = 15; //max. de 15 unidades por item
          setAlertModal(true);
          setAlertModalContent(
            ReactDOM.createPortal(
              <AlertModal
                text={
                  "Não é possível adicionar mais desse item no pedido atual."
                }
                btnText={"Ok"}
                onCloseModal={modalHandler}
              />,
              document.getElementById("overlay-root")
            )
          );
        }
        product.totalPrice = product.quantity * product.price;
      } else {
        tmpArr.push(productToAddToOrder);
      }

      localStorage.setItem("orderArray", JSON.stringify(tmpArr));
      setOrder(JSON.parse(localStorage.getItem("orderArray")));
    } else {
      //caso nao exista a lista de pedidos no localStorage, ela é criada com o produto adicionado
      localStorage.setItem("orderArray", JSON.stringify([productToAddToOrder]));
      setOrder(JSON.parse(localStorage.getItem("orderArray")));
    }
  };

  //essa funçao atualiza o pedido quando ele é modificado diretamente na sidebar (deletado/quantidade modificada)
  const updateOrderHandler = (updatedOrder) => {
    if (updatedOrder.length <= 0) {
      //se todos os produtos forem deletados da lista, remover array do localStorage e 'esvaziar' state
      localStorage.removeItem("orderArray");
      setOrder();
    } else {
      localStorage.setItem("orderArray", JSON.stringify(updatedOrder));
      setOrder(updatedOrder);
    }
  };

  //Sidebar state
  const [isOpen, setIsOpen] = useState(false);

  //Alert Modal aparecendo ou nao
  const [alertModal, setAlertModal] = useState(false);

  //modalHandler (fecha o modal)
  const modalHandler = (boolean) => {
    setAlertModal(boolean);
  };

  //Conteúdo do alert modal
  const [alertModalContent, setAlertModalContent] = useState(
    ReactDOM.createPortal(
      <AlertModal onCloseModal={modalHandler} />,
      document.getElementById("overlay-root")
    )
  );

  //Sidebar handler
  const toggle = () => setIsOpen(!isOpen);

  ///////////////////////// JSX
  return (
    <>
      {alertModal && alertModalContent}
      <ScrollToTop />
      <Router>
        <GlobalStyle />
        <Navbar toggle={toggle} order={order} />
        {ReactDOM.createPortal(
          <Sidebar
            isOpen={isOpen}
            toggle={toggle}
            order={order}
            onUpdateOrder={updateOrderHandler}
            onRenderAlert={alertHandler}
          />,
          document.getElementById("overlay-root")
        )}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pedido">
            <Cardapio onGetOrder={orderHandler} />
          </Route>
        </Switch>
        <Footer />
      </Router>
      {ReactDOM.createPortal(
        <ReactTooltip place="left" backgroundColor="#e31837" effect="float" />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default App;
