import React from 'react';
import Item from './Item';
import data from "./data.json";


export default class List extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
      
  }


  render() {

    return ( <div>
       { data.categories.map((item,i)=>{
          return <Item key={item.name} data={item}/>
        })
      }
    </div>
    );
  }

};

