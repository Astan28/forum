import { Link } from "react-router-dom";
import "./Sections.css";
import AddSection from "./AddSection";
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
    };
  }
  handleClick = () => {
    this.setState({
      showEditSection: !this.state.showEditSection,
    });
  };

  render() {
    return (
      <span>
      <div className="section">
        <h3>{this.props.section.name}</h3>
          <button type="button" class="btn btn-dark" onClick={this.handleClick}>
            {this.state.showEditSection ? "Zwiń" : "Edytuj"}
          </button>
          <button type="button" class="btn btn-dark">
            Usuń
          </button>

        
      </div>
      {this.state.showEditSection && <AddSection />}
      </span>
    );
  }
}
export default Section;
