import { CounterButton } from "./CounterButton"
import { useCounter } from "./hooks/useCounter"
import '../styles/AddItemListComponent.css'
import { CounterProps } from "../interfaces/Counter.interface"

export const CounterComponent = ({initialValue, incrementValue, decrementValue, isNegative}: CounterProps) => {
    
    const {counterValue, changeValue} = useCounter({initialValue, incrementValue, decrementValue, isNegative})
    
  return (
    <>
        <h1>Counter</h1>
        <h3>Value: {counterValue}</h3>
        <CounterButton name='Increment' functionButton={changeValue} />
        <CounterButton name='Reset' functionButton={changeValue} />
        <CounterButton name='Decrement' functionButton={changeValue} />
    </>
  )
}
