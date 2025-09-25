import React from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, Shield, Zap, Target, Users, TrendingUp, Star, CheckCircle } from 'lucide-react'

export default function ModernHomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10">
        <div className="hero-content text-center max-w-6xl">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="badge badge-primary badge-outline mb-8 px-4 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Phychology Based Career Discovery
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Find Your
              <br />
              <span className="text-gradient animate-pulse">Perfect Career</span>
            </h1>

            <p className="text-xl md:text-2xl text-base-content/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover careers that align with your personality, interests, and natural strengths using 
              psychology-backed assessment frameworks trusted by professionals worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/register" className="btn btn-primary btn-lg text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all group">
                Start Free Assessment
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/about" className="btn btn-outline btn-lg text-lg px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all">
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="stats stats-vertical lg:stats-horizontal shadow-2xl bg-base-100/80 backdrop-blur-sm">
              <div className="stat place-items-center">
                <div className="stat-figure text-primary">
                  <Users className="w-8 h-8" />
                </div>
                <div className="stat-title">Happy Users</div>
                <div className="stat-value text-primary">50K+</div>
                <div className="stat-desc">Career discoveries made</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-figure text-secondary">
                  <Target className="w-8 h-8" />
                </div>
                <div className="stat-title">Accuracy</div>
                <div className="stat-value text-secondary">96%</div>
                <div className="stat-desc">Assessment precision</div>
              </div>

              <div className="stat place-items-center">
                <div className="stat-figure text-accent">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="stat-title">Career Options</div>
                <div className="stat-value text-accent">40+</div>
                <div className="stat-desc">With salary insights</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gradient">Why Choose CareerPath Pro?</h2>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Our cutting-edge assessment combines proven psychology frameworks with modern technology 
              to deliver unparalleled career insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Feature 1 */}
            <div className="card bg-base-100 shadow-2xl border border-base-300 card-hover group">
              <div className="card-body items-center text-center p-8">
                <div className="bg-primary/10 p-4 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="card-title text-2xl mb-4">Lightning Fast</h3>
                <p className="text-base-content/70 leading-relaxed">
                  Complete our comprehensive 25-question assessment in just 10-15 minutes. 
                  Get instant results with detailed career recommendations and salary insights.
                </p>
                <div className="card-actions justify-center mt-4">
                  <div className="badge badge-primary badge-outline">10-15 minutes</div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-base-100 shadow-2xl border border-base-300 card-hover group">
              <div className="card-body items-center text-center p-8">
                <div className="bg-secondary/10 p-4 rounded-full mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="card-title text-2xl mb-4">Science-Backed</h3>
                <p className="text-base-content/70 leading-relaxed">
                  Built on established Holland Code and Big Five personality frameworks. 
                  Trusted by career counselors and psychologists for over 50 years.
                </p>
                <div className="card-actions justify-center mt-4">
                  <div className="badge badge-secondary badge-outline">96% Accurate</div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-base-100 shadow-2xl border border-base-300 card-hover group">
              <div className="card-body items-center text-center p-8">
                <div className="bg-accent/10 p-4 rounded-full mb-4 group-hover:bg-accent/20 transition-colors">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="card-title text-2xl mb-4">Personalized Results</h3>
                <p className="text-base-content/70 leading-relaxed">
                  Receive detailed career recommendations with salary ranges, growth prospects, 
                  and education requirements tailored to your unique personality profile.
                </p>
                <div className="card-actions justify-center mt-4">
                  <div className="badge badge-accent badge-outline">40+ Careers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Discover Your Future?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Join thousands of professionals who've found their perfect career match. 
            Start your journey today with our free assessment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/register" className="btn btn-neutral btn-lg text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all group">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/login" className="btn btn-outline btn-lg text-lg px-8 py-4 rounded-full border-white/30 text-white hover:bg-white hover:text-primary">
              Sign In
            </Link>
          </div>

          <div className="flex justify-center items-center gap-8 text-sm opacity-75">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Free Assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Instant Results</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>No Credit Card</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content">
        <aside>
          <div className="text-2xl font-bold text-gradient mb-2">CareerPath Pro</div>
          <p className="font-medium">AI-Powered Career Discovery Platform</p>
          <p className="text-sm opacity-70">Built with Next.js 15, DaisyUI, and ❤️</p>
          <p className="text-xs opacity-50">© 2025 CareerPath Pro. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  )
}
