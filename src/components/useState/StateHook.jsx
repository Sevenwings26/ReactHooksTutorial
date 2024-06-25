import React, { useState } from 'react'

function StateHook() {
    const [name, setName ] = useState('Iyanu');

    // function changeName(e) {
    //     const newValue = e.target.value;
    //     setName(newValue)
    // }

    // or Declare function with a variable 

    let changeName = (e) => {
        const newValue = e.target.value;
        setName(newValue)
    }

  return (
    <div>
        <input onChange={changeName} type="text" placeholder='Enter info' />
        <h1>{name}</h1>
    </div>
  )
}

export default StateHook