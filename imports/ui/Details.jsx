import React, { Component, PropTypes } from 'react';

export default class Details extends Component {
  constructor(props) {
    super(props);
  }
  
  
  
  render() {
   
    return (
        <header>
          <h1>Details</h1>
        </header>
    );
  }
}
Details.propTypes = {
  // This component gets the category to display through a React prop.
  // We can use propTypes to indicate it is required
  details: PropTypes.object.isRequired,
};