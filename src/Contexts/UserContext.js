import React from 'react';
import { createContext } from 'react';
import app from '../Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext()
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  useEffect(() => {
      const unsubscribe= onAuthStateChanged(auth, currentUser=>{
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false)
      })
      return ()=> unsubscribe();
  }, [])

  const authInfo = { user, loading, createUser, signIn, logOut };
  return (
    <>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default UserContext