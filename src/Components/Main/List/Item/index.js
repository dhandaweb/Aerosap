import React from 'react';
import './index.css';
import { Collapse  } from 'reactstrap';
import SubItem from './SubItem';

export default class Item extends React.Component {

    constructor(props) {
      super(props);
      this.toogleItem = this.toogleItem.bind(this);


      this.state = {
        open:false
      };
      
        
    }
  
    toogleItem() {
      this.setState({
        open: !this.state.open
      });
    }

    render() {
      return (<div className="item shadowBottom">
        <h1 onClick={this.toogleItem}> {this.props.data.name} <i className={this.state.open ? "fas fa-chevron-up":"fas fa-chevron-down"}></i></h1>
        <Collapse isOpen={this.state.open}>
        { this.props.data.items.map((item,i)=>{
          return <SubItem key={item.name} data={item}/>
        })
      }
       </Collapse >

    </div>);
    }
  
  };