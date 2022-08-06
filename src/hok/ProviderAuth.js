import { createContext, useState } from 'react';

export const ContextAuth = createContext(null);

export const ProviderAuth = ({children}) => {
    const [user, setUser] = useState(null);

    const signin = (newUser, callback) => {
        setUser(newUser);
        callback();
    }
    const signout = (cb) => {
        setUser(null);
        cb();
    }

    const value = {user, signin, signout};

    return <ContextAuth.Provider value={value}>
        {children}
    </ContextAuth.Provider>
}