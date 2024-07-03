import React from 'react'
import "./css/style.css"
// import 'font-awesome/css/font-awesome.min.css';
// import {fontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = () => {
  return (
    <div className='todo'>
        <p>Go to School</p>
        <div>
          {/* <fontAwesomeIcon icon={faPenToSquare}/>
          <fontAwesomeIcon icon={faTrash}/> */}
        </div>
    </div>
  )
}



// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/free-regular-svg-icons
// npm i --save @fortawesome/free-brands-svg-icons
// npm i --save @fortawesome/react-fontawesome@latest