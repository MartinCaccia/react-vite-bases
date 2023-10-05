import { Dispatch } from "react"
import { AddItemList } from "./AddItemList"

interface Item {
    id: number, 
    name: string, 
    done: boolean
}

interface ItemsProps {
    value: Array<Item>,
    setValue: Dispatch<Array<Item>>
}

export const ItemsList = ({value, setValue}: ItemsProps) => {
    const AddItem = (inputValue: string) => {
        if (inputValue.length < 1) return
        setValue([...value, { id: value.length+1, name: inputValue, done: false}])
    }
    return (
        <>
            {
            // Tambien podria enviar el setValue pero es mejor que la responsabilidad
            // quede del lado del padre y no del hijo por eso le paso la funcion.
            }
            <AddItemList addItem={AddItem}></AddItemList>
            <ol>
            {
                value.map(item =>
                    <li key={item.id}>
                        { item.done ? <del>{item.name}</del> : item.name }
                        { item.done && ' ✅'}
                    </li>
                )
            }
            </ol>
        </>        
    )
}
