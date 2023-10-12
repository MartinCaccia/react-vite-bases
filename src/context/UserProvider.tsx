import { PropsWithChildren, useState } from "react"
import { UserContext, UserData } from "./UserContext"

export const UserProvider = ({children}: PropsWithChildren<{}>) => {
  const initialUser = {
    name: "initial name",
    email: "initial.email@gmail.com",
  }
  const [userData, setUser] = useState<UserData | null>(initialUser)
  return (
    <UserContext.Provider value={{userData, setUser}}>
        {children}
    </UserContext.Provider>
  )
}
