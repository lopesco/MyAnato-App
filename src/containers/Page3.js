import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Page3.css";

export default class Page3 extends Component {
  render() {
    return (
      <div className="Page3">
        <div className="lander">
          <h1>
            <Link to="/mainpage">Página Inicial </Link>/{" "}
            <small> Questões</small>
          </h1>
        </div>
        <div class="container">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="Page2" href="/page2">
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
            <li class="active">
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
              <a class="Page4" href="/page4">
                Próxima
              </a>
            </li>
          </ul>
        </div>
        <div className="body">
          <img
            class="img-fluid"
            src="https://imgur.com/dCswWr3.png"
            width="500px"
            height="463px"
          />
        </div>
        <center>
          <div class="panel panel-default">
            <div class="panel-heading">
              A, B, C correspondem respectivamente a:
            </div>
            <div class="panel-body">
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio1"
                  name="customRadio"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadio1">
                  Opção 1
                </label>
              </div>
              <div class="custom-control custom-radio">
                <input
                  type="radio"
                  id="customRadio2"
                  name="customRadio"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="customRadio2">
                  Opção 2
                </label>
              </div>
            </div>
          </div>
        </center>
        <button type="submit" class="btn btn-primary">
          Salvar
        </button>
      </div>
    );
  }
}
