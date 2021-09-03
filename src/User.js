import React, { Component } from "react";
import { ListGroup, Row, Col, Tab } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

export class User extends Component {
  render() {

    return (
        <Tab.Container
          id="list-group-tabs-example"
          defaultActiveKey="#info"
          className="container"
        >
          <Row className="m-10">
            <Col sm={2} >
              <ListGroup>
                <ListGroup.Item action href="#info">
                  Info
                </ListGroup.Item>
                <ListGroup.Item action href="#name">
                  Zmień nazwę
                </ListGroup.Item>
              <ListGroup.Item action href="#password">
                  Zmień hasło
                </ListGroup.Item>
              </ListGroup>
            </Col>
            
            <Col sm={5}>
              <Tab.Content>
                <Tab.Pane eventKey="#info">
                  <h2>Informacje o użytkowniku:</h2>
                  <h6>Nazwa użytkownika:</h6>
                  <label>{this.props.authReducer.user.name}</label>
                  <h6>Email:</h6>
                  <label>{this.props.authReducer.user.email}</label>
                  <h6>Rola:</h6>
                  <label>{this.props.authReducer.user.role}</label>

                </Tab.Pane>
                <Tab.Pane eventKey="#name">
                  <h2>Zmiana nazwy użytkownika</h2>
                  <label>Podaj nową nazwę użytkownika: </label>
                  <input type="text" className="form-control" placeholder="Podaj nazwę" />
                </Tab.Pane>
                <Tab.Pane eventKey="#password">
                <h2>Zmiana hasła</h2>
                  <label>Podaj noew hasło: </label>
                  <input type="password" className="form-control" />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
    );
  }
}

User.propTypes = {
    authReducer: PropTypes.object.isRequired
  }
  
  function mapStateToProps(state) {
    return {
      authReducer: state.authReducer
    };
  }
export default connect(mapStateToProps)(User);