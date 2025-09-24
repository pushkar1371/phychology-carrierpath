import { NextResponse } from 'next/server'
import { assessmentQuestions } from '@/data/assessment-data'

export async function GET() {
  try {
    // Return only necessary question data (without scoring info for security)
    const questionsForClient = assessmentQuestions.map(question => ({
      id: question.id,
      question: question.question,
      type: question.type,
      options: question.options
      // Don't include scoring data for security
    }))

    return NextResponse.json({
      success: true,
      data: questionsForClient
    })

  } catch (error) {
    console.error('Error fetching questions:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch assessment questions'
    }, { status: 500 })
  }
}
