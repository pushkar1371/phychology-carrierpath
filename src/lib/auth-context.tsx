'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { User } from '@/types'

interface AuthContextType {
  user: Omit<User, 'password'> | null
  login: (token: string, userData: Omit<User, 'password'>) => void
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Omit<User, 'password'> | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')

    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData)
        setUser(parsedUser)

        // Set cookie for middleware
        document.cookie = `token=${token}; path=/; max-age=604800; secure; samesite=strict`
      } catch (error) {
        console.error('Error parsing stored user data:', error)
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
      }
    }
    setLoading(false)
  }, [])

  const login = (token: string, userData: Omit<User, 'password'>) => {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(userData))

    // Set cookie for middleware
    document.cookie = `token=${token}; path=/; max-age=604800; secure; samesite=strict`

    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    // Clear cookie
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'

    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
