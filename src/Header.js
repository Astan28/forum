import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { logout } from "./redux/actions/authActions";

class Header extends React.Component {

    logout(e) {
        e.preventDefault();
        this.props.logout();
    }
  render() {
       const { isAuthenticated } = this.props.authReducer;

      const loggedUser = (
        <div className="header__nav">
        <Link to="/user" className="header__link">
            <span className="header__option">{this.props.authReducer.user.name}</span>
        </Link>
        <Link to="/register" className="header__link">
            <span className="header__option" onClick={this.logout.bind(this)}>Wyloguj</span>
        </Link>
    </div>
      );
      const guest = (
        <div className="header__nav">
        <Link to="/login" className="header__link">
          <span className="header__option">Logowanie</span>
        </Link>
        <Link to="/register" className="header__link">
          <span className="header__option">Rejestracja</span>
        </Link>
      </div>
      );


    return (
      <nav className="header">
        <span className="header__logo">
          <h1>
            <Link className="header__main" to="/">
              Forum dla Studentów
            </Link>
          </h1>
        </span>

        { isAuthenticated ? loggedUser : guest}
        
      </nav>
    );
  }
}

Header.propTypes = {
    authReducer: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }
  
  function mapStateToProps(state) {
    return {
      authReducer: state.authReducer
    };
  }
export default connect(mapStateToProps, { logout })(Header);

