import { useForm } from "./hooks/useForm"

export const FormComponent = () => {
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

  return (
    <form onSubmit={onSubmit}>
        <div className="mb-3">
            <label className="form-label">Username</label>
            <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">@</span>
                <input 
                    type="text" 
                    className="form-control" 
                    id="userName" 
                    name="userName" 
                    placeholder="Enter username" 
                    value={userName} 
                    onChange={onInputChange} 
                    required
                />
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email" 
                placeholder="Enter email" 
                value={email} 
                onChange={onInputChange}  
                required
            />
            <div id="emailHelp" >We'll never share your email with anyone else.</div>
        </div>        
        <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
                <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    name="password" 
                    value={password} 
                    onChange={onInputChange}  
                    required 
                />
            </div>
        </div>
        <div className="mb-3">
            <button className="btn btn-primary" type="submit" >Submit form</button>
        </div>
    </form>    
  )
}
