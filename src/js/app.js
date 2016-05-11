import React from "react";
import ReactDOM from "react-dom";

import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./pages/Layout";
import Timeline from "./pages/Timeline";

const app = document.getElementById('app');
ReactDOM.render(
   <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Timeline}></IndexRoute>
    </Route>
   </Router>,
app);
