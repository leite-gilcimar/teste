import React, { Component } from "react";

require("dotenv").config();

//dotenv.settings();
// Apenas um comentário adicional
console.log(process.env.USERDB);

export default class App extends Component {
  render() {
    return (
      <div>
        TESTE project Git
        <div>
          <span>Usuário</span>
          <input type="text"></input>
          <span>Senha</span>
          <input type="password"></input>
          <span>Dot: {process.env.USERDB}</span>
        </div>
      </div>
    );
  }
}
