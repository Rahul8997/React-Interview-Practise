import React from 'react'

const MyApp = () => {
    //   return (
    //     <div>
    //       <h1>Rahul</h1>
    //       <div id="myname">This is my name</div>
    //     </div>
    //   )

    return React.createElement('div', {},
        React.createElement('h1', {}, 'Rahul'),
        React.createElement('div', { id: "myname" }, 'This is my name')
    )
}

export default MyApp
