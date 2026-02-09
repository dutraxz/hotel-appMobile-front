import React, { createContext } from "react";

type AuthContextProps = {
    token: string | null;
    isLoading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
};
    const Authcontext = createContext<AuthContextProps | undefined>(undefined);

    const AuthProvider = ({ children }: { children: React.ReactNode }) => {
        return (
            <Authcontext.Provider value={{}}>
                {children}
            </Authcontext.Provider>
        );
    };
export { Authcontext, AuthProvider };