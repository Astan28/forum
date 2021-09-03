import React, { Component } from 'react';
import {updateSection, fetchSections} from './redux/actions/sectionActions';
import PropTypes from 'prop-types';
import {connect } from 'react-redux';

 class EditSection extends Component {

  constructor(props) {
    super(props);
      this.state = {
        name: '',
        id: this.props.id
      };
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    onSubmit(e) {
      e.preventDefault();
  
      const section = {
        name: this.state.name,
      };
  
      this.props.updateSection(section, this.state.id);
      this.props.fetchSections();
    }
  render() {
    return (
      <div>
                  <form className="AddSection__form" onSubmit={this.onSubmit}>
  
                  <div className="form-group">
                      <label><h4>Nazwa sekcji</h4></label>
                      <input type="text" className="form-control" placeholder="Podaj nazwę" 
                      name="name" 
                      onChange={this.onChange}
                      value={this.state.name}/>
                  </div>
  
                  <button type="submit" class="btn btn-dark">Zapisz</button>
              </form>
              </div>
    );
  }
}

EditSection.propTypes = {
  updateSection: PropTypes.func.isRequired,
  fetchSections: PropTypes.func.isRequired
}
export default connect(null, {updateSection, fetchSections})(EditSection)




// function AddSection() {
//   return (
//     <div>
//                 <form className="AddSection__form" onSubmit={this.onSubmit}>

//                 <div className="form-group">
//                     <label><h4>Nazwa sekcji</h4></label>
//                     <input type="text" className="form-control" placeholder="Podaj nazwę" 
//                     name="name" 
//                     onChange={this.onChange}
//                     value={this.state.name}/>
//                 </div>

//                 <button type="submit" class="btn btn-dark">Zapisz</button>
//             </form>
//             </div>
//   );
// }

// export default AddSection;
