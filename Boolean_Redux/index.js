import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './App'
import {Provider} from 'react-redux';
import Homepage from './images/homepage.png'
import Payments from './images/payments.jpeg'
import EMandate from './images/emandate.png'
//selctors
const PAY = "PAY";
const EMAN = "EMAN";
const SUBSCRIBE_CHANNEL = "SUBSCRIBE_CHANNEL";

//STEP 1: Actions (methods)
export const payments = () =>({type:PAY})
export const emandate = () =>({type:EMAN})
export const subscribe = () =>({type:SUBSCRIBE_CHANNEL})

const intialValue = {
   img:Homepage,
   isSubscribed :false
}


//STEP 2: Writing implementaion for Actions
const citiReducer = (state=intialValue,actions) =>{
switch(actions.type){
  // Real time : seperate file to store selectors
  case SUBSCRIBE_CHANNEL:
    return{
      img:Homepage,
      isSubscribed:!state.isSubscribed
    }
  
  case PAY:
    return{
      ...state,
      img:Payments
    }

  case EMAN:
    return{
      ...state,
      img:EMandate
    }
      
  default:

      return{
        ...state
        
      }
}
}


//STEP 3: Keep in store
let store = createStore(citiReducer);//main thing


// no need to use props <App comedy=""/>
ReactDOM.render(
<Provider store = {store}><App/></Provider>

  
  ,document.getElementById('root'));

