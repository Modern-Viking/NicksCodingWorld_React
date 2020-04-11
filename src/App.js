import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Main from './Pages/Main';
import Resume from './Pages/Resume';

const App = function() {
  return (
    <Router>
      <Route exact path="/" component={Main}/>
      <Route exact path="/resume" component={Resume}/>
    </Router>
  )
}

export default App;
