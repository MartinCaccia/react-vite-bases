import { useMemo, useState } from "react"
import '../styles/ListComponent.css'

const getCalc = (listNumbers: number[]): number => {
    console.log('calculating...')
    return listNumbers.reduce((a,b)=>a*b)
}

export const HeavyCalculations = () => {
    const [show, setShow] = useState<boolean>(true)
    const listNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [numbers, setNumbers] = useState<number[] | any>(listNumbers)

    const addNumbers = () => {
        setNumbers([...(numbers as []), numbers.length + 1])
    }

  return (
    <>
        <h2>useMemo</h2>
        <button className="btn btn-primary" onClick={()=>setShow(!show)} style={{margin: '5px'}}>{ show? 'Hide result':'Show result' }</button>
        <button className="btn btn-primary" onClick={()=>addNumbers()}>Add numbers</button>
        <h3 style={{display: show ? 'block' : 'none' }}>result: { useMemo(() => getCalc(numbers),[numbers]) }</h3>
    </>
  )
}
