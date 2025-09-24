import { AssessmentResponse, ScoringResult, Career, PersonalityProfile } from '@/types'
import { assessmentQuestions, careerDatabase, hollandCodes } from '@/data/assessment-data'

export function calculateAssessmentScores(responses: AssessmentResponse[]): ScoringResult {
  // Initialize scores
  const hollandScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 }
  const bigFiveScores = {
    openness: 0,
    conscientiousness: 0,
    extraversion: 0,
    agreeableness: 0,
    neuroticism: 0
  }

  // Count responses for normalization
  const hollandCounts = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 }
  const bigFiveCounts = {
    openness: 0,
    conscientiousness: 0,
    extraversion: 0,
    agreeableness: 0,
    neuroticism: 0
  }

  // Calculate raw scores
  responses.forEach(response => {
    const question = assessmentQuestions.find(q => q.id === response.questionId)
    if (!question) return

    Object.entries(question.scoring).forEach(([trait, scores]) => {
      const score = scores[response.answer]

      if (hollandScores.hasOwnProperty(trait)) {
        hollandScores[trait as keyof typeof hollandScores] += score
        hollandCounts[trait as keyof typeof hollandCounts]++
      }

      if (bigFiveScores.hasOwnProperty(trait)) {
        bigFiveScores[trait as keyof typeof bigFiveScores] += score
        bigFiveCounts[trait as keyof typeof bigFiveCounts]++
      }
    })
  })

  // Normalize Holland Code scores (0-100 scale)
  const normalizedHolland: Record<string, number> = {}
  Object.entries(hollandScores).forEach(([code, score]) => {
    const maxPossible = hollandCounts[code as keyof typeof hollandCounts] * 4 // Max score per question is 4
    normalizedHolland[code] = maxPossible > 0 ? Math.round((score / maxPossible) * 100) : 0
  })

  // Normalize Big Five scores (0-100 scale)
  const normalizedBigFive: Record<string, number> = {}
  Object.entries(bigFiveScores).forEach(([trait, score]) => {
    const maxPossible = bigFiveCounts[trait as keyof typeof bigFiveCounts] * 4
    normalizedBigFive[trait] = maxPossible > 0 ? Math.round((score / maxPossible) * 100) : 0
  })

  // Determine primary personality types (top 2)
  const primaryTypes = Object.entries(normalizedHolland)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 2)
    .map(([type]) => type)

  // Generate career recommendations
  const recommendations = generateCareerRecommendations(primaryTypes, normalizedHolland)

  // Create personality profile
  const personalityProfile = createPersonalityProfile(primaryTypes, normalizedHolland, normalizedBigFive)

  return {
    hollandScores: normalizedHolland,
    bigFiveScores: normalizedBigFive,
    primaryTypes,
    personalityProfile,
    recommendations
  }
}

function generateCareerRecommendations(
  primaryTypes: string[], 
  hollandScores: Record<string, number>
): Career[] {
  const recommendations: Career[] = []

  // Get careers from primary type (60% weight)
  if (primaryTypes[0]) {
    const primaryCareers = careerDatabase[primaryTypes[0]] || []
    recommendations.push(...primaryCareers.slice(0, 6))
  }

  // Get careers from secondary type (40% weight)  
  if (primaryTypes[1]) {
    const secondaryCareers = careerDatabase[primaryTypes[1]] || []
    recommendations.push(...secondaryCareers.slice(0, 4))
  }

  // Remove duplicates and limit to 10
  const uniqueRecommendations = recommendations.filter((career, index, self) =>
    index === self.findIndex(c => c.title === career.title)
  )

  return uniqueRecommendations.slice(0, 10)
}

function createPersonalityProfile(
  primaryTypes: string[],
  hollandScores: Record<string, number>,
  bigFiveScores: Record<string, number>
): PersonalityProfile {
  const primaryHolland = hollandCodes.find(h => h.code === primaryTypes[0])
  const secondaryHolland = hollandCodes.find(h => h.code === primaryTypes[1])

  return {
    hollandType: {
      primary: primaryTypes[0],
      secondary: primaryTypes[1],
      description: primaryHolland?.description || ""
    },
    bigFiveTraits: [
      {
        name: "Openness to Experience",
        description: "Willingness to try new things and think creatively",
        score: bigFiveScores.openness || 0
      },
      {
        name: "Conscientiousness", 
        description: "Organization, self-discipline, and goal-directed behavior",
        score: bigFiveScores.conscientiousness || 0
      },
      {
        name: "Extraversion",
        description: "Orientation toward social interaction and external stimulation",
        score: bigFiveScores.extraversion || 0
      },
      {
        name: "Agreeableness",
        description: "Tendency to be cooperative, trusting, and empathetic",
        score: bigFiveScores.agreeableness || 0
      },
      {
        name: "Emotional Stability",
        description: "Ability to handle stress and emotional challenges",
        score: 100 - (bigFiveScores.neuroticism || 0) // Reverse neuroticism
      }
    ],
    strengths: primaryHolland?.traits || [],
    developmentAreas: generateDevelopmentAreas(bigFiveScores),
    workPreferences: primaryHolland?.workEnvironments || []
  }
}

function generateDevelopmentAreas(bigFiveScores: Record<string, number>): string[] {
  const areas: string[] = []

  if (bigFiveScores.conscientiousness < 50) {
    areas.push("Time management and organization")
  }

  if (bigFiveScores.extraversion < 50) {
    areas.push("Communication and networking skills")
  }

  if (bigFiveScores.agreeableness < 50) {
    areas.push("Collaboration and teamwork")
  }

  if (bigFiveScores.openness < 50) {
    areas.push("Adaptability and creative thinking")
  }

  if (bigFiveScores.neuroticism > 50) {
    areas.push("Stress management and emotional resilience")
  }

  return areas.slice(0, 3) // Limit to top 3 development areas
}

export function interpretScore(score: number): string {
  if (score >= 70) return "High"
  if (score >= 30) return "Moderate"
  return "Low"
}

export function getPersonalityDescription(primaryType: string, secondaryType?: string): string {
  const primary = hollandCodes.find(h => h.code === primaryType)
  const secondary = secondaryType ? hollandCodes.find(h => h.code === secondaryType) : null

  if (!primary) return "Unable to determine personality type"

  let description = `You are primarily a ${primary.name} (${primary.nickname}) type. ${primary.description}`

  if (secondary) {
    description += ` You also have strong ${secondary.name} characteristics, which gives you additional career flexibility.`
  }

  return description
}
