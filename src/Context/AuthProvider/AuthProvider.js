import React, { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase';

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    // fire base data
    const constextValue = useFirebase();

    return (
        <AuthContext.Provider value={constextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;