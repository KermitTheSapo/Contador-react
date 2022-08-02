import React, { Component } from "react";
import * as S from "./components/style.js"

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
      <S.Div>
          <S.GlobalStyle/>
          <S.Butoes onClick={this.add}>+</S.Butoes>
          <S.Numero>{this.state.contador}</S.Numero>
          <S.Butoes onClick={this.remove}>-</S.Butoes>
      </S.Div>
    );
  }
}
