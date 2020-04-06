import React from 'react';
import './App.css';
import AboutArea from './Components/AboutArea/index';
import LandingArea from './Components/LandingArea/index';

class App extends React.Component {
  render(){
  return (
    <div>
    <LandingArea/>,
    <AboutArea/>
    </div>
  )
}
}

export default App;
