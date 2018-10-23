import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Page1.css";

export default class Page1 extends Component {
  render() {
    return (
      <div className="Page1">
        <div className="lander">
          <h1>
            <Link to="/mainpage">Página Inicial </Link>/{" "}
            <small> Questões</small>
          </h1>
        </div>
        <div class="container">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="/">
                Anterior
              </a>
            </li>
            <li class="active">
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
              <a class="Page2" href="/page2">
                Próxima
              </a>
            </li>
          </ul>
          <div className="body">
            <img
              class="img"
              src="/img1.png"
              width="193px"
              height="500px"
              alt="img1"
            />
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              Selecione corretamente.
            </div>
            <div class="panel-body">
                <p>
                    Estrutura A:{" "}
                    <select className="custom-select">
                        <option selected>Opções</option>
                        <option value="1">Opção 1</option>
                        <option value="2">Opção 2</option>
                        <option value="3">Opção 3</option>
                    </select>
                </p>
                <p>
                    Estrutura B:{" "}
                    <select className="custom-select">
                        <option selected>Opções</option>
                        <option value="1">Opção 1</option>
                        <option value="2">Opção 2</option>
                        <option value="3">Opção 3</option>
                    </select>
                </p>
                <p>
                    Estrutura C:{" "}
                    <select className="custom-select">
                        <option selected>Opções</option>
                        <option value="1">Opção 1</option>
                        <option value="2">Opção 2</option>
                        <option value="3">Opção 3</option>
                    </select>
                </p>
                <p>
                    Estrutura D:{" "}
                    <select className="custom-select">
                        <option selected>Opções</option>
                        <option value="1">Opção 1</option>
                        <option value="2">Opção 2</option>
                        <option value="3">Opção 3</option>
                    </select>
                </p>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Salvar
          </button>
        </div>
      </div>
    );
  }
}
