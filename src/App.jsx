import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HookReducer from './components/useReducer/HookReducer'
import HookCount from './components/useState/HookCount'
import StateHook from './components/useState/StateHook'
import StateProps from './components/useState/StateProps'
import EffectTutorial from './components/useEffect/EffectTutorial'

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
      < EffectTutorial/>
      </div>
    </>
  )
}

export default App
