// import PropTypes from 'prop-types'

import { useContext } from "react"
import { UserContext } from "../context/UserContext"

interface Props {
    title: string,
    subtitle: string,
    number: number,
}

export default function PropsComponent({ title, subtitle, number}: Props) {
    // console.log('title: ', title, 'subtitle: ', subtitle)
    const {setUser} = useContext(UserContext)
    const changeUserContext = () => {
        setUser({
          name: "Martin Caccia",
          email: "martin.caccia@gmail.com",
        })
    }

  return (
    <>
        <h1>{ title }</h1>
        <h2>{ subtitle }</h2>
        <h2>{ number + 1 }</h2>
        <button className="btn btn-primary" onClick={()=>changeUserContext()}>Change user context</button>
        <p>Click in the button and come back to the example 2</p>
    </>
  )
}

// PropsComponent.PropTypes = { 
//     title: PropTypes.string.isRequired,
//     subtitle: PropTypes.string.isRequired,
//     number: PropTypes.number.isRequired,
// }

PropsComponent.defaultProps = {
    title: 'Title default',
    subtitle: 'default subtitle',
    number: 6,
}