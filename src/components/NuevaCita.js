import React, { Component } from 'react';
import uuid from 'uuid';

class NuevaCita extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cita: {
                 mascota: '',
                 propietario: '',
                 fecha: '',
                 hora: '',
                 sintomas: ''
             },
             error: false
        }
    }

    handleChane = e => {
        let _this = e.target;
        this.setState({
            cita: {
                ...this.state.cita,
                [_this.name] : _this.value
            }
        });
    }

    // cunado el usuario envia el formulario
    handleSubmit = (e) => {
        e.preventDefault();
        
        // extraer los valores del state
        const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;

        // validate fields
        if(
            mascota !== '' &&
            propietario !== '' &&
            fecha !== '' &&
            hora !== '' &&
            sintomas !== ''
          ){
            this.setState({
                error: true
            });

            const nuevaCita = {
                ...this.state.cita,
                id: uuid()
            }

            // Add cita
            this.props.addCita(nuevaCita);                        

          }

        

    }
    
    
    
    
    
    render() {
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>
                    <form 
                        onSubmit={ this.handleSubmit }
                    >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    onChange={ this.handleChane }
                                    value={ this.state.cita.nombre }
                                />
                            </div>
                        </div>  {/* form-group */}
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Dueño
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Dueño Mascota"
                                    name="propietario"
                                    onChange={ this.handleChane }
                                    value={ this.state.cita.nombre }
                                />
                            </div>
                        </div>  {/* form-group */}      
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"
                                    placeholder="Fecha"
                                    name="fecha"
                                    onChange={ this.handleChane }
                                    value={ this.state.cita.nombre }
                                />
                            </div> 
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    placeholder="Hora"
                                    name="hora"
                                    onChange={ this.handleChane }
                                    value={ this.state.cita.nombre }
                                />
                            </div>
                        </div>  {/* form-group */}  
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Síntomas
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="form-control"
                                    name="sintomas"
                                    placeholder="Describe los síntomas"
                                    onChange={ this.handleChane }
                                    value={ this.state.cita.nombre }
                                ></textarea>
                            </div>
                        </div>  {/* form-group */}          
                        <input 
                            type="submit"
                            className="py-3 mt-2 btn btn-success btn-block"
                            value="Nueva Cita"
                        />              
                    </form>
                </div>
            </div>
        );
    }
}

export default NuevaCita;
