import React from "react";
import ReactDOM from "react-dom";

import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./pages/Layout";
import Activities from "./pages/Activities";

const app = document.getElementById('app');
ReactDOM.render(
   <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Activities}></IndexRoute>
    </Route>
   </Router>,
app);
