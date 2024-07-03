
// useRef is useful for accessing and manipulating DOM elements, storing values that don't trigger re-renders and more.

import React, { useRef } from "react";

function RefTutorial() {
  const inputRef = useRef(null);
  
  // focuses the input whenever button is clicked
  const focusBox = () => {
    inputRef.current.focus();
  }

  // Clears out input whenever button is clicked 
  // const focusBox = () => {
  //   inputRef.current.value = "";
  // }

  return (
    <div>
      <h1>7wings</h1>
      <input type="text" placeholder="Ex...." name="" id="" ref={inputRef} />
      <button onClick={focusBox}>Change Name</button>
    </div>
  );
}

export default RefTutorial;
