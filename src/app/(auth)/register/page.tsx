'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useAuth } from '@/lib/auth-context'
import { RegisterCredentials } from '@/types'
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, CheckCircle } from 'lucide-react'

export default function ModernRegisterPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const { register, handleSubmit, formState: { errors }, watch } = useForm<RegisterCredentials>()
  const watchPassword = watch('password', '')

  const onSubmit = async (data: RegisterCredentials) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (result.success) {
        login(result.token, result.user)
        router.push('/dashboard')
      } else {
        setError(result.error || 'Registration failed')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const getPasswordStrength = (password: string) => {
    if (password.length < 6) return { strength: 0, text: 'Too short', color: 'progress-error' }
    if (password.length < 8) return { strength: 40, text: 'Weak', color: 'progress-warning' }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) return { strength: 60, text: 'Good', color: 'progress-info' }
    return { strength: 100, text: 'Strong', color: 'progress-success' }
  }

  const passwordStrength = getPasswordStrength(watchPassword)

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
            <h1 className="text-3xl font-bold text-gradient mb-2">Create Account</h1>
            <p className="text-base-content/70">Start your career discovery journey</p>
          </div>

          {/* Username Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Username</span>
            </label>
            <div className="relative">
              <input
                {...register('username', { 
                  required: 'Username is required',
                  minLength: { value: 3, message: 'Username must be at least 3 characters' },
                  maxLength: { value: 20, message: 'Username must be less than 20 characters' }
                })}
                type="text"
                placeholder="Choose a username"
                className={`input input-bordered w-full pr-10 ${errors.username ? 'input-error' : ''}`}
              />
              <User className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-base-content/40" />
            </div>
            {errors.username && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.username.message}</span>
              </label>
            )}
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
                {...register('password', { 
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Password must be at least 6 characters' }
                })}
                type={showPassword ? 'text' : 'password'}
                placeholder="Create a password"
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

            {/* Password Strength */}
            {watchPassword && (
              <div className="mt-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-base-content/60">Password strength</span>
                  <span className="text-xs font-medium">{passwordStrength.text}</span>
                </div>
                <progress className={`progress ${passwordStrength.color} w-full h-2`} value={passwordStrength.strength} max="100"></progress>
              </div>
            )}

            {errors.password && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.password.message}</span>
              </label>
            )}
          </div>

          {/* Benefits */}
          <div className="bg-base-200 rounded-lg p-4 my-4">
            <h3 className="font-medium mb-3 flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-success" />
              What you'll get:
            </h3>
            <ul className="space-y-1 text-sm text-base-content/70">
              <li className="flex items-center">
                <CheckCircle className="w-3 h-3 mr-2 text-success flex-shrink-0" />
                Personalized career recommendations
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-3 h-3 mr-2 text-success flex-shrink-0" />
                Detailed salary insights for 40+ careers
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-3 h-3 mr-2 text-success flex-shrink-0" />
                Psychology-backed personality analysis
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-3 h-3 mr-2 text-success flex-shrink-0" />
                Lifetime access to your results
              </li>
            </ul>
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
          <div className="form-control">
            <button 
              type="submit" 
              disabled={loading}
              className={`btn btn-primary btn-lg ${loading ? 'loading' : ''} group`}
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Creating account...
                </>
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>

          {/* Terms */}
          <div className="text-center text-xs text-base-content/60 mt-4">
            By creating an account, you agree to our Terms of Service and Privacy Policy
          </div>

          {/* Divider */}
          <div className="divider">or</div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-base-content/70">
              Already have an account?{' '}
              <Link href="/login" className="link link-primary font-medium hover:link-hover">
                Sign in here
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
