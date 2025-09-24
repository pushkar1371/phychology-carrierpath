import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { verifyToken } from '@/lib/jwt'
import { calculateAssessmentScores } from '@/utils/scoring'
import { assessmentSubmissionSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

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

    // Validate input
    const validatedData = assessmentSubmissionSchema.parse(body)
    const { responses } = validatedData

    // Calculate scores using the scoring algorithm
    const scoringResult = calculateAssessmentScores(responses)

    // Connect to database
    const client = await clientPromise
    const db = client.db('career-assessment')
    const results = db.collection('assessment_results')

    // Check if user already has results (delete old ones)
    await results.deleteMany({ userId: userData.userId })

    // Save new results
    const assessmentResult = {
      userId: userData.userId,
      username: userData.username,
      responses,
      hollandScores: scoringResult.hollandScores,
      bigFiveScores: scoringResult.bigFiveScores,
      primaryTypes: scoringResult.primaryTypes,
      recommendations: scoringResult.recommendations,
      completedAt: new Date(),
      userAgent: request.headers.get('user-agent') || 'Unknown'
    }

    const result = await results.insertOne(assessmentResult)

    return NextResponse.json({
      success: true,
      message: 'Assessment completed successfully',
      data: {
        resultId: result.insertedId,
        ...assessmentResult
      }
    })

  } catch (error: any) {
    console.error('Assessment submission error:', error)

    if (error.name === 'ZodError') {
      return NextResponse.json({
        success: false,
        error: error.errors[0].message
      }, { status: 400 })
    }

    return NextResponse.json({
      success: false,
      error: 'Failed to submit assessment. Please try again.'
    }, { status: 500 })
  }
}
