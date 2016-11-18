import React, { Component, PropTypes } from 'react';
import { Categories, SubCategories } from '../api/categories.js';
import SubCategory from './SubCategory.jsx';
// Category component - represents a single category item
export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
//getting the sub Categories

  //  getSubCategories() {
  //   return this.state.isOpen ?
  //   this.props.category.subCategory.map((e, i) =>
  //   <p onClick={this.rendersubDetails(e)}>
  //     <li key={i} className='list-group-item' id="subcat">{e}</li>
  //     </p>
  //   ) : '';
  // }

getSubCategories(){
  return this.state.isOpen?
  this.props.category.subCategory.map((e,i) =>
   <SubCategory key= {i} subcategory={e} />       
      ) : "";
}
renderDetails()
  {
    var name = this.props.category.category
    var desc = Categories.find({Name: name}).fetch()[0].Description
    document.getElementById("detailsField").innerHTML = desc
    document.getElementById("details").innerHTML = ""
    return this.state.isOpen ?
    console.log(desc) : console.log("not open") ;
  }

// rendersubDetails(e)
//     {
//       console.log(e);
//       var name = this.props.category.category
//       var desc = Categories.find({Name: name}).fetch()[0].Description
//       desc1 ="sdfsdsdgdsgdsgDS"
//       document.getElementById("detailsField").innerHTML = name
//       console.log("isOpentest") 
//     }

// toggleSubState(){
//   isSubOpen = isOpen;
// }

toggleStateOnClick() {
    this.setState({
      isOpen: !this.state.isOpen,     
    });
  }
  
  render(){
    return(
      
          <div>
           <ul className="list-group" id="categoriesList">
                <div className={'categories-' + (this.state.isOpen ? 'open' : 'close')} key={this.props.category._id}>
                  <li className='list-group-item' key={this.props.category._id}
                   onClick={this.toggleStateOnClick.bind(this)}>
                   <p >{this.props.category.category}</p>
                  </li>
                       {this.getSubCategories()}
                     {this.renderDetails()}
                </div>
           </ul><br />
           </div>    
    );
  }
}

//   render() {
//     return (
//       <li>{this.props.category.Name}</li>
//     );
//   }
// }

Category.propTypes = {
  // This component gets the category to display through a React prop.
  // We can use propTypes to indicate it is required
  category: PropTypes.object.isRequired,
};