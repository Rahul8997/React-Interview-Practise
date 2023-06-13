import React from 'react'

const ChildComp = (props) => {
    return (
        <div>
            {console.log("Child is running...")}
            <h1>{props.data}</h1>
        </div>
    )
}

export default React.memo(ChildComp);

