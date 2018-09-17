import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Page5.css";

export default class Page5 extends Component {
  render() {
    return (
      <div className="Page5">
        <div className="lander">
          <h1>
            <Link to="/mainpage">Página Inicial </Link>/{" "}
            <small> Questões</small>
          </h1>
        </div>
        <div class="container">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="Page4" href="/page4">
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
            <li class="active">
              <a class="Page5" href="/page5">
                5
              </a>
            </li>
            <li class="page-item">
              <a class="Page6" href="/page6">
                6
              </a>
            </li>
            <li class="page-item">
              <a class="Page7" href="/page7">
                7
              </a>
            </li>
            <li class="page-item">
              <a class="Page6" href="/page6">
                Próxima
              </a>
            </li>
          </ul>
          <div class="body">
            <img
              class="img"
              src="/img5.png"
              width="550"
              height="426"
              alt="img5"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Salvar
          </button>
        </div>
      </div>
    );
  }
}
