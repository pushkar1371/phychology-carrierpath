'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'
import { ArrowRight, TrendingUp, Clock, Award, Zap, CheckCircle, BarChart3, User, Trophy } from 'lucide-react'

export default function ModernDashboardPage() {
  const { user } = useAuth()
  const [hasResults, setHasResults] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkForResults()
  }, [])

  const checkForResults = async () => {
    try {
      const token = localStorage.getItem('token')
      if (!token) return

      const response = await fetch('/api/assessment/results', {
        headers: { 'Authorization': `Bearer ${token}` }
      })

      if (response.ok) {
        setHasResults(true)
      }
    } catch (error) {
      // No results found or error
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="badge badge-neutral badge-outline mb-4 px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Welcome to your dashboard
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hello, <span className="animate-pulse">{user?.username}</span>!
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
              Your personalized career discovery hub. Your authentication works globally across all pages!
            </p>

            {/* Quick Stats */}
            <div className="stats stats-vertical lg:stats-horizontal shadow-2xl bg-base-100/10 backdrop-blur-sm border border-white/20">
              <div className="stat">
                <div className="stat-figure text-primary-content">
                  <User className="w-8 h-8" />
                </div>
                <div className="stat-title text-primary-content/70">Profile Status</div>
                <div className="stat-value text-primary-content">Active</div>
                <div className="stat-desc text-primary-content/70">Account verified</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-primary-content">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <div className="stat-title text-primary-content/70">Assessment</div>
                <div className="stat-value text-primary-content">{hasResults ? 'Complete' : 'Pending'}</div>
                <div className="stat-desc text-primary-content/70">{hasResults ? 'Results available' : '25 questions'}</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-primary-content">
                  <Trophy className="w-8 h-8" />
                </div>
                <div className="stat-title text-primary-content/70">Career Matches</div>
                <div className="stat-value text-primary-content">{hasResults ? '10+' : '0'}</div>
                <div className="stat-desc text-primary-content/70">Recommendations ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">

          {/* Action Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">

            {/* Assessment Card */}
            <div className="card bg-base-100 shadow-2xl border border-base-300 card-hover group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              <div className="card-body p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <div className="badge badge-primary badge-outline">Psychology-based</div>
                </div>

                <h2 className="card-title text-2xl mb-4 text-gradient">Career Assessment</h2>
                <p className="text-base-content/70 mb-6 leading-relaxed">
                  Discover your ideal career path with our comprehensive 25-question assessment.
                  Based on Holland Code and Big Five personality frameworks used by professionals worldwide.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm">25 scientifically-designed questions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm">Holland Code + Big Five analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm">Personalized career recommendations</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-4 h-4 text-base-content/60" />
                  <span className="text-sm text-base-content/60">Estimated time: 10-15 minutes</span>
                </div>

                <div className="card-actions justify-end">
                  <Link href="/assessment" className="btn btn-primary btn-wide group">
                    {hasResults ? 'Retake Assessment' : 'Start Assessment'}
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Results Card */}
            <div className="card bg-base-100 shadow-2xl border border-base-300 card-hover group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent"></div>
              <div className="card-body p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-full transition-colors ${hasResults ? 'bg-success/10 group-hover:bg-success/20' : 'bg-warning/10 group-hover:bg-warning/20'}`}>
                    <Award className={`w-8 h-8 ${hasResults ? 'text-success' : 'text-warning'}`} />
                  </div>
                  <div className={`badge badge-outline ${hasResults ? 'badge-success' : 'badge-warning'}`}>
                    {hasResults ? 'Available' : 'Pending'}
                  </div>
                </div>

                <h2 className="card-title text-2xl mb-4">Assessment Results</h2>

                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                  </div>
                ) : hasResults ? (
                  <>
                    <p className="text-base-content/70 mb-6 leading-relaxed">
                      View your comprehensive assessment results including personality analysis,
                      career recommendations with salary ranges, and professional development insights.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                        <span className="text-sm">Detailed personality profile</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                        <span className="text-sm">Top 10 career matches with salaries</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                        <span className="text-sm">Growth prospects and education requirements</span>
                      </div>
                    </div>

                    <div className="card-actions justify-end">
                      <Link href="/results" className="btn btn-secondary btn-wide group">
                        View My Results
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-base-content/70 mb-6 leading-relaxed">
                      No assessment results found yet. Complete the career assessment first to unlock
                      your personalized career recommendations and personality insights.
                    </p>

                    <div className="bg-warning/10 rounded-lg p-4 mb-6 border border-warning/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-5 h-5 text-warning" />
                        <span className="font-medium text-warning">Next Step</span>
                      </div>
                      <p className="text-sm text-base-content/70">
                        Take the assessment to generate your personalized results and career recommendations.
                      </p>
                    </div>

                    <div className="card-actions justify-end">
                      <button disabled className="btn btn-disabled btn-wide">
                        No Results Available
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
