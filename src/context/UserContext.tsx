import { createContext } from "react";

export interface User {
        name: string,
        email: string,
}

export const UserContext = createContext<User|null>(null)