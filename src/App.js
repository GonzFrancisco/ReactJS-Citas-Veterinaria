import React, { Component } from 'react'
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       citas: []
    }
  }
  
  addCita = data => {
    // copy state
    const citas = [...this.state.citas, data];

    // add new states
    this.setState({ citas });
  }

  render() {
    return (
      <div className="container">
        <Header 
          titulo="Administrador de Pacientes Veterinaria"
        />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita 
              addCita={ this.addCita }
            />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
