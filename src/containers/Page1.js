import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
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
              <a class="page-link" href="#">
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
              <a class="Page2" href="/page2">
                Próxima
              </a>
            </li>
          </ul>
        </div>
        <div class="row">
          <div className="body">
            <img
              class="img-fluid"
              src="https://imgur.com/dqPc34L.png"
              width="368px"
              height="599px"
            />
          </div>
          <center>
            <div class="panel panel-default">
              <div class="panel-heading">
                Selecione as opções que estão na imagem ao lado.
              </div>
              <div class="panel-body">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="" />
                    Opção 1
                  </label>
                </div>
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="" />
                    Opção 2
                  </label>
                </div>
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="" />
                    Opção 3
                  </label>
                </div>
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="" />
                    Opção 4
                  </label>
                </div>
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="" />
                    Opção 5
                  </label>
                </div>
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="" />
                    Opção 6
                  </label>
                </div>
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="" />
                    Opção 7
                  </label>
                </div>
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="" />
                    Opção 8
                  </label>
                </div>
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="" />
                    Opção 9
                  </label>
                </div>
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="" />
                    Opção 10
                  </label>
                </div>
              </div>
            </div>
          </center>
        </div>
        <button type="submit" class="btn btn-primary">
          Salvar
        </button>
      </div>
    );
  }
}
