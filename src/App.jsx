import './App.css'
import HookReducer from './components/useReducer/HookReducer'
import HookCount from './components/useState/HookCount'
import StateHook from './components/useState/StateHook'
import StateProps from './components/useState/StateProps'
import EffectTutorial from './components/useEffect/EffectTutorial'

// TodoList 
import TodoWrapper from './components/ToDoListProject/TodoWrapper'
import Update from './components/ClassLifeCycle/Update'
import RefTutorial from './components/useRef/RefTutorial'
import UseLatoutEffectTutorial from './components/useLayoutEffect/UseLatoutEffectTutorial'



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
        {/* <RefTutorial /> */}
        < UseLatoutEffectTutorial/>

      {/* ToDoList Project Components */}
      {/* < TodoWrapper/> */}
      
      
      </div>
    </>
  )
}

export default App
