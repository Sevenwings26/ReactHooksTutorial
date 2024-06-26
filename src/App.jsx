import './App.css'
import HookReducer from './components/useReducer/HookReducer'
import HookCount from './components/useState/HookCount'
import StateHook from './components/useState/StateHook'
import StateProps from './components/useState/StateProps'
import EffectTutorial from './components/useEffect/EffectTutorial'

// TodoList 
import TodoWrapper from './components/ToDoListProject/TodoWrapper'



function App() {
  return (
    <>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* < HookCount/> */}
      {/* < StateHook/> */}
      {/* < StateProps name="Iyanu" /> */}
      {/* < HookReducer/> */}
      {/* < EffectTutorial/> */}


      {/* ToDoList Project Components */}
      < TodoWrapper/>
      
      </div>
    </>
  )
}

export default App
