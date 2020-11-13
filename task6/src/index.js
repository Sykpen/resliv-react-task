import React from "react";
import ReactDOM from "react-dom";
import App from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacts from "./containers/Employees";
import "bootstrap/dist/css/bootstrap.css";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers/rootReducer";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/employees" component={Contacts} />
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
