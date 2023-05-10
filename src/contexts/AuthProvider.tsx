import { ReactElement, createContext, useState } from "react";

interface Auth {
    user: number,
    accessToken: string,
    refreshToken: string
}

interface AuthProviderProps {
    children: React.ReactNode
}

interface AuthProviderValues {
    auth: Auth,
    setAuth: (auth: Auth) => void
}


const AuthContext = createContext<AuthProviderValues | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps)  => {
    const [auth, setAuth] = useState<Auth>(null);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;