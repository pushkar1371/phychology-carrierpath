import { NextRequest, NextResponse } from 'next/server'
import { hash } from 'bcryptjs'
import clientPromise from '@/lib/mongodb'
import { signToken } from '@/lib/jwt'
import { registerSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = registerSchema.parse(body)
    const { username, email, password } = validatedData

    // Connect to database
    const client = await clientPromise
    const db = client.db('career-assessment')
    const users = db.collection('users')

    // Check if user already exists
    const existingUser = await users.findOne({
      $or: [{ email }, { username }]
    })

    if (existingUser) {
      return NextResponse.json({
        success: false,
        error: existingUser.email === email 
          ? 'Email already registered' 
          : 'Username already taken'
      }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await hash(password, 12)

    // Create user
    const result = await users.insertOne({
      username,
      email,
      password: hashedPassword,
      createdAt: new Date()
    })

    // Generate JWT token
    const token = signToken({ 
      userId: result.insertedId,
      email,
      username
    })

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Account created successfully',
      token,
      user: {
        _id: result.insertedId,
        username,
        email,
        createdAt: new Date()
      }
    })

  } catch (error: any) {
    console.error('Registration error:', error)

    if (error.name === 'ZodError') {
      return NextResponse.json({
        success: false,
        error: error.errors[0].message
      }, { status: 400 })
    }

    return NextResponse.json({
      success: false,
      error: 'Registration failed. Please try again.'
    }, { status: 500 })
  }
}
