import { createContext} from "react";
import {ReactNode,useState} from "react"


interface AuthContextProps {
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider=({children}:{children:ReactNode})=>{
    const  [accessToken, setAccessToken] = useState<string | null>(null);
     return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
        {children}
        </AuthContext.Provider>
    );
}

