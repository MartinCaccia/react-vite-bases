import { memo } from "react"

interface ButtonProps {
    name: string,
    functionButton: (name: string)=>void
}

export const CounterButton = memo(({name, functionButton}: ButtonProps) => {
    console.log('Im redrawing myself!') // no more thanks useCallBack and memo.
    return (
        <button className={name==='Reset'?"btn btn-danger CounterButtons":"btn btn-primary CounterButtons"} onClick={ ()=>functionButton(name) }>
            {name}
        </button>
    )
})
