import React from 'react';
import Item from './Item';
import data from "./data.json";


export default class List extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
    


    
      
  }

  getsubItems(items){
    if(items){
    return items.map((item,i)=>{
        return <div key={i}>
            <p>{item.name} | {item.price} | {item.size}</p>
        </div>})
    }
    else return ""
}

getItems(items){
    if(items){
    return items.map((item,i)=>{
        return <div key={i}>
            <h3>{item.name}</h3>
            {this.getsubItems(item.items)}
        </div>})
    }
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

