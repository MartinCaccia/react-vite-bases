import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import '../styles/ArrowFunctionComponent.css'

const string: string = 'una cadena string'
const number: number = 123456
const array: Array<any>  = ['manzana', 12345, 'algo mas']
const boolean: boolean = true
const aFunction = ()  => 'Una funcion'
const object = { name: 'un nombre', id: 6 }
const fecha = new Date()

export const ArrowFunctionComponent = () => {
  const {userData} = useContext(UserContext)

  return (
    <>
        <h1>Hello world!</h1>
        <hr/>
        <h2>Variables in jsx/tsx</h2>
        <p>String: { string }</p>
        <p>Number: { number }</p>
        <p>Array: { array }</p>
        <p>Boolean: { boolean }</p>       
        <p>Function: { aFunction() }</p>         
        <p>object: { JSON.stringify(object) }</p>       
        <p>fecha: { JSON.stringify(fecha) }</p>   
        <hr/>
        <p>
          { // Backtick: AltGr + }} = ``
            `User context name: ${userData?.name} email: ${userData?.email}` 
          }
        </p>  
    </>
  )
}
