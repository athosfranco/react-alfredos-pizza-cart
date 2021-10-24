import styled from "styled-components";
import ImgBg from "../../Images/pizza-5.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  background-position: center;
  background-size: cover;
  margin: 0;
`;

export const HeroContent = styled.div`
  height: calc(100vh -80px);
  max-height: 100%;
  width: 100vw;
  max-width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #ffff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  /*primeiro arg: valor MÍNIMO que a fonte atingirá
  segundo arg: o valor PREFERIDO que a fonte vai ter;
  terceiro arg: o valor MÁXIMO que a fonte atingirá
   */
  font-family: "Oswald", sans-serif;
  margin-bottom: 1rem;
  letter-spacing: 10px;
  cursor: default;
`;

export const HeroP = styled.p`
  font-size: clamp(1rem, 2.5vw, 2rem);
  margin-bottom: 2rem;
  cursor: default;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const Logo = styled.img`
  transform: scale(0.6);
`;
