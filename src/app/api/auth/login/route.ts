import { NextRequest, NextResponse } from 'next/server'
import { compare } from 'bcryptjs'
import clientPromise from '@/lib/mongodb'
import { signToken } from '@/lib/jwt'
import { loginSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = loginSchema.parse(body)
    const { email, password } = validatedData

    // Connect to database
    const client = await clientPromise
    const db = client.db('career-assessment')
    const users = db.collection('users')

    // Find user
    const user = await users.findOne({ email })

    if (!user) {
      return NextResponse.json({
        success: false,
        error: 'Invalid email or password'
      }, { status: 401 })
    }

    // Verify password
    const isPasswordValid = await compare(password, user.password)

    if (!isPasswordValid) {
      return NextResponse.json({
        success: false,
        error: 'Invalid email or password'
      }, { status: 401 })
    }

    // Generate JWT token
    const token = signToken({
      userId: user._id,
      email: user.email,
      username: user.username
    })

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt
      }
    })

  } catch (error: any) {
    console.error('Login error:', error)

    if (error.name === 'ZodError') {
      return NextResponse.json({
        success: false,
        error: error.errors[0].message
      }, { status: 400 })
    }

    return NextResponse.json({
      success: false,
      error: 'Login failed. Please try again.'
    }, { status: 500 })
  }
}
