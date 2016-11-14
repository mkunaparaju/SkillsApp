import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Category extends Component {
  render() {
    return (
      <li>{this.props.category.Category}</li>
    );
  }
}

Category.propTypes = {
  // This component gets the category to display through a React prop.
  // We can use propTypes to indicate it is required
  category: PropTypes.object.isRequired,
};