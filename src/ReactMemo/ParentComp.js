import React, { useState } from 'react'
import ChildComp from '../ReactMemo/ChildComp'

const ParentComp = () => {
    let [counter, setCounter] = useState(0);
    let data = "My name is Rahul";
    return (
        <div>
            {console.log("Parent is running...")}
            <div>
                counter:{counter}
                <button onClick={() => setCounter(counter + 1)}>Increase</button>
            </div>
            <ChildComp data={data} />
        </div>
    )
}

export default ParentComp
