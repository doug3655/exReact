import React, {Component} from 'react';
import {Button} from 'reactstrap';
import './contador.css';


class Contador extends Component{
    state = {
        numero:0
      }
      aumentar = () => {
        this.setState({ numero: this.state.numero+1})
      }
      diminuir = () => {
        if(this.state.numero>0){
          this.setState({ numero: this.state.numero-1})//troca o valor da propriedade 'numero' de 'state' pelo antigo valor dela -1
          return
        }else{
          return alert('    HOJE NÃO!!!')
        }
      }
      render(){
        return (
          <div>
            <h1 className="contador-titulo">{this.state.numero}</h1>
            <Button className="mr-2 p-1" color="success" outline onClick={this.aumentar}>Aumentar</Button>
            <Button className="p-1" color="danger" outline onClick={this.diminuir}>Diminuir</Button>
           </div>
        );
    } 
}

export default Contador;