import { Dispatch, createContext } from "react";

export type UserData = {
        name: string,
        email: string,
}
export interface User {
        readonly userData: UserData | null,
        // setUser: Dispatch<UserData>
        readonly setUser: (userData: UserData) => void
}

export const UserContext = createContext<User>({
        userData: null,
        setUser: () => null,
      })