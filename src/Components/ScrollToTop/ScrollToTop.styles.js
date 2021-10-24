import styled from "styled-components";

export const ScrollBtn = styled.button`
  opacity: ${(props) => (props.display ? "1" : "0")};
  display: ${(props) => (!props.display ? "none" : "initial")};
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
  cursor: pointer;
  font-size: 2.3rem;
  color: #eeee;
  outline: none;
  background: none;
  border: none;
  transition: 0.2s ease;
  &:hover {
    transform: scale(1.1);
    color: #e31837;
  }
`;
