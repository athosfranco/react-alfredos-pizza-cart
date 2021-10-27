import React from "react";
import {
  FooterContainer,
  Columns,
  Column,
  MainTitle,
  AboutText,
  ReadMore,
  UnorderedList,
  SubFooterContainer,
  SocialMediaRow,
  SocialMediaLink,
  TwitterIcon,
  TweetContainer,
  Tweet,
  Row,
  TweetTime,
  InstagramGrid,
  InstagramPicture,
} from "./Footer.styles";
import {
  FaInstagramSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import igpic1 from "../../Images/product-1.jpg";
import igpic2 from "../../Images/product-2.jpg";
import igpic3 from "../../Images/product-3.jpg";
import igpic4 from "../../Images/sweet-1.jpg";
import igpic5 from "../../Images/sweet-2.jpg";
import igpic6 from "../../Images/sweet-3.jpg";
import igpic7 from "../../Images/pizza-3.jpg";
import igpic8 from "../../Images/pizza-2.jpg";
import igpic9 from "../../Images/pizza-1.jpg";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Columns>
          <Column>
            <MainTitle>Alfredo's Pizzeria</MainTitle>
            <AboutText>
              Lorem sit amet, ectetr iscinit. Vestibulum vel sum er, suscipieros
              quis by lorem.
            </AboutText>
            <AboutText>
              Sed ventis nisl a auris laoreet, at ncidnt lectus volutpat.
              Etiam...
            </AboutText>
            <ReadMore>Ler Mais</ReadMore>
          </Column>
          <Column>
            <MainTitle>Horário de Funcionamento</MainTitle>
            <UnorderedList>
              <li>SEGUNDA ............ Fechado</li>
              <li>TER - SEX ............ 6pm - 23pm </li>
              <li>SÁBADO ............ 7pm - 00am </li>
              <li>DOM ............ 6pm - 22pm</li>
            </UnorderedList>
          </Column>
          <Column>
            <MainTitle>Últimos Tweets</MainTitle>
            <TweetContainer>
              <Row>
                <TwitterIcon />
                <Tweet>Sed ventis nisl a au at ncidnt ctus volutpat.</Tweet>
              </Row>
              <TweetTime>2 Horas Atrás</TweetTime>
            </TweetContainer>
            <TweetContainer>
              <Row>
                <TwitterIcon />
                <Tweet>At vero eos et dignissimos ducimus qui blandit.</Tweet>
              </Row>
              <TweetTime>9 Horas Atrás</TweetTime>
            </TweetContainer>
            <TweetContainer>
              <Row>
                <TwitterIcon />
                <Tweet>Sed ut perspiciatis sit voluptatem accusantium.</Tweet>
              </Row>
              <TweetTime>16 Horas Atrás</TweetTime>
            </TweetContainer>
          </Column>
          <Column>
            <MainTitle>Instagram</MainTitle>
            <InstagramGrid>
              <InstagramPicture src={igpic1} loading="lazy"></InstagramPicture>
              <InstagramPicture src={igpic2} loading="lazy"></InstagramPicture>
              <InstagramPicture src={igpic3} loading="lazy"></InstagramPicture>
              <InstagramPicture src={igpic7} loading="lazy"></InstagramPicture>
              <InstagramPicture src={igpic8} loading="lazy"></InstagramPicture>
              <InstagramPicture src={igpic4} loading="lazy"></InstagramPicture>
              <InstagramPicture src={igpic5} loading="lazy"></InstagramPicture>
              <InstagramPicture src={igpic6} loading="lazy"></InstagramPicture>
              <InstagramPicture src={igpic9} loading="lazy"></InstagramPicture>
            </InstagramGrid>
          </Column>
        </Columns>
      </FooterContainer>
      <SubFooterContainer>
        <SocialMediaRow>
          <SocialMediaLink href="/">
            <FaInstagramSquare />
          </SocialMediaLink>

          <SocialMediaLink href="/">
            <FaTwitterSquare />
          </SocialMediaLink>

          <SocialMediaLink
            href="https://github.com/athosfranco"
            target="_blank"
          >
            <FaGithubSquare />
          </SocialMediaLink>

          <SocialMediaLink
            href="https://www.linkedin.com/in/athosfranco/"
            target="_blank"
          >
            <FaLinkedin />
          </SocialMediaLink>
        </SocialMediaRow>

        <SocialMediaLink href="https://github.com/athosfranco" target="_blank">
          {" "}
          <span>Made with ❤ by Athos Franco</span>
        </SocialMediaLink>
      </SubFooterContainer>
    </>
  );
};

export default Footer;
