import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import FirstComponent from './components/FirstComponent.tsx'
// import { ArrowFunctionComponent } from './components/ArrowFunctionComponent'
// import PropsComponent from './components/PropsComponent'
// import { CounterComponent } from './components/CounterComponent'
// import { ListComponent } from './components/ListComponent'
// import UsersApp from './components/UsersApp'
// import { HooksApp } from './components/HooksApp'
import { FormComponent } from './components/FormComponent'


ReactDOM.createRoot(document.getElementById('root')!).render(
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
    }
    <FormComponent></FormComponent>
  </React.StrictMode>,
)