import React, { Component } from "react";
import styled from "styled-components"

const Div = styled.div`
  background-color:aquamarine;
  justify-content:space-evenly;
  align-items:center;
  height: 100vh;
  display:flex;
`

const Butoes = styled.button`
  height:10vh;
  width:15%;
  font-size:20px;
  border-radius:10px;
`

const Numero = styled.h1`
  font-size: 50px;
`


export default class App extends Component {
  state = {
    contador: 0
  };

  add = () => {
    this.setState({
      contador: this.state.contador <=99 ? this.state.contador +1 : this.state.contador + 0
    })
  };

  remove = () => {
    this.setState({
      contador: this.state.contador >= 1? this.state.contador -1 : this.state.contador = 0
    })
  };

  render() {
    return (
      <Div>
        <Butoes onClick={this.add}>+</Butoes>
        <Numero>{this.state.contador}</Numero>
        <Butoes onClick={this.remove}>-</Butoes>
      </Div>
    );
  }
}
