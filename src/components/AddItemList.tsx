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
      <div style={{"display": "flex"}}>
        <input 
          type='text' 
          placeholder='Add new item list' 
          className="form-control"
          style={{"height" : "100%", "width" : "40%", "margin" : "5px"}}
          value={inputValue}
          onChange={addNewValue}
        />
        <button className='btn btn-primary' onClick={OnClick}>Add item</button>
      </div>
    </form>
  )
}
