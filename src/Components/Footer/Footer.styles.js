import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";

export const FooterContainer = styled.footer`
  background-color: #212121;
  color: #eeee;
  min-height: 520px;
  width: 100%;
  cursor: default;
  padding-bottom: 150px;

  @media screen and (max-width: 450px) {
    padding-bottom: 50px;
  }
`;

export const Columns = styled.div`
  display: flex;
  flex-direction: row;
  height: 430px;
  max-width: 100vw;

  @media screen and (max-width: 450px) {
    height: 100%;
    flex-direction: column;
  }
  @media screen and (min-width: 535px) and (max-width: 1025px) {
    height: 100%;
    flex-direction: column;
  }
`;

export const Column = styled.div`
  min-width: 25%;
  max-width: 25vw;
  padding: 100px;
  @media screen and (max-width: 450px) {
    padding: 50px 50px 0px 50px;
    max-width: 80vw;
  }
  @media screen and (min-width: 535px) and (max-width: 1025px) {
    max-width: 80vw;
    padding: 50px 50px 0px 50px;
  }
`;

export const MainTitle = styled.h1`
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  width: 85%;
  height: 100px;
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 90px;
  }
`;

export const AboutText = styled.p`
  color: #999999;
  padding: 20px 0;
  @media screen and (min-width: 535px) and (max-width: 1025px) {
    padding: 10px 0;
    font-size: 1.2rem;
  }
`;

export const ReadMore = styled.h3`
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  max-width: 25%fit-content;
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    color: #ffc500;
  }
  @media screen and (min-width: 535px) and (max-width: 1025px) {
    font-size: 1.3rem;
  }
`;

export const UnorderedList = styled.ul`
  li {
    padding-top: 20px;
    text-decoration: none;
    list-style-type: none;
    margin-bottom: 26px;
    color: #999999;
    &:hover {
      color: #ffc500;
    }
    @media screen and (min-width: 760px) and (max-width: 1025px) {
      padding-top: 10px;
      font-size: 1.2rem;
    }
  }
`;

export const SubFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #171717;
  color: #eeee;
  height: 120px;
  box-shadow: 1px 2px 18px 8px rgba(0, 0, 0, 0.52);
`;

export const SocialMediaRow = styled.div`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Tweet = styled.p`
  padding-left: 10px;
  padding-bottom: 5px;
  width: 100%;
  @media screen and (min-width: 760px) and (max-width: 1025px) {
    font-size: 1.2rem;
  }
`;

export const TweetContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  color: #999999;
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    color: #ffc500;
  }
`;

export const TwitterIcon = styled(FaTwitter)`
  font-size: 2rem;
`;

export const TweetTime = styled.p``;

export const SocialMediaLink = styled.a`
  text-decoration: none;
  transition: 0.3s ease-out;
  &:visited,
  &:active {
    color: #eeee;
  }
  cursor: pointer;
  &:hover {
    color: #ffc500;
    transform: translateY(-5px);
    transition: 0.3s ease-out;
  }
`;

export const InstagramGrid = styled.div`
  display: grid;
  grid-template-columns: 90px 90px 90px;
  grid-template-rows: 90px 90px 90px;
  grid-gap: 4px;
  @media screen and (min-width: 535px) and (max-width: 1025px) {
    grid-template-columns: 120px 120px 120px;
    grid-template-rows: 120px 120px 120px;
  }
`;

export const InstagramPicture = styled.img`
  width: 90px;
  height: 90px;
  cursor: pointer;
  transition: 0.1s ease-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.28);
    transition: 0.1s ease-out;
  }
`;
