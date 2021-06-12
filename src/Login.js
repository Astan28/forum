import "./Login.css"
import {Link, useHistory } from "react-router-dom";
import axios from 'axios'
import React, { Component } from 'react'

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
        console.log(this.state)
        axios.post('http://localhost:8080/users/login', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
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

export default Login
