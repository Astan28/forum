import "./Register.css"
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'


export class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            password: '',
            matchingPassword: '',
            email: ''

        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8080/users', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

        render() {
    const { name, password, matchingPassword, email } = this.state
    return (
        <div>
            <form className="register__form" onSubmit={this.submitHandler}>
                <h3>Rejestracja</h3>

                <div className="form-group">
                    <label>Nazwa</label>
                    <input type="text" className="form-control" placeholder="Nazwa" name="name" value={name} onChange={this.changeHandler} />
                </div>

                <div className="form-group">
                    <label>Hasło</label>
                    <input type="password" className="form-control" placeholder="Podaj hasło" name="password" value={password} onChange={this.changeHandler} />
                </div>

                <div className="form-group">
                    <label> Powtórz hasło</label>
                    <input type="password" className="form-control" placeholder="Powtórz hasło" name="matchingPassword" value={matchingPassword} onChange={this.changeHandler} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Podaj email" name="email" value={email} onChange={this.changeHandler} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Zarejestruj się</button>
                <p className="forgot-password text-center">
                    Masz już konto? <Link to="/login">Zaloguj się</Link>
                </p>
            </form>
        </div>
    )
}
}

export default Register
