import React, { Component } from 'react';

import './sass/main.scss';
import {Animated} from "react-animated-css";
import {AnimatePresence, motion} from 'framer-motion';
import { BrowserRouter as Router, Switch, Link, Redirect, Route } from 'react-router-dom'

import 'animate.css/animate.css';
// pages
import Mainpage from './pages/';
import NotFoundPage from './pages/404';
import ChowdownPage from './pages/chowdown';
import InkTankPage from './pages/inktank';
import SoulMarcosPage from './pages/soulmarcos';
import CareOf from './pages/careof';
//components
class App extends Component {
  render() {
    return (

      <div className="App">

<Router>
  <AnimatePresence>
<Switch>
  <Route exact path="/" component={Mainpage} /> 
  <Route exact path="/chowdown" component={ChowdownPage} />
  <Route exact path="/careof" component={CareOf} />
  <Route exact path="/inktank" component={InkTankPage} />
  <Route exact path="/soulmarcos" component={SoulMarcosPage} />
  <Route exact path="/404" component={NotFoundPage} />
  {/* <Redirect to="/404" /> */}
  </Switch>
  </AnimatePresence>
</Router>
      </div>


    );
  }
}

export default App;