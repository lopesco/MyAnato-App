import React, { Component } from "react";
import { Button, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MainPage.css";

export default class MainPage extends Component {
  render() {
    return (
      <div className="MainPage">
        <div className="lander">
          <h1>Página Inicial</h1>
          <div className="body">
            <form>
              <center>
                <FormGroup>
                  <Link to="/page1">
                    <p>
                      <Button bsSize="large">Abrir questões</Button>
                    </p>
                  </Link>
                </FormGroup>
              </center>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
