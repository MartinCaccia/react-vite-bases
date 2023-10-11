import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.css'

// import App from './App.tsx'
// import FirstComponent from './components/FirstComponent.tsx'
// import { ArrowFunctionComponent } from './components/ArrowFunctionComponent'
// import PropsComponent from './components/PropsComponent'
// import { CounterComponent } from './components/CounterComponent'
// import { ListComponent } from './components/ListComponent'
// import UsersApp from './components/UsersApp'
// import { HooksApp } from './components/HooksApp'
// import { FormComponent } from './components/FormComponent'
// import { TableComponent } from './components/TableComponent'
// import { HeavyCalculations } from './components/HeavyCalculations'
// import { CallBackComponent } from './components/CallBackComponent'
// import { ReduceComponent } from './components/ReduceComponent'
// import { UseReducerComponent } from './components/UseReducerComponent'
// import { HOCWithLoader } from './components/HOCWithLoader'
import { Home } from './components/Home'
import { BrowserRouter } from 'react-router-dom'
import { AppNav } from './components/AppNav'

// const NewComponent = HOCWithLoader(UseReducerComponent)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      { 
      // <App />
      // <FirstComponent /> 
      // <ArrowFunctionComponent />
      // <PropsComponent title="Un titulo" subtitle="Un subtitulo" number={6} />
      // <CounterComponent initialValue={0} incrementValue={1} decrementValue={1} isNegative={false}></CounterComponent>
      // <ListComponent></ListComponent>
      // <UsersApp></UsersApp>   
      // <HooksApp></HooksApp> //contiene al CounterComponent
      // <FormComponent></FormComponent>
      // <TableComponent></TableComponent>
      // <HeavyCalculations></HeavyCalculations>
      // <CallBackComponent></CallBackComponent>
      // <ReduceComponent></ReduceComponent>
      // <UseReducerComponent></UseReducerComponent>
      // <NewComponent></NewComponent>
      }
      <Home></Home>
      <AppNav></AppNav>
    </React.StrictMode>
  </BrowserRouter>
)