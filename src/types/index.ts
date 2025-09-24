// User authentication types
export interface User {
  _id?: string
  username: string
  email: string
  password?: string
  createdAt: Date
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  username: string
  email: string
  password: string
}

export interface AuthResponse {
  success: boolean
  message?: string
  token?: string
  user?: Omit<User, 'password'>
  error?: string
}

// Assessment types
export interface Question {
  id: number
  question: string
  type: 'likert' | 'multiple'
  options: string[]
  scoring: Record<string, number[]>
}

export interface AssessmentResponse {
  questionId: number
  answer: number
}

export interface HollandCode {
  code: string
  name: string
  nickname: string
  description: string
  traits: string[]
  workEnvironments: string[]
  careers: Career[]
}

export interface Career {
  title: string
  education: string
  growth: string
  salary: string
  description?: string
}

export interface BigFiveTrait {
  name: string
  description: string
  score: number
}

export interface AssessmentResult {
  _id?: string
  userId: string
  username: string
  responses: AssessmentResponse[]
  hollandScores: Record<string, number>
  bigFiveScores: Record<string, number>
  primaryTypes: string[]
  recommendations: Career[]
  completedAt: Date
  userAgent?: string
}

export interface PersonalityProfile {
  hollandType: {
    primary: string
    secondary?: string
    description: string
  }
  bigFiveTraits: BigFiveTrait[]
  strengths: string[]
  developmentAreas: string[]
  workPreferences: string[]
}

export interface ScoringResult {
  hollandScores: Record<string, number>
  bigFiveScores: Record<string, number>
  primaryTypes: string[]
  personalityProfile: PersonalityProfile
  recommendations: Career[]
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
