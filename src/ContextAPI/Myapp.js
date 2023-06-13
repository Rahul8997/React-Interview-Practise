import React from 'react'
import ParentComp from './ParentComp'
import Context from './Store.js/Context'

const Myapp = () => {
    return (
        <div>
            <Context>
                <ParentComp />
            </Context>
        </div>
    )
}

export default Myapp
