import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './App'
import {Provider} from 'react-redux';
//selctors
const PAY = "PAY";
const EMAN = "EMAN";


//STEP 1: Actions 
export const payments = () =>({type:PAY})
export const emandate = () =>({type:EMAN})

//STEP 2: Writing implementaion for Actions
const citiReducer = (state,actions) =>{
switch(actions.type){
  // Real time : seperate file to store selectors
  case PAY:
    return state = "https://s1.manualzz.com/store/data/006752972_1-df192eec22c21c2cd7c51bcb4e6cb6bd-360x466.png";
  case EMAN:
      return state = "https://admin.mysiponline.com/app/webroot/blog_uploadimages/1507269213paperless(inner).jpg"
  default:
       return state = "https://play-lh.googleusercontent.com/OC1J88IhejbDoYUJNw-dO1kEcRwaI5aLpcYx-8v1yvnkZQYQvjI8NjcyeHBdvYZhhtTY"
}
}

//STEP 3: Keep in store
let store = createStore(citiReducer);


// no need to use props <App comedy=""/>
ReactDOM.render(
<Provider store = {store}><App/></Provider>

  
  ,document.getElementById('root'));

