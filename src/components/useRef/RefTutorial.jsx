import React, { useRef } from 'react'

function RefTutorial() {

    const inputRef = useRef(null); 
  return (
    <div>
        <h1>7wings</h1>
        <input type="text" placeholder='Ex....' name="" id="" ref={inputRef} />
        <button>Change Name</button>
    </div>
  )
}

export default RefTutorial