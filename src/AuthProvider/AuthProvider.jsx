import React, { createContext } from 'react';

export const DataContext = createContext(null);

const AuthProvider = ({children}) => {
console.log(children)
    const authInfo ={
        "name":'tamim',
    }
    return (
        <DataContext.Provider value ={authInfo}> 
            {children}
         </DataContext.Provider>
    );
};

export default AuthProvider;