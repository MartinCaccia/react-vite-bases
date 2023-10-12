import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from './styles/page.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{"padding": "1rem 0"}}>Vite + React</h1>
      <div className={styles.center}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card" style={{"display": "flex", "justifyContent": "center",
          "alignItems": "center", "position": "relative", "padding": "1rem 1rem"}}>
        <button className='btn btn-primary' onClick={() => setCount((count) => count + 1)}
         style={{"width" : "150px"}}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
