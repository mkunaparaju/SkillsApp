import React, { Component, PropTypes } from 'react';

export default class Details extends Component {
  constructor(props) {
    super(props);
  }
  
  
  
  render() {
   
    return (
       <div id = "detailsText"className="col-sm-9">
             <h4><small>Details</small></h4>
             <hr />
            <p>{this.props.details.category}</p>
           </div>
    );
  }
}
Details.propTypes = {
  // This component gets the category to display through a React prop.
  // We can use propTypes to indicate it is required
  details: PropTypes.object.isRequired,
};