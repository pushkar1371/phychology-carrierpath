import React from 'react'
import Link from 'next/link'
import { ArrowRight, Brain, Calculator, Target, Users, BookOpen, Star } from 'lucide-react'

export default function ModernAboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
          About Career Path Assessment
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Our assessment combines proven psychological theories with advanced algorithms 
          to help you discover careers that truly match your personality, interests, and natural strengths.
        </p>
      </div>

      {/* What Is This Assessment */}
      <div className="card bg-base-100 shadow-2xl border border-base-300 mb-8">
        <div className="card-header bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-xl">
          <h2 className="text-2xl font-bold flex items-center">
            <Brain className="w-6 h-6 mr-2" />
            What Is This Assessment?
          </h2>
        </div>
        <div className="card-body p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Comprehensive Career Matching</h3>
              <p className="text-base-content/70 mb-4">
                Our career assessment is a scientifically-backed tool that analyzes your personality traits, work preferences, 
                and natural inclinations to recommend careers where you're most likely to find satisfaction and success. 
                Unlike simple career quizzes, our assessment uses established psychological frameworks trusted by career 
                counselors and psychologists worldwide.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-3">25 Carefully Designed Questions</h3>
              <p className="text-base-content/70 mb-4">
                The assessment consists of 25 strategically crafted questions that examine different aspects of your personality:
              </p>
              <ul className="space-y-2 text-base-content/70 ml-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>Work Preferences:</strong> How you like to approach tasks and solve problems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>Social Interactions:</strong> Your comfort level with teamwork vs. independent work</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>Learning Style:</strong> How you process information and acquire new skills</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>Environment Preferences:</strong> The type of settings where you thrive</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span><strong>Motivation Factors:</strong> What drives and energizes you in work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Psychology Principles */}
      <div className="card bg-base-100 shadow-2xl border border-base-300 mb-8">
        <div className="card-header bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-t-xl">
          <h2 className="text-2xl font-bold flex items-center">
            <BookOpen className="w-6 h-6 mr-2" />
            Psychology Principles We Use
          </h2>
        </div>
        <div className="card-body p-6">
          <div className="space-y-8">
            {/* Holland Code */}
            <div>
              <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">Holland Code Theory (RIASEC)</h3>
              <p className="text-base-content/70 mb-4">
                Developed by psychologist Dr. John Holland in the 1950s, this theory is based on the idea that career 
                satisfaction depends on how well your personality matches your work environment. Holland identified six 
                personality types and corresponding work environments:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {[
                  { 
                    code: 'R', 
                    name: 'Realistic', 
                    desc: 'Prefer hands-on, practical work with tools, machines, and physical materials',
                    color: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 border-green-300',
                    careers: ['Engineer', 'Carpenter', 'Chef']
                  },
                  { 
                    code: 'I', 
                    name: 'Investigative', 
                    desc: 'Enjoy research, analysis, and solving complex intellectual problems',
                    color: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 border-blue-300',
                    careers: ['Scientist', 'Researcher', 'Analyst']
                  },
                  { 
                    code: 'A', 
                    name: 'Artistic', 
                    desc: 'Value creativity, self-expression, and working in unstructured environments',
                    color: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 border-purple-300',
                    careers: ['Designer', 'Writer', 'Artist']
                  },
                  { 
                    code: 'S', 
                    name: 'Social', 
                    desc: 'Motivated by helping, teaching, and working with people to solve problems',
                    color: 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-300 border-pink-300',
                    careers: ['Teacher', 'Counselor', 'Nurse']
                  },
                  { 
                    code: 'E', 
                    name: 'Enterprising', 
                    desc: 'Enjoy leading, persuading, and managing others to achieve organizational goals',
                    color: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 border-orange-300',
                    careers: ['Manager', 'Lawyer', 'Entrepreneur']
                  },
                  { 
                    code: 'C', 
                    name: 'Conventional', 
                    desc: 'Prefer structured, organized work with clear procedures and attention to detail',
                    color: 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 border-gray-300',
                    careers: ['Accountant', 'Administrator', 'Banker']
                  }
                ].map((type) => (
                  <div key={type.code} className="card bg-base-100 shadow-lg border-2 hover:shadow-md transition-shadow">
                    <div className="card-body p-4">
                      <div className={`w-12 h-12 mx-auto mb-3 ${type.color} rounded-full flex items-center justify-center font-bold text-lg`}>
                        {type.code}
                      </div>
                      <h4 className="font-bold text-lg text-center mb-2">{type.name}</h4>
                      <p className="text-sm text-base-content/60 text-center mb-3">{type.desc}</p>
                      <div className="text-center">
                        <p className="text-xs font-medium text-base-content/50 mb-1">Example Careers:</p>
                        <p className="text-xs text-blue-600 dark:text-blue-400">{type.careers.join(', ')}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-base-content/70">
                  <strong>Research Impact:</strong> The Holland Code has been validated through decades of research and is used by 
                  career counselors worldwide. Studies show that people whose personality types match their work environments 
                  report higher job satisfaction, better performance, and longer tenure in their careers.
                </p>
              </div>
            </div>

            {/* Big Five */}
            <div>
              <h3 className="text-2xl font-semibold text-teal-600 dark:text-teal-400 mb-4">Big Five Personality Model (OCEAN)</h3>
              <p className="text-base-content/70 mb-4">
                The Big Five is the most scientifically validated model for understanding personality. It measures five core dimensions 
                that influence how you approach work, relationships, and life challenges.
              </p>

              <div className="space-y-4 mb-6">
                {[
                  {
                    trait: 'Openness to Experience',
                    desc: 'Your willingness to try new things, think creatively, and embrace change',
                    high: 'High scorers enjoy variety, creativity, and intellectual challenges',
                    low: 'Lower scorers prefer routine, tradition, and practical approaches'
                  },
                  {
                    trait: 'Conscientiousness', 
                    desc: 'Your level of organization, self-discipline, and goal-directed behavior',
                    high: 'High scorers are organized, reliable, and achievement-oriented',
                    low: 'Lower scorers are more flexible, spontaneous, and adaptable'
                  },
                  {
                    trait: 'Extraversion',
                    desc: 'Your orientation toward social interaction and external stimulation',
                    high: 'High scorers are outgoing, energetic, and comfortable in social situations',
                    low: 'Lower scorers (introverts) prefer quieter environments and deeper focus'
                  },
                  {
                    trait: 'Agreeableness',
                    desc: 'Your tendency to be cooperative, trusting, and empathetic toward others',
                    high: 'High scorers are collaborative, supportive, and people-focused',
                    low: 'Lower scorers are more competitive, skeptical, and task-focused'
                  },
                  {
                    trait: 'Emotional Stability',
                    desc: 'Your ability to handle stress, pressure, and emotional challenges',
                    high: 'High scorers remain calm under pressure and handle stress well',
                    low: 'Lower scorers may be more sensitive to stress but also more empathetic'
                  }
                ].map((trait, index) => (
                  <div key={index} className="border-l-4 border-teal-500 pl-4">
                    <h4 className="text-lg font-semibold text-teal-700 dark:text-teal-300 mb-2">{trait.trait}</h4>
                    <p className="text-base-content/70 mb-2">{trait.desc}</p>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded">
                        <strong className="text-green-700 dark:text-green-300">High Score:</strong>
                        <p className="text-base-content/60">{trait.high}</p>
                      </div>
                      <div className="bg-orange-50 dark:bg-orange-900/20 p-2 rounded">
                        <strong className="text-orange-700 dark:text-orange-300">Lower Score:</strong>
                        <p className="text-base-content/60">{trait.low}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Career Path?</h2>
        <p className="text-lg text-base-content/70 mb-8">
          Take our scientifically-validated assessment and get personalized career recommendations 
          based on decades of psychological research.
        </p>
        <div className="space-x-4">
          <Link href="/register" className="btn btn-primary btn-lg">
            Start Your Assessment
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link href="/login" className="btn btn-outline btn-lg">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}
