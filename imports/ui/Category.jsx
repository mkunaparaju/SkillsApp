import React, { Component, PropTypes } from 'react';

// Category component - represents a single category item
export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
//getting the sub Categories

   getSubCategories() {
    return this.state.isOpen ?
    this.props.category.subCategory.map((e, i) =>
      <li key={i} className='list-group-item'>{e}</li>
    ) : '';
  }

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
                   {this.props.category.category}
                  </li>
                     {this.getSubCategories()}
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