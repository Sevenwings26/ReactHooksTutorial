// The useEffect allows you to run side effects, such as making API calls, setting time, or updating the DOM, after rendering a Component. It helps to handle tasks that require access to the component's props, state, or DOM nodes.

// The useEffect is a complementary of the componentDidMount() used in Stateful Component 

// useEffect takes two arguments (effect and dependency array):
// 1. effect: A function that runs the side effect.
// 2. dependency array: An optional array of dependencies that triggers the effect to re-run when changed.

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  // Make API call
  useEffect(
    () => {
      // effect - To make api call
      axios
        .get("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then((response) => {
          // console.log(response);
          setData(response.data[1].email);
          console.log("Api was called");
        });
    },
    [] // dependency array
  );

  return (
    <div>
      <h2>Hello World {data}</h2>

      <h2>Count {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

// to work with apis, install axios
// npm install axios
