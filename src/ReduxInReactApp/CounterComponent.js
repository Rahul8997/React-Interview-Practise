import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CounterComponent = () => {
    let counter=useSelector(state=>state.counter);
    let dispatch=useDispatch();

    let handleDecrease=()=>{
        dispatch({type:"decrement"});
    }
    let handleIncrease=()=>{
        dispatch({type:"increment"});
    }
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={handleIncrease}>Increment</button>
      <button onClick={handleDecrease}>Decrement</button>
    </div>
  )
}

export default CounterComponent
