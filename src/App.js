import React, {Component} from 'react';
import {Button} from 'reactstrap';
import Contador from './componentes/contador/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/global.css';
 

class App extends Component {
  render(){
    return <Contador/>
  }
}

export default App;