import React, { Component } from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchSection } from "./redux/actions/sectionActions";
import { Card, Button, Table } from "react-bootstrap";

class Threads extends Component {
  constructor(props) {
    super(props);
    this.state = { sectionId: this.props.match.params.id};
  }
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

     componentDidMount() {
      console.log(this.state.sectionId);
    this.props.fetchSection(this.state.sectionId);
     console.log("component mounted");
   }

  render() {
    // const { match } = this.props;
    // this.props.fetchSection(match.params.id);
console.log(this.props.section)

    return (
      <div className="container">
        <h2>{this.props.section.name}</h2>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              { <th colSpan="2">Tematy {this.state.sectionId}</th> }
            </tr>
          </thead>
          <tbody>
          {/* { this.props.section.threads.map((threads) => (
  <tr key={threads.id}>
              <td>1</td>
              <td>
                <Card>
                  <Card.Body>
                    <Card.Title>{threads.name}</Card.Title>
                    <Card.Text>
                    {threads.name}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </td>
              <td>Otto</td>
            </tr>

))}   */}
          </tbody>
        </Table>
      </div>
    );
  }
}


// Threads.propTypes = {
//   authReducer: PropTypes.object.isRequired,
// };
const mapStateToProps = (state) => ({
  section: state.sections.item,
});

export default withRouter(connect(mapStateToProps, { fetchSection })(Threads));
