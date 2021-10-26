import napolitanaImg from "./Images/napolitana.jpg";
import margheritaImg from "./Images/marguerita.jpg";
import calabresaImg from "./Images/calabresa.jpg";
import frangoImg from "./Images/frango.jpg";
import pepperoniImg from "./Images/pepperoni.jpg";
import brasileiraImg from "./Images/brasileira.jpeg";
import quatroqueijosImg from "./Images/quatroqueijos.jpg";
import vegetarianaImg from "./Images/vegetariana.png";
import baconImg from "./Images/bacon.jpg";
import sliderdoceImg from "./Images/sliderdoce.jpg";
import sliderbrigadeiroImg from "./Images/sliderbrigadeiro.jpg";
import pizzabrigadeiroImg from "./Images/pizzabrigadeiro.jpg";
import aguaImg from "./Images/aguasemgas.jpg";
import cocalataImg from "./Images/cocalata.jpg";
import sucoImg from "./Images/suco.jpg";

const productsData = {
  pizza: {
    napolitana: {
      name: "Napolitana",
      desc: "Parmesão, mussarela, rodelas de tomate, orégano e alho.",
      price: 30,
      img: napolitanaImg,
      category: "Pizza",
    },
    margherita: {
      name: "Margherita",
      desc: "Mussarela coberta com tomates fatiados e um toque de manjericão.",
      price: 30,
      img: margheritaImg,
      category: "Pizza",
    },
    calabresa: {
      name: "Calabresa",
      desc: "Calabresa acompanhada de cebola, azeitonas verdes e mussarela",
      price: 30,
      img: calabresaImg,
      category: "Pizza",
    },
    bacon: {
      name: "Corn & Bacon",
      desc: "Molho de tomate, mussarela, fatias de bacon e milho selecionado.",
      price: 35,
      img: baconImg,
      category: "Pizza",
    },
    frango: {
      name: "Frango com Requeijão",
      desc: "Frango desfiado, mussarela de búfala e requeijão cremoso",
      price: 35,
      img: frangoImg,
      category: "Pizza",
    },

    pepperoni: {
      name: "Pepperoni",
      desc: "Pepperoni com páprica servidos sobre mussarela e molho de tomate.",
      price: 35,
      img: pepperoniImg,
      category: "Pizza",
    },
    vegetariana: {
      name: "Vegetariana",
      desc: "mussarela, cebola, champignon, pimentão verde, milho, rodelas de tomate e azeitonas.",
      price: 40,
      img: vegetarianaImg,
      category: "Pizza",
    },
    quatroqueijos: {
      name: "Quatro Queijos",
      desc: "Molho de tomate, mussarela de búfala, provolone, parmesão e cream cheese.",
      price: 40,
      img: quatroqueijosImg,
      category: "Pizza",
    },
    brasileira: {
      name: "Brasileira",
      desc: "Pepperoni, cebola, pimentão, champignon, seleção de carnes bovina e suína e mussarela.",
      price: 45,
      img: brasileiraImg,
      category: "Pizza",
    },
  },
  sobremesas: {
    pizzabrigadeiro: {
      name: "Média Brigadeiro",
      desc: "Pizza doce de tamanho médio sabor brigadeiro.",
      price: 30,
      img: pizzabrigadeiroImg,
      category: "Sobremesa",
    },
    sliderbrigadeiro: {
      name: "Slider Brigadeiro",
      desc: "Mini-disco de pizza no sabor Brigadeiro.",
      price: 7.9,
      img: sliderbrigadeiroImg,
      category: "Sobremesa",
    },
    sliderdoce: {
      name: "Slider Doce de Leite",
      desc: "Mini-disco de pizza no sabor Doce de Leite.",
      price: 7.9,
      img: sliderdoceImg,
      category: "Sobremesa",
    },
  },
  bebidas: {
    aguaSemGas: {
      name: "Água sem Gás",
      desc: "500ml de água sem gás Crystal.",
      price: 5.5,
      img: aguaImg,
      category: "Bebida",
    },
    suco: {
      name: "Suco Dell Vale",
      desc: "290ml de suco Dell Vale sabor Uva.",
      price: 7.9,
      img: sucoImg,
      category: "Bebida",
    },
    cocalata: {
      name: "Coca-Cola Lata",
      desc: "Refrigerante Coca-Cola em lata de 350ml.",
      price: 7.9,
      img: cocalataImg,
      category: "Bebida",
    },
  },
};

export default productsData;
