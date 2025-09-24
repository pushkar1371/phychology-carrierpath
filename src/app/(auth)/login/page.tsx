'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useAuth } from '@/lib/auth-context'
import { LoginCredentials } from '@/types'
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react'

export default function ModernLoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<LoginCredentials>()

  const onSubmit = async (data: LoginCredentials) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (result.success) {
        login(result.token, result.user)
        router.push('/dashboard')
      } else {
        setError(result.error || 'Login failed')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 py-12 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="card w-full max-w-md shadow-2xl bg-base-100 border border-base-300">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gradient mb-2">Welcome Back</h1>
            <p className="text-base-content/70">Sign in to continue your career journey</p>
          </div>

          {/* Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email Address</span>
            </label>
            <div className="relative">
              <input
                {...register('email', { 
                  required: 'Email is required',
                  pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: 'Invalid email address' }
                })}
                type="email"
                placeholder="Enter your email"
                className={`input input-bordered w-full pr-10 ${errors.email ? 'input-error' : ''}`}
              />
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-base-content/40" />
            </div>
            {errors.email && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.email.message}</span>
              </label>
            )}
          </div>

          {/* Password Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <div className="relative">
              <input
                {...register('password', { required: 'Password is required' })}
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className={`input input-bordered w-full pr-10 ${errors.password ? 'input-error' : ''}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-base-content/40 hover:text-base-content/60"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.password && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.password.message}</span>
              </label>
            )}
          </div>

          {/* Error Alert */}
          {error && (
            <div className="alert alert-error mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button 
              type="submit" 
              disabled={loading}
              className={`btn btn-primary btn-lg ${loading ? 'loading' : ''} group`}
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="divider">or</div>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-base-content/70">
              Don't have an account?{' '}
              <Link href="/register" className="link link-primary font-medium hover:link-hover">
                Create one now
              </Link>
            </p>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-4">
            <Link href="/" className="btn btn-ghost btn-sm">
              ← Back to Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
