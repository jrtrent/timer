import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import Timer from "./components/Timer";
import './App.css';
global.jQuery = require('jquery');
require('bootstrap');

class App extends Component {
  render() {
    return (
      <div className="app-content center-block">
        <Panel>
          <Panel.Body>
           <Timer />
                          
          </Panel.Body>
        </Panel>
  </div>
      
    
    );

       
  }
}

export default App;
