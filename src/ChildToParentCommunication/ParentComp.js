import React from 'react'
import ChildComp from './ChildComp';

const ParentComp = () => {
    let myfun=(data)=>{
        console.log("I am in Parent Component with",data);
        alert(`I am in Parent Component with ${data}`);
    }
  return (
    <div>
      <ChildComp myfun={myfun} />
    </div>
  )
}

export default ParentComp;
