import React, { Component, Fragment } from "react";
import Header from '../Header'

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container main_wrapper">
            <h2>Я мейн</h2>
        </div>
      </Fragment>
    );
  }
}

export default Main;
