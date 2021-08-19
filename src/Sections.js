import { computeHeadingLevel } from "@testing-library/dom";
import { useState } from "react";
import Section from "./Section";
import "./Sections.css";
import AddSection from "./AddSection";
import { connect } from "react-redux";
import { fetchSections } from "./redux/actions/sectionActions";
import React, { Component } from "react";
import sectionReducer from "./redux/reducers/sectionReducer";

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

    componentWillMount() {
    this.props.fetchSections();
  }

  render() {
    return (
      <div className="sections">
        <div className="title">
          <h1>Lista sekcji</h1>
         <button
            type="button"
            class="btn btn-dark"
            onClick={this.handleClick}
          >
            {this.state.showAddSection ? "Zwiń" : "Dodaj nową sekcję"}
          </button>
        </div>
        {this.state.showAddSection && <AddSection />}
        {this.props.sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sections: state.sections.items,
});
export default connect(mapStateToProps, { fetchSections })(Sections);
