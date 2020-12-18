import React from 'react';

import { ParamAccepter } from './features/paramaccepter/ParamAccepter';
import GameOfLife from './features/gameoflife/GameOfLife';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/game-of-life">
          <GameOfLife />
        </Route>
        <Route path="/">
          <ParamAccepter />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
