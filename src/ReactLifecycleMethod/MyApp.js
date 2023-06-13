import React, { useEffect, useState } from 'react'

const MyApp = () => {
    useEffect(()=>{
        console.log("I am useeffect function");
        return ()=>{
            console.log("I am cleanUp function")
        }
    })
    let [toggle, setToggle] = useState(false);
    let [count, setCount] = useState(0);
    function toggleCounter() {
        setToggle((toggle) => !toggle);
    }
    function IncreaseCount() {
        setCount((count) => count + 1);
    }
    return (
        <div>
            <button onClick={toggleCounter}>Toggle Counter</button>
            {console.log("I am render")}
            {toggle &&
                <div>
                    <h1>Count:{count}</h1>
                    <button onClick={IncreaseCount}>Increase Counter</button>
                </div>
            }
        </div>
    )
}

export default MyApp
