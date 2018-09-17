import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Page6.css";

export default class Page6 extends Component {
  render() {
    return (
      <div className="Page6">
        <div className="lander">
          <h1>
            <Link to="/mainpage">Página Inicial </Link>/{" "}
            <small> Questões</small>
          </h1>
        </div>
        <div class="container">
          <ul class="pagination justify-content">
            <li class="page-item">
              <a class="Page5" href="/page5">
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
              <a class="Page5" href="/page5">
                5
              </a>
            </li>
            <li class="active">
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
              <a class="Page7" href="/page7">
                Próxima
              </a>
            </li>
          </ul>
          <div className="body">
            <img
              class="img"
              src="/img6.png"
              width="492px"
              height="500px"
              alt="img6"
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
