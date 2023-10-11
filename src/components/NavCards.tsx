import { NavLink } from "react-router-dom"
import styles from '../styles/page.module.css'

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
            <p>An arrow function component + variables in tsx.</p>
        </NavLink>

        <NavLink to="/propscomponent" className={styles.card}>
            <h2>
                Example 3 <span>-&gt;</span>
            </h2>
            <p>
                Props component.
            </p>
        </NavLink>

        <NavLink to="/countercomponent" className={styles.card}>
            <h2>
                Example 4 <span>-&gt;</span>
            </h2>
            <p>
                Counter component.
            </p>
        </NavLink>

        <NavLink to="/listcomponent" className={styles.card}>
            <h2>
                Example 5 <span>-&gt;</span>
            </h2>
            <p>
                List component.
            </p>
        </NavLink>        

        <NavLink to="/usersapp" className={styles.card}>
            <h2>
                Example 6 <span>-&gt;</span>
            </h2>
            <p>
                Users app
            </p>
        </NavLink>    

        <NavLink to="/formcomponent" className={styles.card}>
            <h2>
                Example 7 <span>-&gt;</span>
            </h2>
            <p>
                Form component
            </p>
        </NavLink> 

        <NavLink to="/tablecomponent" className={styles.card}>
            <h2>
                Example 8 <span>-&gt;</span>
            </h2>
            <p>
                Table component
            </p>
        </NavLink>         
    </div>
  )
}
