import { CounterComponent } from "./CounterComponent"
import '../styles/ListComponent.css'

export const HooksApp = () => {
  return (
    <>
        <h1>HooksApp</h1>
        <CounterComponent initialValue={100} incrementValue={10} decrementValue={5} isNegative={false} />
    </>
  )
}
