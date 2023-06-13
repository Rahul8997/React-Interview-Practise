import React, { useState } from 'react'
import ChildComp from './ChildComp';
import SecondChildCom from './SecondChildComp'

const ParentComp = () => {
  let [data,setData]=useState("")
    let myfun=(data)=>{
        console.log("I am in Parent Component with",data);
        alert(`I am in Parent Component with ${data}`);
        setData(data);
    }
  return (
    <>
      <ChildComp myfun={myfun} />
      <SecondChildCom data={data}/>
    </>
  )
}

export default ParentComp;
