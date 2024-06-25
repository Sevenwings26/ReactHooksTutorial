
// import React, { useState } from "react";

// const HookReducer = () => {
//     const [count, setCount] = useState(0);
//     count[showText, setShowText] = useState(true);

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button 
//               onClick={() => { 
//                 setCount(count + 1); 
//                 setShowText(!showText); 
//              }}
//              >
//                 Click here
//             </button>

//             {showText && <p>This is a text</p>}
//         </div>
//     )
// }

// export default HookReducer;


// USE-REDUCER 
// The useReducer is an alternative to the useState hook, but more suitable for complex state management. 
// The useReducer is useful when: 
//     You need to manage complex state with multiple sub-states.
//     You need to decouple state management from your components.
//     You need to debug and log state changes.

// Reducer: A function that takes two parameters (current state and an action), and returns a new state 
// Action: An object that describes the change to be made to the state.
// Dispatch: A function that dispatches an action to the reducer. 



import React, { useReducer } from "react";

// declare a reducer function 
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText }
        case "toggleShowText":
            return { count: state.count, showText: !state.showText }
        default:
            return state
    };
};

const HookReducer = () => {

    // useReducer takes two arguments - the reducer and th initialState
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

    return (
        <div>
            <h1>{state.count}</h1>
            <button
                onClick={() => {
                    dispatch({ type: "INCREMENT" });
                    dispatch({ type: "toggleShowText" });
                }}>
                Click here
            </button>
            {state.showText && <p>This is a text</p>}
        </div>
    )
}

export default HookReducer;
