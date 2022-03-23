import React, { useState, useEffect, useContext } from 'react'
import { supabase } from '../client'

const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    checkUser()
    window.addEventListener('hashchange', function () {
      checkUser()
    })
  }, [])
  async function checkUser() {
    const user = supabase.auth.user()
    setUser(user)
  }
  async function signInWithGithub() {
    await supabase.auth.signIn({
      provider: 'github',
    })
  }
  async function signOut() {
    await supabase.auth.signOut()
    setUser(null)
  }
  return (
    <AuthContext.Provider value={{ user, signOut, signInWithGithub }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
