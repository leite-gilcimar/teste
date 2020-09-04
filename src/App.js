import React, { Component } from "react";

require("dotenv").config();

//dotenv.settings();
// Apenas um comentário adicional
console.log(process.env.USERDB);
console.log(process.env.PASSDB);

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
          <span>DotUser: {process.env.USERDB} </span>
          <br />
          <span>DotPass: {process.env.PASSDB}</span>
        </div>
      </div>
    );
  }
}
