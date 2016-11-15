import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Categories, SubCategories } from '../api/categories.js';

import Category from './Category.jsx';

// App component - represents the whole app
class App extends Component {
  
  //   handleSubmit(event) {
  //     event.preventDefault();
 
  //     // Find the text field via the React ref
  //     const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
  //     Categories.insert({
  //       Category,
  //       Description : new Date(), // current time
  //     });
 
  //     // Clear form
  //     ReactDOM.findDOMNode(this.refs.textInput).value = '';
  // }
  
  renderCategories() {
    return this.props.subCat.map((category) => (
      <Category key={category._id} category={category} />
    ));
  }

  render(){
    return(
       <div className='categories-content'>
        {this.renderCategories()}
      </div>);
    }
  }      
//   render() {
//     return (
//       <div className="container">
//         <header>
          
//           <h1>Skill Categories</h1>
//           <AccountsUIWrapper />
//           <form className="new-category" onSubmit={this.handleSubmit.bind(this)} >
//             <input
//               type="text"
//               ref="textInput"
//               placeholder="Type to add new categories"
//             />
//           </form>
          
//         </header>

//         <ul>
//           {this.renderCategories()}
//         </ul>
//       </div>
//     );
//   }
// }

App.propTypes = {
  subCat: PropTypes.array.isRequired,
};


export default createContainer(() => {
  const categoriesWithDup = SubCategories.find({}).fetch().map((catName) => catName.Category);
  const categoryArray = [];
   categoriesWithDup.forEach((item) => {
    if (categoryArray.indexOf(item) < 0) {
      categoryArray.push(item);
    }
  });
  const subCategoryArray = [];
  categoryArray.forEach((e,i) => {
    const sub = SubCategories.find({ Category: e }).fetch();
    subCategoryArray.push(
      {
        category: e,
        subCategory: sub.map((l) => l.Name),
        _id: i,
      }
    );
  });
 window.hihi = subCategoryArray;
  return {
    subCat:subCategoryArray
    //categories: Categories.find({}).fetch(),
  };
}, App);