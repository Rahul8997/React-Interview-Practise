import React from 'react'
import {useHistory} from 'react-router-dom'
const Home = () => {
    let history=useHistory();
    let data="Rahul"
    function handleClick() {
        history.push(`./contact/${data}`)
    }
  return (
    <div>
      <h1>I am home page</h1>
      <button onClick={handleClick}></button>
    </div>
  )
}

export default Home
