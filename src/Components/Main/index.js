import React from 'react';
import './index.css';
import List from './List';
import ItemVariant from './ItemVariant';
import {  Container, Row, Col } from 'reactstrap';
import { connect } from "react-redux";

export  class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
    


    
      
  }

  render() {
    return ( <div className="bgGrey" >
    {this.props.variantInformation.open && 
    <ItemVariant/>
  }
    <Container fluid>
       <Row className="subHeader">
          <Col xs="12" className="title">
            <h4><i className="fas fa-door-open"></i> Products </h4>
            <p>List of products</p>
          </Col>
       </Row>
       <Row>
          <Col xs="12" className="list scrollbar" style={{height:window.innerHeight-200}}>
                <List/>
         </Col>
      </Row>
    </Container>
  </div> );
  }

};


const mapStateToProps = state => {
  return { variantInformation: state.variantInformation
  };
};




export default connect(mapStateToProps, null)(Main);
