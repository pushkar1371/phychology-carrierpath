import { z } from 'zod'

// User validation schemas
export const registerSchema = z.object({
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be less than 20 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  email: z.string()
    .email('Please enter a valid email address'),
  password: z.string()
    .min(6, 'Password must be at least 6 characters long'),
})

export const loginSchema = z.object({
  email: z.string()
    .email('Please enter a valid email address'),
  password: z.string()
    .min(1, 'Password is required'),
})

// Assessment validation schemas
export const assessmentResponseSchema = z.object({
  questionId: z.number().int().min(1),
  answer: z.number().int().min(0).max(4), // 0-4 for Likert scale or multiple choice
})

export const assessmentSubmissionSchema = z.object({
  responses: z.array(assessmentResponseSchema).min(1, 'At least one response is required'),
})

// Validation helper functions
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePassword(password: string): {
  isValid: boolean
  errors: string[]
} {
  const errors: string[] = []

  if (password.length < 6) {
    errors.push('Password must be at least 6 characters long')
  }

  if (password.length > 128) {
    errors.push('Password must be less than 128 characters')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

export function validateUsername(username: string): {
  isValid: boolean
  errors: string[]
} {
  const errors: string[] = []

  if (username.length < 3) {
    errors.push('Username must be at least 3 characters')
  }

  if (username.length > 20) {
    errors.push('Username must be less than 20 characters')
  }

  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    errors.push('Username can only contain letters, numbers, and underscores')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}
