import React, { Component, PropTypes } from 'react';
import { Categories, SubCategories } from '../api/categories.js';


export default class SubCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleStateOnClick() {
    var name = this.props.subcategory;
    console.log(this.props.subcategory);

    var details = SubCategories.find({Name: name}).fetch()[0].Details
    document.getElementById("details").innerHTML = details
    document.getElementById("detailsField").innerHTML = ""
  }

  render(){
    return(
      <div>
        <li className='list-group-item' onClick={this.toggleStateOnClick.bind(this)}>
                   <p >{this.props.subcategory}</p>
        </li>
      </div>
    );
  }
}

SubCategory.propTypes = {
  // This component gets the category to display through a React prop.
  // We can use propTypes to indicate it is required
  subcategory: PropTypes.object.isRequired,
};