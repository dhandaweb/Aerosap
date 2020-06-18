import React from 'react';
import './index.css';
import { Collapse, Button  } from 'reactstrap';
import { connect } from "react-redux";
import {setVariantInformation} from "./../../../../../Redux/Actions";

export  class SubItem extends React.Component {

  constructor(props) {
    super(props);

    this.toogleSubItem = this.toogleSubItem.bind(this);

    this.state = {
      open:false
    };

  }


  toogleSubItem() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (<div className="subItem shadowBottom" >
      <h6 className="title" onClick={this.toogleSubItem}>{this.props.data.name} <i className={this.state.open ? "fas fa-chevron-up":"fas fa-chevron-down"}></i></h6>

      <Collapse isOpen={this.state.open}>
        {this.props.data.items.map((item, i) => {
          return <div key={i} className="product">
             <Button onClick={()=>{
              this.props.setVariantInformation({open:true,items:item.variants ? item.variants : [{"name":"No variant information"}]})
            }}> Check variant</Button>
            <h5>{item.name}</h5> 
            <h6>Price: {item.price}</h6> 
            <h6>Size: {item.size}</h6> 
            <p>Description: {item.shortDescription}</p>
            <span>Code: {item.code}</span> 
          
            </div>
        })}
      </Collapse >

    </div>);
  }

};



const mapDispatchToProps = dispatch => {
  return {
    setVariantInformation: (obj)=> dispatch(setVariantInformation(obj))
  };
};

export default connect(null, mapDispatchToProps)(SubItem);