import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {payments,emandate,subscribe} from './index';


function App () {
    const cd = useSelector(state=> state);
    const dispatch = useDispatch();


  return(
<div>
<img src= {cd.img}/>
<button disabled= {!cd.isSubscribed} onClick={()=>dispatch(payments())}>Payments</button>&nbsp;
<button disabled= {!cd.isSubscribed} onClick={()=>dispatch(emandate())}>Emandate</button>&nbsp;
<button onClick={()=>dispatch(subscribe())}>{!cd.isSubscribed ? "Subscribed":"UnSubscribed"}</button>
</div>
  )
   
   
   
}

export default App ;
