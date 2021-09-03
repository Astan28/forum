import "./Login.css"
import {Link } from "react-router-dom";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from "./redux/actions/authActions";

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             password:''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    submitHandler = e => {
        e.preventDefault()
        const user = {
            name: this.state.name,
            password: this.state.password
        };

        this.props.login(user);
    }
    render() {
        const {name, password} = this.state
        
        return (
            <div>
                <form className="login__form" onSubmit={this.submitHandler} >
                <h3>Logowanie</h3>

                <div className="form-group">
                    <label>Nazwa</label>
                    <input type="text" className="form-control" placeholder="Podaj nazwę" name="name" value={name} onChange={this.changeHandler} />
                </div>

                <div className="form-group">
                    <label>Hasło</label>
                    <input type="password" className="form-control" placeholder="Podaj hasło" name="password" value={password} onChange={this.changeHandler}  />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Zaloguj</button>
                <p className="forgot-password text-center">
                    Nie masz konta? <Link to="/register">Zarejestruj się</Link>
                </p>
            </form>
            </div>
        )
    }
}
Login.propTypes = {
    login: PropTypes.func.isRequired
}
export default connect(null, {login})(Login)
