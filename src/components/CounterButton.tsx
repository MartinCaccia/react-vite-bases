interface ButtonProps {
    name: string,
    functionButton: (name: string)=>void
}

export const CounterButton = ({name, functionButton}: ButtonProps) => {
    return (
        <button className="CounterButtons" onClick={ ()=>functionButton(name) }>
            {name}
        </button>
    )
}
