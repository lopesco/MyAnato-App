import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Page3.css";

export default class Page3 extends Component {
  render() {
    return (
      <div className="Page3">
        <div className="lander">
          <h1>
            <Link to="/mainpage">Página Inicial</Link> / <small> Questões</small>
          </h1>
        </div>
        <div class="container">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="Page3" href="/page3">
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
            <li class="active">
              <a class="Page4" href="/page4">
                4
              </a>
            </li>
            <li class="page-item disabled">
              <a class="page-link" href="#">
                Próxima
              </a>
            </li>
          </ul>
        </div>
        <div className="body">
          <img
            class="img-fluid"
            src="https://imgur.com/DYyR9Ed.png"
            width="582px"
            height="600px"
          />
        </div>
        <center>
          <div class="panel panel-default">
            <div class="panel-heading">Escreva o nome de cada peça:</div>
            <div class="panel-body">
              <center>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="">
                      A
                    </span>
                  </div>
                  <input type="text" class="form-control" />
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="">
                      B
                    </span>
                  </div>
                  <input type="text" class="form-control" />
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="">
                      C
                    </span>
                  </div>
                  <input type="text" class="form-control" />
                </div>
              </center>
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
