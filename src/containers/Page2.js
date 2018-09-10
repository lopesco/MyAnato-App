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
            <li class="active">
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
          <img
            class="img-fluid"
            src="https://imgur.com/ehKAC6g.png"
            width="408px"
            height="600px"
          />
        </div>
        <center>
          <div class="panel panel-default">
            <div class="panel-heading">Selecione corretamente:</div>
            <div class="panel-body">
              <p>
                Estrutura A:{" "}
                <select class="custom-select">
                  <option selected>Opções</option>
                  <option value="1">Opção 1</option>
                  <option value="2">Opção 2</option>
                  <option value="3">Opção 3</option>
                </select>
              </p>
              <p>
                Estrutura B:{" "}
                <select class="custom-select">
                  <option selected>Opções</option>
                  <option value="1">Opção 1</option>
                  <option value="2">Opção 2</option>
                  <option value="3">Opção 3</option>
                </select>
              </p>
              <p>
                Estrutura C:{" "}
                <select class="custom-select">
                  <option selected>Opções</option>
                  <option value="1">Opção 1</option>
                  <option value="2">Opção 2</option>
                  <option value="3">Opção 3</option>
                </select>
              </p>
              <p>
                Estrutura D:{" "}
                <select class="custom-select">
                  <option selected>Opções</option>
                  <option value="1">Opção 1</option>
                  <option value="2">Opção 2</option>
                  <option value="3">Opção 3</option>
                </select>
              </p>
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
