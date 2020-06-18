import React from 'react';
import './index.css';
import { connect } from "react-redux";
import { tooglevariantInformation } from "./../../../Redux/Actions";

import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';



export class ItemVariant extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    };

  }


  render() {
    return (<div className="variantPanel ">
      <h4>Variants <i onClick={() => {
        this.props.tooglevariantInformation(false);
      }} className="fas fa-times-circle"></i></h4>

      {this.props.variantInformation.items.map(item => {
        return <div className="variantItem">
          <h5 className="" id={item.sku}>{item.name ? item.name : "Name not available"}  <i className={"fas fa-chevron-down"}></i></h5>
          <UncontrolledCollapse toggler={'#' + item.sku}>
           
                <h6>Name:{item.name ? item.name : "Name not available"}</h6>
                <h6>Price: {item.price}</h6>
                <h6>{item.inStock ? "In-Stock" : "Out of Stock"}</h6>
             
          </UncontrolledCollapse>

        </div>
      })}
    </div>);
  }

};

const mapStateToProps = state => {
  return {
    variantInformation: state.variantInformation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tooglevariantInformation: (bol) => dispatch(tooglevariantInformation(bol))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ItemVariant);