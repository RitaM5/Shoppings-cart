import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;