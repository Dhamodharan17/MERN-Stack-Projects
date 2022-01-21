import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {payments,emandate} from './index';
function App () {
    const cd = useSelector(state=> state);
    const dispatch = useDispatch();


  return(
<div>
<img src= {cd}/>
<button onClick={()=>dispatch(payments())}>Payments</button>&nbsp;
<button onClick={()=>dispatch(emandate())}>Emandate</button>
</div>
  )
   
   
   
}

export default App ;
