import React, { Component } from 'react'
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita'
import ListaCitas from './components/ListaCitas'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       citas: []
    }
  }

  // app loading...
  componentDidMount(){
    const citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({ citas: JSON.parse(citasLS) })
    }  
  }

  // update component...
  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }
  
  addCita = data => {
    // copy state
    const citas = [...this.state.citas, data];

    // add new states
    this.setState({ citas });
  }

  deleteCita = id => {
    // copy state
    const oldCitas = [...this.state.citas];

    // filter
    const citas = oldCitas.filter(citas => citas.id !== id);

    // update state
    this.setState({ citas })
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
          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas 
              citas={ this.state.citas }
              deleteCita={ this.deleteCita }
            />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
