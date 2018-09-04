import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Page2.css";

export default class Page2 extends Component {
  render() {
    return (
      <div className="Page2">
        <div className="lander">
          <h1>
            <Link to="/mainpage">Página Inicial </Link>/{" "}
            <small> Questões</small>
          </h1>
        </div>
        <div class="container">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="Page1" href="/page1">
                Anterior
              </a>
            </li>
            <li class="page-item">
              <a class="Page1" href="/page1">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="Page2" href="/page2">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="Page3" href="/page3">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="Page4" href="/page4">
                4
              </a>
            </li>
            <li class="page-item">
              <a class="Page3" href="/page3">
                Próxima
              </a>
            </li>
          </ul>
        </div>
        <div className="body">
          <p>Aponte as estruturas a seguir:</p>
          <img
            class="img-fluid"
            src="https://imgur.com/ehKAC6g.png"
            width="408px"
            height="600px"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Salvar
        </button>
      </div>
    );
  }
}
