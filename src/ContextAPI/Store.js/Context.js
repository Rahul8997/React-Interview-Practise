import React, { createContext, useState } from 'react'

let mystate=createContext();
const Context = (props) => {
    let [data,setData]=useState("I am data")
  return (
    <mystate.Provider value={{data,setData}}>
      {props.children}
    </mystate.Provider>
  )
}
export {mystate};
export default Context
