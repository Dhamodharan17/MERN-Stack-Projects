import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
//selctors
const PAY = "PAY";
const EMAN = "EMAN";


//STEP 1: Actions 
const payments = () =>({type:PAY})
const emandate = () =>({type:EMAN})

//STEP 2: Writing implementaion for Actions
const citiReducer = (state,actions) =>{
switch(actions.type){
  // Real time : seperate file to store selectors
  case PAY:
    return state = "ino";
  case EMAN:
      return state = "emandate"
  default:
       return state = "citidirect"
}
}

//STEP 3: Keep in store
let store = createStore(citiReducer);

//to see inside store
store.subscribe(()=>{console.log(store.getState())})

store.dispatch(payments())
ReactDOM.render(
<h1>Hello</h1>,document.getElementById('root'));

