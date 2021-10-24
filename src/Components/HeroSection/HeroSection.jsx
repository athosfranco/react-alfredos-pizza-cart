import React from "react";
import { Link } from "react-router-dom";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroSection.styles";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>Alfredo's Pizzeria</HeroH1>
          <HeroP>Autêntica Pizza Italiana</HeroP>

          <Link to="/pedido" style={{ textDecoration: "none", color: "white" }}>
            <HeroBtn>Ver Cardápio</HeroBtn>
          </Link>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
