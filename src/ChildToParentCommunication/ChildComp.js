import React, { useRef } from 'react'

const ChildComp = (props) => {
    let myinput=useRef();
    let handleClick=()=>{
        props.myfun(myinput.current.value);
        console.log(myinput.current.value);
    }
  return (
    <div>
        <input type="text" ref={myinput} id="" />
        <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default ChildComp
