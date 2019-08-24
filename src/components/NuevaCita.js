import React, { Component } from 'react';
import uuid from 'uuid';

const initialState = {
    cita: {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    },
    error: true
}

class NuevaCita extends Component {
    constructor(props) {
        super(props);
    
        this.state = { ...initialState };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
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
            mascota === '' &&
            propietario === '' &&
            fecha === '' &&
            hora === '' &&
            sintomas === ''
          ){
            this.setState({
                error: false
            });
          }else{

            const nuevaCita = {
                ...this.state.cita,
                id: uuid()
            }

            // Add cita
            this.props.addCita(nuevaCita);      
            
            // reset form
            this.setState({
                ...initialState,             
            
            });

          }

        

    }
    
    
    render() {

        const { error } = this.state;

        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>

                    { !error ? <div className="alert alert-danger nt-2 mb-5 text-center">
                        Todos los campos son obligatorios
                    </div> : null }

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
                                    onChange={ this.handleChange }
                                    value={ this.state.cita.mascota }
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
                                    onChange={ this.handleChange }
                                    value={ this.state.cita.propietario }
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
                                    onChange={ this.handleChange }
                                    value={ this.state.cita.fecha }
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
                                    onChange={ this.handleChange }
                                    value={ this.state.cita.hora }
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
                                    onChange={ this.handleChange }
                                    value={ this.state.cita.sintomas }
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
