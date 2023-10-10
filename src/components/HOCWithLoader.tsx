import { useState } from "react"


export const HOCWithLoader = (WrappedComponent: ()=>JSX.Element) => {
  return (props: any) => {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 3000);

    return (
        <div>
            {loading ? <p>Loading...</p> : <WrappedComponent {...props} />}
        </div>
    )
  }
}
