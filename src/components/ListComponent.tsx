import { useState } from "react"
import { arrayList } from "../mocks/arrayList"
import { ItemsList } from "./ItemsList"
import '../styles/ListComponent.css'

export const ListComponent = () => {
    const [item, setItem] = useState(arrayList)    
  return (
    <>
        <h1 style={{"textAlign": "left"}}>Grocery list</h1>
        <ItemsList value={item} setValue={setItem}></ItemsList>
    </>
  )
}
