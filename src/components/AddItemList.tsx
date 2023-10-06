import { useState } from 'react'
import '../styles/AddItemListComponent.css'

export const AddItemList = ({addItem}: any) => {
  const [inputValue, setInputValue] = useState('')
  const addNewValue = ({target}: any) => {
    setInputValue(target.value)
  }
  const OnClick = () => {
    onSubmitValue
    // Si el padre (ItemsList) me enviara el setValue, realizaria:
    // addItem(items => [...items, { id: items.length+1, name: inputValue, done: false}])
    // por una cuestion de responsabilidades envio el valor del input a la funcion del padre:
    addItem(inputValue.trim())
    setInputValue('')
  }  
  const onSubmitValue = (event: any) => {
    event.preventDefault()
    // console.log(inputValue)
  }
  return (
    <form onSubmit={onSubmitValue}>
      <input 
        type='text' 
        placeholder='Add new item list' 
        className="AddItemList" 
        value={inputValue}
        onChange={addNewValue}
      />
      <button onClick={OnClick}>Add item</button>
    </form>
  )
}
