// import { getCurrentUser } from '@/lib/appwrite/api';
// import '@/types/index'
// import { IContextType, IUser } from '@/types/index';
// import { useNavigate } from 'react-router-dom';


// import React, { createContext, useContext, useEffect, useState } from 'react'

// export const INITIAL_USER = {
//     id: '',
//     name: '',
//     username: '',
//     email: '',
//     imageUrl: '',
//     bio: '',

// };

// const INITIAL_STATE = {
//     user: INITIAL_USER,
//     isLoading: false,
//     isAuthenticated: false,
//     setUser: () => {},
//     setisAuthenticated: () => {},
//     checkAuthUser: async () => false as boolean,
// };



// const AuthContext = createContext<IContextType>(INITIAL_STATE);

// const AuthProvder = ({ children }: { children: React.ReactNode}) => {
    
//     const [user, setUser] = useState<IUser>(INITIAL_USER)
//     const [isLoading, setIsLoading] = useState(false);
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     const navigate = useNavigate();
    
//     const checkAuthUser = async () => {
//         try {
//           const currentAccount = await getCurrentUser();
          
//           if(currentAccount) {
//             setUser({
//                 id: currentAccount.$id,
//                 name: currentAccount.name,
//                 username: currentAccount.username,
//                 email: currentAccount.email,
//                 imageUrl: currentAccount.imageUrl,
//                 bio: currentAccount.bio,
//             })

//             setIsAuthenticated(true);

//             return true;
//           }
          
//           return false;
//         } catch (error) {
//           console.error(error);
//           return false;
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         if(
//             localStorage.getItem('cookieFallback') === '[]' 
//             // localStorage.getItem('cookieFallback') === null 
//         ) navigate('/sign-in')
        
//         checkAuthUser();
//     }, [])
    

    
//     const value = {
//         user,
//         setUser,
//         isLoading,
//         setIsLoading,
//         isAuthenticated,
//         setIsAuthenticated,
//         checkAuthUser
//     }

//     return (
//       <AuthContext.Provider value={value}>
//           {children}
//       </AuthContext.Provider>
          
//     )
//   }
  
//   export default AuthProvder
  
//   export const useUserContext = () => useContext(AuthContext);
  
              

import { getCurrentUser } from '@/lib/appwrite/api';
import '@/types/index'
import { IContextType, IUser } from '@/types/index';
import { useNavigate } from 'react-router-dom';
import React, { createContext, useContext, useEffect, useState } from 'react'

export const INITIAL_USER: IUser = {
    id: '',
    name: '',
    username: '',
    email: '',
    imageUrl: '',
    bio: '',
};

const INITIAL_STATE: IContextType = {
    user: INITIAL_USER,
    isLoading: false,
    isAuthenticated: false,
    setUser: () => {},
    setIsAuthenticated: () => {}, // Correcting the name to match the interface
    setIsLoading: () => {}, 
    checkAuthUser: async () => false,
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<IUser>(INITIAL_USER);
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Correcting the name here

    const navigate = useNavigate();

    const checkAuthUser = async () => {
        try {
            const currentAccount = await getCurrentUser();
            if (currentAccount) {
                setUser({
                    id: currentAccount.$id,
                    name: currentAccount.name,
                    username: currentAccount.username,
                    email: currentAccount.email,
                    imageUrl: currentAccount.imageUrl,
                    bio: currentAccount.bio,
                });
                setIsAuthenticated(true);
                return true;
            }
            return false;
        } catch (error) {
            console.error(error);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (localStorage.getItem('cookieFallback') === '[]') navigate('/sign-in');
        checkAuthUser();
    }, []);

    const value: IContextType = {
        user,
        setUser,
        isLoading,
        setIsLoading,
        isAuthenticated,
        setIsAuthenticated, // Corrected the name to match the context and interface
        checkAuthUser,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useUserContext = () => useContext(AuthContext);

