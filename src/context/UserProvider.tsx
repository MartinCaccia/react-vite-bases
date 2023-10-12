import { UserContext } from "./UserContext"

const user = {
    name: "Martin Caccia",
    email: "martin.caccia@gmail.com",
}

export const UserProvider = ({children}:any) => {
  return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
  )
}
