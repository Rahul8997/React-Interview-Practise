import React, { useContext } from 'react'
import { mystate } from './Store.js/Context'
import FirstChild from './FirstChild';
const ParentComp = () => {
 
  return (
    <div>
      <FirstChild />
    </div>
  )
}

export default ParentComp
