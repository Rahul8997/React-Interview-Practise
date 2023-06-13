import React, { useEffect, useState } from 'react'

const MyApp = () => {
    let [counter, setCounter] = useState(0);
    //First variation
    // useEffect(()=>{
    //     {console.log("I am useEffect function")}
    // })

    //Second variation
    // useEffect(() => {
    //     { console.log("I am useEffect function") }
    // }, [])

    //Third variation
    useEffect(() => {
        { console.log("I am useEffect function", counter) }
    }, [counter])

    return (
        <div>
            counter:{counter}
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
        </div>
    )
}

export default MyApp
