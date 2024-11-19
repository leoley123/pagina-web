import React, { createContext, useContext } from 'react';

interface AuthContextType {
  user: null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: async () => {},
  signOut: async () => {}
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const signIn = async (email: string, password: string) => {
    // Implement authentication logic here
    console.log('Sign in:', email, password);
  };

  const signOut = async () => {
    // Implement sign out logic here
    console.log('Sign out');
  };

  const value = {
    user: null,
    signIn,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};