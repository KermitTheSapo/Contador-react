import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

export const Div = styled.div`
  background-color:aquamarine;
  justify-content:space-evenly;
  align-items:center;
  height: 100vh;
  display:flex;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }
`

export const Butoes = styled.button`
  height:10vh;
  width:15%;
  font-size:40px;
  border-radius:10px;
  @media (max-width: 900px) {
    width: 30%;
  }
`

export const Numero = styled.h1`
  font-size: 50px;
`