import React, { useContext } from 'react'
import { mystate } from './Store.js/Context';

const ThirdChild = () => {
    let ctx = useContext(mystate);
    return (
        <div>
            {ctx.data};
        </div>
    )
}

export default ThirdChild
