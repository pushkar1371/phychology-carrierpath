import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { verifyToken } from '@/lib/jwt'

export async function GET(request: NextRequest) {
  try {
    // Verify authentication
    const authHeader = request.headers.get('authorization')
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({
        success: false,
        error: 'Authentication required'
      }, { status: 401 })
    }

    const token = authHeader.substring(7)
    let userData

    try {
      userData = verifyToken(token)
    } catch (error) {
      return NextResponse.json({
        success: false,
        error: 'Invalid token'
      }, { status: 401 })
    }

    // Connect to database
    const client = await clientPromise
    const db = client.db('career-assessment')
    const results = db.collection('assessment_results')

    // Find user's most recent results
    const userResults = await results.findOne(
      { userId: userData.userId },
      { sort: { completedAt: -1 } }
    )

    if (!userResults) {
      return NextResponse.json({
        success: false,
        error: 'No assessment results found'
      }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: userResults
    })

  } catch (error) {
    console.error('Error fetching results:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch assessment results'
    }, { status: 500 })
  }
}
