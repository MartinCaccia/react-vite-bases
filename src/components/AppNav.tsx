import { Route, Routes } from "react-router-dom"
import { NavCards } from "./NavCards"
import App from "../App"
import FirstComponent from "./FirstComponent"
import { ArrowFunctionComponent } from "./ArrowFunctionComponent"
import PropsComponent from "./PropsComponent"
import { CounterComponent } from "./CounterComponent"

export const AppNav = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/app" element={<App/>}></Route>
            <Route path="/firstcomponent" element={<FirstComponent/>}></Route>
            <Route path="/arrowfunctioncomponent" element={<ArrowFunctionComponent/>}></Route>
            <Route path="/propscomponent" element={<PropsComponent subtitle="No default subtitle" number={6} />}></Route>
            <Route path="/countercomponent" element={<CounterComponent initialValue={0} incrementValue={1} decrementValue={1} isNegative={false}/>}></Route>
            <Route path="/*" element={<App/>}></Route>                                
        </Routes>

        <NavCards></NavCards>
    </>
  )
}
