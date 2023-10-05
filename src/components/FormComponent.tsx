
export const FormComponent = () => {
  return (
    <>
    <form>
        <div className="mb-3">
            <label className="form-label">Username</label>
            <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">@</span>
                <input type="text" className="form-control" id="username" required />
            </div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" />
            <div id="emailHelp" >We'll never share your email with anyone else.</div>
        </div>        
        <div className="mb-3">
            <label className="form-label">Password</label>
            <div className="input-group">
                <input type="password" className="form-control" id="password" required />
            </div>
        </div>
        <div className="mb-3">
            <button className="btn btn-primary" type="submit">Submit form</button>
        </div>
    </form>    
    </>
  )
}
