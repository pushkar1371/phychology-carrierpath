'use client'

import React, { useState, useEffect } from 'react'
import { useAuth } from '@/lib/auth-context'
import { AssessmentResult } from '@/types'
import { BarChart3, User, TrendingUp, Target, Award, Download, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function ModernResultsPage() {
  const { user } = useAuth()
  const [results, setResults] = useState<AssessmentResult | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchResults()
  }, [])

  const fetchResults = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/assessment/results', {
        headers: { 'Authorization': `Bearer ${token}` }
      })

      if (response.ok) {
        const data = await response.json()
        setResults(data.data)
      } else {
        setError('No results found. Please take the assessment first.')
      }
    } catch (err) {
      setError('Error loading results. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="text-base-content/70 mt-4">Loading your results...</p>
        </div>
      </div>
    )
  }

  if (error || !results) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="card bg-base-100 shadow-xl max-w-md">
          <div className="card-body text-center">
            <h2 className="card-title justify-center text-error mb-4">No Results Found</h2>
            <p className="text-base-content/70 mb-6">
              {error || 'You haven\'t completed the assessment yet.'}
            </p>
            <Link href="/assessment" className="btn btn-primary">
              Take Assessment
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-success'
    if (score >= 40) return 'text-warning'
    return 'text-error'
  }

  const getScoreLabel = (score: number) => {
    if (score >= 70) return 'High'
    if (score >= 40) return 'Moderate'
    return 'Low'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200">
      <div className="container mx-auto px-4 py-8 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Your Career Results</h1>
          <p className="text-xl text-base-content/70 mb-6">
            Personalized career recommendations based on your personality assessment
          </p>
          <div className="badge badge-success badge-lg">
            <Award className="w-4 h-4 mr-2" />
            Assessment Completed
          </div>
        </div>

        {/* Holland Code Scores */}
        <div className="card bg-base-100 shadow-2xl border border-base-300 mb-8">
          <div className="card-header bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-t-xl">
            <h2 className="text-2xl font-bold flex items-center">
              <BarChart3 className="w-6 h-6 mr-2" />
              Holland Code Personality Profile
            </h2>
          </div>
          <div className="card-body p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {Object.entries(results.hollandScores).map(([code, score]) => {
                const codeNames = {
                  R: 'Realistic',
                  I: 'Investigative', 
                  A: 'Artistic',
                  S: 'Social',
                  E: 'Enterprising',
                  C: 'Conventional'
                }

                return (
                  <div key={code} className="text-center">
                    <div className="radial-progress text-primary mb-3" style={{"--value": score} as any}>
                      <span className="text-2xl font-bold">{score}</span>
                    </div>
                    <h3 className="font-bold text-lg">{code} - {codeNames[code as keyof typeof codeNames]}</h3>
                    <div className={`badge ${getScoreColor(score)} badge-outline`}>
                      {getScoreLabel(score)}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="bg-primary/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Your Primary Types:</h3>
              <p className="text-base-content/70">
                <strong>{results.primaryTypes[0]}</strong>
                {results.primaryTypes[1] && <> and <strong>{results.primaryTypes[1]}</strong></>}
                {' '}personality types are your strongest matches.
              </p>
            </div>
          </div>
        </div>

        {/* Big Five Traits */}
        <div className="card bg-base-100 shadow-2xl border border-base-300 mb-8">
          <div className="card-header bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-t-xl">
            <h2 className="text-2xl font-bold flex items-center">
              <User className="w-6 h-6 mr-2" />
              Big Five Personality Traits
            </h2>
          </div>
          <div className="card-body p-6">
            <div className="space-y-4">
              {Object.entries(results.bigFiveScores).map(([trait, score]) => {
                const traitNames = {
                  openness: 'Openness to Experience',
                  conscientiousness: 'Conscientiousness',
                  extraversion: 'Extraversion', 
                  agreeableness: 'Agreeableness',
                  neuroticism: 'Emotional Stability'
                }

                return (
                  <div key={trait} className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-semibold">{traitNames[trait as keyof typeof traitNames]}</h4>
                      <div className="flex items-center gap-3 mt-2">
                        <progress className="progress progress-primary w-32" value={score} max="100"></progress>
                        <span className={`font-bold ${getScoreColor(score)}`}>
                          {score}/100 ({getScoreLabel(score)})
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Career Recommendations */}
        <div className="card bg-base-100 shadow-2xl border border-base-300 mb-8">
          <div className="card-header bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-t-xl">
            <h2 className="text-2xl font-bold flex items-center">
              <Target className="w-6 h-6 mr-2" />
              Top Career Recommendations
            </h2>
          </div>
          <div className="card-body p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {results.recommendations.slice(0, 8).map((career, index) => (
                <div key={index} className="card bg-base-200 shadow-lg border border-base-300 hover:shadow-xl transition-shadow">
                  <div className="card-body p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="card-title text-lg">{career.title}</h3>
                      <div className="badge badge-primary badge-outline">#{index + 1}</div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium">Salary Range:</span>
                        <span className="text-success font-bold">{career.salary}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Education:</span>
                        <span>{career.education}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Growth:</span>
                        <span className="text-info">{career.growth}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.print()} 
              className="btn btn-outline btn-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Results
            </button>
            <Link href="/assessment" className="btn btn-secondary btn-lg">
              <RefreshCw className="w-5 h-5 mr-2" />
              Retake Assessment
            </Link>
            <Link href="/dashboard" className="btn btn-primary btn-lg">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
