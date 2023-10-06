import { useCallback, useState } from "react"
import { CounterButton } from "./CounterButton"

export const CallBackComponent = () => {

    const [counter, setCounter] = useState(0)
    const counterIncrement = useCallback( () => {
        // re write (contador=>contador+1) in that form 
        // so the useCallback and memo avoid
        // the CounterButton component redrawing every time we click it.
        setCounter(contador=>contador+1)
    }, [])

  return (
    <>
        <h2>useCallBack - Memo</h2>
        <h3>Counter: {counter}</h3>
        <CounterButton name="Increment" functionButton={counterIncrement}></CounterButton>
    </>
  )
}
