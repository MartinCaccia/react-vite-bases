import { useState } from 'react'
import { DataList } from './DataList'
import '../styles/ListComponent.css'


export default function UsersApp() {
const [title, setTitle] = useState('Users List')
    const changeTitle = (title: string) => {
        setTitle(title)
    }
  return (
    <>
        <h1>{title}</h1>
        <DataList handleTitle={changeTitle}></DataList>
    </>
  )
}
