import { useState } from "react";
import { CounterProps } from "../../interfaces/Counter.interface";

export const useCounter = ({initialValue, incrementValue, decrementValue, isNegative}: CounterProps) => {

    const [counterValue, setCounterValue] = useState(initialValue)

    const changeValue = (name:string) => {
        switch (name) {
            case 'Increment':                
                setCounterValue(counterValue + incrementValue)
                break;
            case 'Reset':                              
                setCounterValue(initialValue)
                break;        
            case 'Decrement':      
                (!isNegative && counterValue-decrementValue < 0)? 
                setCounterValue(0) : setCounterValue(counterValue - decrementValue)
                break;  
        }
    }  

  return {counterValue, changeValue}
}
