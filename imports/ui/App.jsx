import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Categories, SubCategories } from '../api/categories.js';

import Category from './Category.jsx';
import Details from './Details.jsx';
// App component - represents the whole app
export default class App extends Component {
  
  renderCategories() {
    return this.props.subCat.map((category) => (
      <Category key={category._id} category={category} />
    ));
  }
  
  render(){
    return(
      <div>
          <AccountsUIWrapper />
          <div className="input-group">
             <input type="text" class="form-control" placeholder="Search Categories.."/>
               <span className="input-group-btn">
                 <button className="btn btn-default" type="button">
                   <span className="glyphicon glyphicon-search"></span>
                 </button>
               </span>
           </div>
          <div className="col-sm-3 ">
            {this.renderCategories()}
          </div>
        </div>
      );
    }
  }   

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
 //window.hihi = subCategoryArray;
  return {
    subCat:subCategoryArray
    //categories: Categories.find({}).fetch(),
  };
}, App);