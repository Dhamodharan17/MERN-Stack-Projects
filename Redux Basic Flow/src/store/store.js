import { createStore } from "redux"

const name ="dhamo";

const reducer=(state=name,action)=>{
    if(action.type==='Reducer1'){
     return{
         ...state,
         name:"karthil"
     }
    }
    else if(action.type==='Reducer2'){
        console.log("reducer 2") 
    }
    return state;
}

const store = createStore(reducer);

export default store;