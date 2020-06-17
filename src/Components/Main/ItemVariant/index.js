import React from 'react';
import './index.css';
import { connect } from "react-redux";
import {tooglevariantInformation} from "./../../../Redux/Actions";

export class ItemVariant extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };

  }
  

  render() {
    return (<div className="variantPanel">
      <h4>Variants <i onClick={()=>{
        this.props.tooglevariantInformation(false);
      }} className="fas fa-times-circle"></i></h4>

     {this.props.variantInformation.items.map(item=>{
       return <div className="variantItem">
        <h5>{item.name}</h5> 
        <h6>Price: {item.price}</h6> 
        <h6>{item.inStock ? "In-Stock" : "Out of Stock"}</h6> 
       </div>
     })}
    </div>);
  }

};

const mapStateToProps = state => {
  return { variantInformation: state.variantInformation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tooglevariantInformation: (bol)=> dispatch(tooglevariantInformation(bol))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ItemVariant);