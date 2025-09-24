'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { Question, AssessmentResponse } from '@/types'
import { assessmentQuestions } from '@/data/assessment-data'
import { ChevronLeft, ChevronRight, Clock, CheckCircle } from 'lucide-react'

export default function ModernAssessmentPage() {
  const router = useRouter()
  const { user } = useAuth()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState<Record<number, number>>({})
  const [loading, setLoading] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15 * 60) // 15 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleAnswer = (questionId: number, answer: number) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: answer
    }))
  }

  const nextQuestion = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    }
  }

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const submitAssessment = async () => {
    if (Object.keys(responses).length !== assessmentQuestions.length) {
      alert('Please answer all questions before submitting.')
      return
    }

    setLoading(true)

    try {
      const assessmentResponses: AssessmentResponse[] = Object.entries(responses).map(([questionId, answer]) => ({
        questionId: parseInt(questionId),
        answer
      }))

      const token = localStorage.getItem('token')
      const response = await fetch('/api/assessment/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ responses: assessmentResponses })
      })

      const result = await response.json()

      if (result.success) {
        router.push('/results')
      } else {
        alert('Failed to submit assessment. Please try again.')
      }
    } catch (error) {
      alert('Error submitting assessment. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100
  const question = assessmentQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200">
      <div className="container mx-auto px-4 py-8 max-w-4xl">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gradient mb-4">Career Assessment</h1>
          <p className="text-base-content/70 mb-6">
            Answer honestly for the most accurate career recommendations
          </p>

          {/* Progress and Timer */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-medium">{formatTime(timeLeft)}</span>
            </div>
            <div className="text-sm text-base-content/60">
              Question {currentQuestion + 1} of {assessmentQuestions.length}
            </div>
          </div>

          <progress className="progress progress-primary w-full h-3" value={progress} max="100"></progress>
        </div>

        {/* Question Card */}
        <div className="card bg-base-100 shadow-2xl border border-base-300 mb-8">
          <div className="card-body p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <label 
                  key={index}
                  className={`flex items-center p-4 rounded-lg cursor-pointer transition-all hover:bg-base-200 ${
                    responses[question.id] === index ? 'bg-primary/10 border-2 border-primary' : 'border border-base-300'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={index}
                    checked={responses[question.id] === index}
                    onChange={() => handleAnswer(question.id, index)}
                    className="radio radio-primary mr-4"
                  />
                  <span className="text-base-content flex-1">{option}</span>
                  {responses[question.id] === index && (
                    <CheckCircle className="w-5 h-5 text-primary ml-2" />
                  )}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button 
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
            className="btn btn-outline btn-lg"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </button>

          <div className="flex gap-2">
            {assessmentQuestions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  responses[assessmentQuestions[index].id] !== undefined
                    ? 'bg-success'
                    : index === currentQuestion
                    ? 'bg-primary'
                    : 'bg-base-300'
                }`}
              />
            ))}
          </div>

          {currentQuestion === assessmentQuestions.length - 1 ? (
            <button 
              onClick={submitAssessment}
              disabled={loading || Object.keys(responses).length !== assessmentQuestions.length}
              className={`btn btn-primary btn-lg ${loading ? 'loading' : ''}`}
            >
              {loading ? 'Submitting...' : 'Submit Assessment'}
            </button>
          ) : (
            <button 
              onClick={nextQuestion}
              disabled={responses[question.id] === undefined}
              className="btn btn-primary btn-lg"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
