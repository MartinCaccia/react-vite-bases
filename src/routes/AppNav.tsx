import { Navigate, Route, Routes } from "react-router-dom"
import { NavCards } from "../components/NavCards"
import App from "../App"
import FirstComponent from "../components/FirstComponent"
import { ArrowFunctionComponent } from "../components/ArrowFunctionComponent"
import PropsComponent from "../components/PropsComponent"
import { CounterComponent } from "../components/CounterComponent"
import { ListComponent } from "../components/ListComponent"
import UsersApp from "../components/UsersApp"
import { FormComponent } from "../components/FormComponent"
import { TableComponent } from "../components/TableComponent"
import { UserProvider } from "../context/UserProvider"
import { HeavyCalculations } from "../components/HeavyCalculations"
import { CallBackComponent } from "../components/CallBackComponent"
import { ReduceComponent } from "../components/ReduceComponent"
import { UseReducerComponent } from "../components/UseReducerComponent"
import { HOCWithLoader } from "../components/HOCWithLoader"

const NewComponent = HOCWithLoader(TableComponent)

export const AppNav = () => {
  return (
    <UserProvider>
        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/app" element={<App/>}></Route>
            <Route path="/firstcomponent" element={<FirstComponent />}></Route>
            <Route path="/arrowfunctioncomponent" element={<ArrowFunctionComponent />}></Route>
            <Route path="/propscomponent" element={<PropsComponent subtitle="No default subtitle" number={6} />}></Route>
            <Route path="/countercomponent" element={<CounterComponent initialValue={0} incrementValue={1} decrementValue={1} isNegative={false} />}></Route>
            <Route path="/listcomponent" element={<ListComponent />}></Route>
            <Route path="/usersapp" element={<UsersApp />}></Route>
            <Route path="/formcomponent" element={<FormComponent />}></Route>
            <Route path="/tablecomponent" element={<TableComponent />}></Route>
            <Route path="/heavycalculations" element={<HeavyCalculations />}></Route>
            <Route path="/callbackcomponent" element={<CallBackComponent />}></Route>
            <Route path="/reducecomponent" element={<ReduceComponent />}></Route>            
            <Route path="/usereducercomponent" element={<UseReducerComponent />}></Route> 
            <Route path="/hocwithloader" element={<NewComponent />}></Route>  
            <Route path="/*" element={<Navigate to="/" />}></Route>                                
        </Routes>

        <NavCards></NavCards>
    </UserProvider>
  )
}
