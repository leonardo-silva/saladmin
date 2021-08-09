import React, { createContext, ReactNode, useContext, useState } from "react";

import * as AuthSession from 'expo-auth-session';
import { AUTH_URI, CLIENT_ID, CLIENT_SCOPES, REDIRECT_URIS, RESPONSE_TYPE } from "../config";

type User = {
    token: string;
}

type AuthContextData = {
    user: User;
    loading: boolean;
    signIn: () => Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode;
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token: string;
    }
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(false);

    async function signIn() {
        try {
            setLoading(true);

            const authUrl = `${AUTH_URI}?scope=${CLIENT_SCOPES}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URIS}&client_id=${CLIENT_ID}`;
            
            const response = await AuthSession.startAsync({ authUrl });
            //console.log(response);
            
            const { type, params } = response as AuthorizationResponse;

            if (type === 'success') {
                setUser({ token: params.access_token });
            }

            setLoading(false);
        } catch (error) {
            throw new Error('Erro ao fazer a autenticação!');
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            signIn
        }}>
            { children }
        </AuthContext.Provider>
    );
}

//Hook
function useAuth() {
    const context = useContext(AuthContext);
    return context;    
}

export {
    AuthProvider,
    useAuth
};
