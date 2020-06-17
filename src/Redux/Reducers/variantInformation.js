

const initialState = {open:false,items:[]};

export default function(state = initialState, action) {
 
  switch (action.type) {
    case "TOOGLE_VARIANT_INFORMATION": 
    return {open:action.set,items:state.items} ;

    case "SET_INFORMATION": 
    return action.set;
     
    default:
      return state;
  }
  
}
