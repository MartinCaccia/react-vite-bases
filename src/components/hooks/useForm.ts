import { useState } from "react"

export const useForm = (initialForm: any) => {
    const [formState, setFormState] = useState(initialForm)
    // const {userName, email, password} = formState

    const onInputChange = ({target}: any) => {
        // console.log(target.id)
        // console.log(target.name)
        // console.log(target.value)
        const {name, value} = target
        setFormState({
            ...formState, [name]: value
        })
    }
  return {
    ...formState,
    onInputChange
  }
}
