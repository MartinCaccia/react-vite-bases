import { NavLink } from "react-router-dom"
import styles from '../styles/page.module.css'
import { ListComponent } from './ListComponent';

export const NavCards = () => {
  return (
    <div className={styles.grid}>
        <NavLink to="/app" className={styles.card}>
            <h2>
                App Vite <span>-&gt;</span>
            </h2>
            <p>App Vite default start page.</p>
        </NavLink>

        <NavLink to="/firstcomponent" className={styles.card}>
            <h2>
                Example 1 <span>-&gt;</span>
            </h2>
            <p>A simple Hello World! first component</p>
        </NavLink>

        <NavLink to="/arrowfunctioncomponent" className={styles.card}>
            <h2>
                Example 2 <span>-&gt;</span>
            </h2>
            <p>An arrow function component + variables in tsx + useContext.</p>
        </NavLink>

        <NavLink to="/propscomponent" className={styles.card}>
            <h2>
                Example 3 <span>-&gt;</span>
            </h2>
            <p>
                Props component + PropTypes + defaultProps.
            </p>
        </NavLink>

        <NavLink to="/countercomponent" className={styles.card}>
            <h2>
                Example 4 <span>-&gt;</span>
            </h2>
            <p>
                Counter component + custom hook useCounter + useState 

            </p>
        </NavLink>

        <NavLink to="/listcomponent" className={styles.card}>
            <h2>
                Example 5 <span>-&gt;</span>
            </h2>
            <p>
                List component + useState + Dispatch + responsabilities father child.
            </p>
        </NavLink>        

        <NavLink to="/usersapp" className={styles.card}>
            <h2>
                Example 6 <span>-&gt;</span>
            </h2>
            <p>
                Users app + useState + useEffect + custom hook useFetchData
                + helper fetchData (fetch promise) + environement variable
            </p>
        </NavLink>    

        <NavLink to="/formcomponent" className={styles.card}>
            <h2>
                Example 7 <span>-&gt;</span>
            </h2>
            <p>
                Form component + useEffect + useRef + useState
                + custom hook useForm
            </p>
        </NavLink> 

        <NavLink to="/tablecomponent" className={styles.card}>
            <h2>
                Example 8 <span>-&gt;</span>
            </h2>
            <p>
                Table component + custom hook useFetchData
            </p>
        </NavLink>       

        <NavLink to="/heavycalculations" className={styles.card}>
            <h2>
                Example 9 <span>-&gt;</span>
            </h2>
            <p>
                Heavy calculations + useMemo + useState
            </p>
        </NavLink>   

        <NavLink to="/callbackcomponent" className={styles.card}>
            <h2>
                Example 10 <span>-&gt;</span>
            </h2>
            <p>
                Call back component + useCallback + memo
            </p>
        </NavLink>       

        <NavLink to="/reducecomponent" className={styles.card}>
            <h2>
                Example 11 <span>-&gt;</span>
            </h2>
            <p>
                ReduceComponent + bases to understanding useReducer
            </p>
        </NavLink>     

        <NavLink to="/usereducercomponent" className={styles.card}>
            <h2>
                Example 12 <span>-&gt;</span>
            </h2>
            <p>
                UseReducerComponent + Todo ListComponent 
                + useReducer + useEffect + useRef 
            </p>
        </NavLink> 

        <NavLink to="/hocwithloader" className={styles.card}>
            <h2>
                Example 13 <span>-&gt;</span>
            </h2>
            <p>
                HOC (High order component with loading)
            </p>
        </NavLink> 
    </div>
  )
}
