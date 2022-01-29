import React, { Component } from 'react';
import {connect} from 'react-redux';
export class Button extends Component {



  render() {
    return <div>
     <h1>Name {this.props.name} </h1> 
<button onClick={this.props.reducer1}>Reducer 1</button>
<button onClick={this.props.reducer2}>Reducer 2</button>
<button onClick={this.props.reducer3}>Reducer 3</button>
<button onClick={this.props.reducer4}>Reducer 4</button>
    </div>;
  }
}

const mapStateToProps=(state)=>{
  return{
    name:state.name
  }
}


const mapDispatchToProps=(dispatch)=>{
    return{
        reducer1:(e)=>dispatch({type:'Reducer1'}),
        reducer2:(e)=>dispatch({type:'Reducer2'}),
        reducer3:(e)=>dispatch({type:'Reducer3'}),
        reducer4:(e)=>dispatch({type:'Reducer4'}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Button);
