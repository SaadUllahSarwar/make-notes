import React from 'react'
import { GrNotes } from "react-icons/gr"


const NewNote = () => {
  return (
    <div>
        <GrNotes size={70}
         onMouseOver={({target})=>target.style.color="black"}
         onMouseOut={({target})=>target.style.color="red"}/>
    </div>
  )
}

export default NewNote