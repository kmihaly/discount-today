import { useContext, useDebugValue } from "react";
import AuthContext from "../contexts/AuthProvider";

const useAuth = () => {
    const { auth, setAuth } = useContext(AuthContext);
    useDebugValue(auth, auth => auth?.username ? "Logged In" : "Logged Out")
    // return useContext(AuthContext);
    return {
        auth,
        isLoggedIn: auth?.username,
        setAuth
    }
}

export default useAuth;