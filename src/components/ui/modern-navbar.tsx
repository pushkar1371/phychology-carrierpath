'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { useTheme } from 'next-themes'
import { Sun, Moon, User, LogOut, Home, Info, BarChart3 } from 'lucide-react'

export function ModernNavbar() {
  const { user, logout } = useAuth()
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  // Don't show navbar on auth pages
  if (pathname?.startsWith('/login') || pathname?.startsWith('/register')) {
    return null
  }

  const isActive = (path: string) => pathname === path

  return (
    <>
      <div className="navbar bg-base-100/80 backdrop-blur-xl border-b border-base-300 sticky top-0 z-50 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-100 rounded-box w-52 border border-base-300">
              <li>
                <Link href={user ? "/dashboard" : "/"} className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  About
                </Link>
              </li>
              {user && (
                <li>
                  <Link href="/assessment" className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    Assessment
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <Link href={user ? "/dashboard" : "/"} className="btn btn-ghost text-xl font-bold">
            <span className="text-gradient">CareerPath</span>
            <span className="text-primary">Pro</span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <Link 
                href={user ? "/dashboard" : "/"} 
                className={`btn btn-ghost rounded-btn ${isActive('/') || isActive('/dashboard') ? 'btn-active' : ''}`}
              >
                <Home className="w-4 h-4" />
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`btn btn-ghost rounded-btn ${isActive('/about') ? 'btn-active' : ''}`}
              >
                <Info className="w-4 h-4" />
                About
              </Link>
            </li>
            {user && (
              <li>
                <Link 
                  href="/assessment" 
                  className={`btn btn-ghost rounded-btn ${isActive('/assessment') ? 'btn-active' : ''}`}
                >
                  <BarChart3 className="w-4 h-4" />
                  Assessment
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          {/* Theme Toggle */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="swap swap-rotate">
                {theme === 'dark' ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </div>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-100 rounded-box w-32 border border-base-300">
              <li><button onClick={() => setTheme('light')} className="justify-start"><Sun className="w-4 h-4" /> Light</button></li>
              <li><button onClick={() => setTheme('dark')} className="justify-start"><Moon className="w-4 h-4" /> Dark</button></li>
            </ul>
          </div>

          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-8 rounded-full bg-primary text-primary-content flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-100 rounded-box w-64 border border-base-300">
                <li className="px-4 py-2">
                  <div className="flex flex-col">
                    <span className="font-semibold text-base-content">Hello, {user.username}!</span>
                    <span className="text-sm text-base-content/70">{user.email}</span>
                  </div>
                </li>
                <div className="divider my-1"></div>
                <li>
                  <Link href="/dashboard" className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/results" className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    My Results
                  </Link>
                </li>
                <div className="divider my-1"></div>
                <li>
                  <button onClick={handleLogout} className="flex items-center gap-2 text-error hover:bg-error/10">
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link href="/login" className="btn btn-ghost btn-sm">
                Sign In
              </Link>
              <Link href="/register" className="btn btn-primary btn-sm">
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
