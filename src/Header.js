import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';

let isLogged = false;

function Header() {
    if (isLogged == false)
        return (
            <nav className="header">
                <span className="header__logo"><h1><Link className="header__main" to="/">Forum dla Studentów</Link></h1></span>

                <div className="header__nav">
                    <Link to="/login" className="header__link">
                        <span className="header__option">Logowanie</span>
                    </Link>
                    <Link to="/register" className="header__link">
                        <span className="header__option">Rejestracja</span>
                    </Link>
                </div>
            </nav>
        )
    else return (
        <nav className="header">
            <span className="header__logo"><h1><Link className="header__main" to="/">Forum dla Studentów</Link></h1></span>
            <div className="header__nav">
                <Link to="/user" className="header__link">
                    <span className="header__option">Użytkownik</span>
                </Link>
                <Link to="/register" className="header__link">
                    <span className="header__option">Wyloguj</span>
                </Link>
            </div>
        </nav>
        )            
}

export default Header
