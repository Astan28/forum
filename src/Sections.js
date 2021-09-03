
import Section from "./Section";
import "./Sections.css";
import AddSection from "./AddSection";
import { connect } from "react-redux";
import { fetchSections } from "./redux/actions/sectionActions";
import React, { Component } from "react";
import PropTypes from 'prop-types';


// const Sections = ({ sections }) => {
//   const [showAddSection, setShowAddSection] = useState(false);
//   return (
//     <div className="sections">
//       <div className="title">
//         <h1>Lista sekcji</h1>
//         <button
//           type="button"
//           class="btn btn-dark"
//           onClick={() => setShowAddSection(!showAddSection)}
//         >
//           {showAddSection ? "Zwiń" : "Dodaj nową sekcję"}
//         </button>
//       </div>
//       {showAddSection && <AddSection />}
//       {sections.map((section) => (
//         <Section key={section.id} section={section} />
//       ))}
//     </div>
//   );
// };

class Sections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddSection: false
    }
  }

  handleClick = () => {
    this.setState({
      showAddSection: !this.state.showAddSection
    })
  }

    componentDidMount() {
    this.props.fetchSections();
    console.log("component mounted")
  }

  render() {
   console.log(this.props.sections)

    //const { isAuthenticated } = this.props.authReducer;
    return (
      <div className="sections">
        <div className="title">
          <h1>Lista sekcji</h1>
          
          { this.props.authReducer.user.role==='ADMIN' ? <button
            type="button"
            class="btn btn-dark"
            onClick={this.handleClick}
          >
            {this.state.showAddSection ? "Zwiń" : "Dodaj nową sekcję"}
          </button> : null }
         
        </div>
        {this.state.showAddSection && <AddSection />}
        {this.props.sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
      
    );
  }
}

Sections.propTypes = {
  authReducer: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  sections: state.sections.items,
  authReducer: state.authReducer
});
export default connect(mapStateToProps, { fetchSections })(Sections);
