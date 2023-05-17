import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Auth } from "../interfaces/auth.interface";

interface AuthProviderProps {
    children: React.ReactNode
}

interface AuthProviderValues {
    auth: Auth,
    setAuth: Dispatch<SetStateAction<Auth>>
}


const AuthContext = createContext<AuthProviderValues | null>({ auth: null, setAuth: null});

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element  => {
    const [auth, setAuth] = useState<Auth>(null);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;