// useLayoutEffect is UI based, it is called before the useEffect.


import { useLayoutEffect } from 'react'
import { useEffect } from 'react'

function UseLatoutEffectTutorial() {
    // useLayoutEffect

    useLayoutEffect(() => {
        console.log('UseLayoutEffect')
    }, []);


    useEffect(()=>{
        console.log('UseEffect')
    })

    return (
    <div>

    </div>
  )
}

export default UseLatoutEffectTutorial