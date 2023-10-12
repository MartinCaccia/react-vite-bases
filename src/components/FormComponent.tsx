import { useEffect, useRef } from "react"
import { useForm } from "./hooks/useForm"

export const FormComponent = () => {

    const focusRef: any = useRef()
    console.log(focusRef)

    const initialForm = {
        userName:'',
        email:'',
        password:''
    }
    const {userName, email, password, onInputChange} = useForm(initialForm)

    const onSubmit = (event: any) => {
        event.preventDefault()
        console.log(`${userName}, ${email}, ${password}`)
    }

    useEffect(() => {
        focusRef.current.focus()
    }, [])
    

  return (
    <form onSubmit={onSubmit}>
        <div className="mb-3">
            <label className="form-label" style={{"display": "flex", "alignContent": "flex-start" }}>Username</label>                
                <input 
                    ref={focusRef}
                    type="text" 
                    className="form-control" 
                    style={{"display": "flex", "justifyContent": "flex-start", "width": "300px" }}
                    id="userName" 
                    name="userName" 
                    placeholder="Enter username" 
                    value={userName} 
                    onChange={onInputChange} 
                    required
                />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label" style={{"display": "flex", "alignContent": "flex-start" }}>Email address</label>
            <input 
                type="email" 
                className="form-control"
                style={{"display": "flex", "alignContent": "flex-start", "width": "300px" }} 
                id="email" 
                name="email" 
                placeholder="Enter email" 
                value={email} 
                onChange={onInputChange}  
                required
            />
            <div id="emailHelp" style={{"display": "flex", "alignContent": "flex-start" }}>We'll never share your email with anyone else.</div>
        </div>        
        <div className="mb-3">
            <label className="form-label" style={{"display": "flex", "alignContent": "flex-start" }}>Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    style={{"display": "flex", "alignContent": "flex-start", "width": "300px" }}
                    id="password" 
                    name="password" 
                    placeholder="Enter password" 
                    value={password} 
                    onChange={onInputChange}  
                    required 
                />
        </div>
        <div className="mb-3">
            <button className="btn btn-primary" type="submit" style={{"display": "flex", "alignContent": "flex-start" }}>Submit form</button>
        </div>
    </form>    
  )
}
