import { Link } from "react-router-dom";
import "./Sections.css";
import EditSection from "./EditSection";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {deleteSection, fetchSections} from './redux/actions/sectionActions';
// import { connect } from "react-redux";
// import { saveSection, deleteSection } from "./redux";

// const mapStateToProps = (storeData) => ({
//   sections: storeData.sections
// })

// const mapDispatchToProps = {
//   saveCallback: saveSection,
//   deleteCallback: deleteSection
// }

// const connectFunction = connect(mapStateToProps, mapDispatchToProps);

// const Section = ({ section }) => {
//   return (
//     <div className="section">
//       <h3>
//         {section.name}

//       </h3>
//       <button type="button" class="btn btn-dark">
//           Edytuj
//         </button>
//         <button type="button" class="btn btn-dark">
//           Usuń
//         </button>
//     </div>
//   );
// };

// export default Section;

import React, { Component } from "react";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditSection: false,
      id: this.props.section.id
    };
    this.onDelete = this.onDelete.bind(this);
  }
  handleClick = () => {
    this.setState({
      showEditSection: !this.state.showEditSection,
    });
  };


  onDelete(e) {
e.preventDefault();
    this.props.deleteSection(this.state.id);
    console.log("deleting");
    this.props.fetchSections();
  }

  render() {
    
    const editor = (
      <span>
        <button type="button" className="btn btn-dark" onClick={this.handleClick}>
          {this.state.showEditSection ? "Zwiń" : "Edytuj"}
        </button>
        <button type="button" className="btn btn-dark" onClick={this.onDelete} >
          Usuń
        </button>
      </span>
    );



    return (
      <span>
        <div className="section">
          <h3>
            <Link to={`/boards/${this.props.section.id}`} className="title">
              {this.props.section.name}
            </Link>
          </h3>
          {this.props.authReducer.user.role === "ADMIN" ? editor : null}
        </div>
        {this.state.showEditSection && (
          <EditSection id={this.props.section.id} />
        )}
      </span>
      
    );
  }
}

Section.propTypes = {
  authReducer: PropTypes.object.isRequired,
  deleteSection: PropTypes.func.isRequired,
  fetchSections: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
  authReducer: state.authReducer,
});
export default connect(mapStateToProps, {deleteSection, fetchSections})(Section);
