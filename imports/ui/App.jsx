import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Categories } from '../api/categories.js';

import Category from './Category.jsx';

// App component - represents the whole app
class App extends Component {
  
    handleSubmit(event) {
      event.preventDefault();
 
      // Find the text field via the React ref
      const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
      Categories.insert({
        Category,
        Description : new Date(), // current time
      });
 
      // Clear form
      ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
  
  renderCategories() {
    return this.props.categories.map((category) => (
      <Category key={category._id} category={category} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          
          <h1>Skill Categories</h1>
          <AccountsUIWrapper />
          <form className="new-category" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new categories"
            />
          </form>
          
        </header>

        <ul>
          {this.renderCategories()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    categories: Categories.find({}).fetch(),
  };
}, App);