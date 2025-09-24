import { Question, Career, HollandCode } from '@/types'

// 25 Assessment Questions with Holland Code + Big Five scoring
export const assessmentQuestions: Question[] = [
  {
    id: 1,
    question: "I prefer working with tools, machines, or equipment rather than with people or ideas",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "R": [0, 1, 2, 3, 4],
      "S": [4, 3, 2, 1, 0],
      "conscientiousness": [1, 1, 2, 3, 4]
    }
  },
  {
    id: 2,
    question: "I enjoy solving complex problems and puzzles",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "I": [0, 1, 2, 3, 4],
      "A": [2, 2, 2, 1, 0],
      "openness": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 3,
    question: "I like to express myself through creative activities like writing, art, or music",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "A": [0, 1, 2, 3, 4],
      "C": [3, 2, 2, 1, 0],
      "openness": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 4,
    question: "I find satisfaction in helping others solve their problems",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "S": [0, 1, 2, 3, 4],
      "E": [1, 1, 2, 2, 1],
      "agreeableness": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 5,
    question: "I enjoy leading teams and making important decisions",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "E": [0, 1, 2, 3, 4],
      "S": [1, 1, 2, 2, 1],
      "extraversion": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 6,
    question: "I prefer following clear procedures and working with detailed instructions",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "C": [0, 1, 2, 3, 4],
      "A": [3, 2, 2, 1, 0],
      "conscientiousness": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 7,
    question: "I would rather work outdoors than in an office environment",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "R": [0, 1, 2, 3, 4],
      "C": [2, 2, 2, 1, 0],
      "openness": [0, 1, 2, 3, 3]
    }
  },
  {
    id: 8,
    question: "I enjoy conducting research and analyzing data to find patterns",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "I": [0, 1, 2, 3, 4],
      "E": [2, 2, 2, 1, 0],
      "openness": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 9,
    question: "I feel energized when working in groups and collaborating with others",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "S": [0, 1, 2, 3, 4],
      "I": [2, 2, 2, 1, 0],
      "extraversion": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 10,
    question: "I prefer jobs where I can see tangible results of my work",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "R": [0, 1, 2, 3, 4],
      "A": [1, 1, 2, 2, 1],
      "conscientiousness": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 11,
    question: "I enjoy brainstorming new ideas and thinking creatively",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "A": [0, 1, 2, 3, 4],
      "I": [1, 1, 2, 3, 3],
      "openness": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 12,
    question: "I would enjoy teaching or training others",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "S": [0, 1, 2, 3, 4],
      "E": [1, 1, 2, 3, 3],
      "agreeableness": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 13,
    question: "I am comfortable taking risks to achieve business goals",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "E": [0, 1, 2, 3, 4],
      "C": [2, 2, 2, 1, 0],
      "extraversion": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 14,
    question: "I prefer working with numbers, records, and filing systems",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "C": [0, 1, 2, 3, 4],
      "A": [3, 2, 2, 1, 0],
      "conscientiousness": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 15,
    question: "I handle stress and pressure well in challenging situations",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "E": [0, 1, 2, 3, 4],
      "neuroticism": [4, 3, 2, 1, 0],
      "conscientiousness": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 16,
    question: "I prefer working independently rather than as part of a team",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "I": [0, 1, 2, 3, 4],
      "S": [4, 3, 2, 1, 0],
      "extraversion": [3, 2, 2, 1, 0]
    }
  },
  {
    id: 17,
    question: "I enjoy experimenting with new approaches and methods",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "A": [0, 1, 2, 3, 4],
      "C": [2, 2, 2, 1, 0],
      "openness": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 18,
    question: "I find it easy to understand and empathize with others' feelings",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "S": [0, 1, 2, 3, 4],
      "E": [1, 1, 2, 2, 1],
      "agreeableness": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 19,
    question: "I enjoy persuading others and influencing their decisions",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "E": [0, 1, 2, 3, 4],
      "S": [1, 1, 2, 1, 0],
      "extraversion": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 20,
    question: "I prefer jobs with predictable routines and clear expectations",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "C": [0, 1, 2, 3, 4],
      "A": [2, 2, 2, 1, 0],
      "conscientiousness": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 21,
    question: "I am drawn to scientific and technical subjects",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "I": [0, 1, 2, 3, 4],
      "A": [1, 1, 2, 2, 1],
      "openness": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 22,
    question: "I enjoy building or fixing things with my hands",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "R": [0, 1, 2, 3, 4],
      "S": [2, 2, 2, 1, 0],
      "conscientiousness": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 23,
    question: "I am comfortable performing in front of others or being the center of attention",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "A": [0, 1, 2, 3, 4],
      "E": [0, 1, 2, 3, 4],
      "extraversion": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 24,
    question: "I prefer jobs where I can make a positive difference in people's lives",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "S": [0, 1, 2, 3, 4],
      "E": [1, 1, 2, 2, 1],
      "agreeableness": [0, 1, 2, 3, 4]
    }
  },
  {
    id: 25,
    question: "I am detail-oriented and thorough in my work",
    type: "likert",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
    scoring: {
      "C": [0, 1, 2, 3, 4],
      "A": [1, 1, 2, 2, 1],
      "conscientiousness": [0, 1, 2, 3, 4]
    }
  }
]

// Career Database with Salary Information
export const careerDatabase: Record<string, Career[]> = {
  "R": [
    {
      title: "Mechanical Engineer",
      education: "Bachelor's degree",
      growth: "Average (4%)",
      salary: "$70,000-$95,000"
    },
    {
      title: "Carpenter",
      education: "High school + apprenticeship",
      growth: "Average (2%)",
      salary: "$40,000-$65,000"
    },
    {
      title: "Electrician",
      education: "High school + vocational training",
      growth: "Faster than average (8%)",
      salary: "$50,000-$80,000"
    },
    {
      title: "Civil Engineer",
      education: "Bachelor's degree",
      growth: "Average (2%)",
      salary: "$75,000-$105,000"
    },
    {
      title: "Chef/Cook",
      education: "High school + culinary training",
      growth: "Faster than average (6%)",
      salary: "$35,000-$70,000"
    },
    {
      title: "Automotive Technician",
      education: "High school + vocational training",
      growth: "Average (4%)",
      salary: "$40,000-$60,000"
    },
    {
      title: "Construction Manager",
      education: "Bachelor's degree",
      growth: "Faster than average (5%)",
      salary: "$85,000-$130,000"
    }
  ],
  "I": [
    {
      title: "Data Scientist",
      education: "Master's degree",
      growth: "Much faster than average (22%)",
      salary: "$90,000-$165,000"
    },
    {
      title: "Research Scientist",
      education: "Ph.D.",
      growth: "Average (3%)",
      salary: "$80,000-$140,000"
    },
    {
      title: "Software Developer",
      education: "Bachelor's degree",
      growth: "Much faster than average (25%)",
      salary: "$85,000-$150,000"
    },
    {
      title: "Laboratory Technician",
      education: "Associate degree",
      growth: "Average (3%)",
      salary: "$45,000-$65,000"
    },
    {
      title: "Market Research Analyst",
      education: "Bachelor's degree",
      growth: "Much faster than average (18%)",
      salary: "$55,000-$85,000"
    },
    {
      title: "Statistician",
      education: "Master's degree",
      growth: "Much faster than average (31%)",
      salary: "$75,000-$120,000"
    },
    {
      title: "Psychologist",
      education: "Doctoral degree",
      growth: "Faster than average (6%)",
      salary: "$70,000-$120,000"
    }
  ],
  "A": [
    {
      title: "Graphic Designer",
      education: "Bachelor's degree",
      growth: "Average (3%)",
      salary: "$45,000-$75,000"
    },
    {
      title: "Writer/Author",
      education: "Bachelor's degree",
      growth: "Slower than average (-4%)",
      salary: "$40,000-$85,000"
    },
    {
      title: "Art Director",
      education: "Bachelor's degree",
      growth: "Average (3%)",
      salary: "$75,000-$120,000"
    },
    {
      title: "Interior Designer",
      education: "Bachelor's degree",
      growth: "Average (4%)",
      salary: "$45,000-$80,000"
    },
    {
      title: "Photographer",
      education: "High school + portfolio",
      growth: "Slower than average (-4%)",
      salary: "$35,000-$75,000"
    },
    {
      title: "Web Designer",
      education: "Associate degree",
      growth: "Faster than average (8%)",
      salary: "$50,000-$90,000"
    },
    {
      title: "Musician/Composer",
      education: "Various",
      growth: "Average (2%)",
      salary: "$30,000-$80,000"
    }
  ],
  "S": [
    {
      title: "Elementary Teacher",
      education: "Bachelor's degree + license",
      growth: "Average (4%)",
      salary: "$45,000-$70,000"
    },
    {
      title: "Social Worker",
      education: "Bachelor's degree",
      growth: "Much faster than average (12%)",
      salary: "$45,000-$70,000"
    },
    {
      title: "Nurse (RN)",
      education: "Associate/Bachelor's degree",
      growth: "Faster than average (7%)",
      salary: "$65,000-$95,000"
    },
    {
      title: "Counselor",
      education: "Master's degree",
      growth: "Much faster than average (25%)",
      salary: "$50,000-$80,000"
    },
    {
      title: "Human Resources Specialist",
      education: "Bachelor's degree",
      growth: "Faster than average (5%)",
      salary: "$55,000-$85,000"
    },
    {
      title: "Physical Therapist",
      education: "Doctoral degree",
      growth: "Much faster than average (28%)",
      salary: "$80,000-$110,000"
    },
    {
      title: "Community Health Worker",
      education: "High school + training",
      growth: "Much faster than average (11%)",
      salary: "$35,000-$55,000"
    }
  ],
  "E": [
    {
      title: "Sales Manager",
      education: "Bachelor's degree",
      growth: "Average (4%)",
      salary: "$60,000-$130,000"
    },
    {
      title: "Marketing Manager",
      education: "Bachelor's degree",
      growth: "Faster than average (6%)",
      salary: "$75,000-$140,000"
    },
    {
      title: "Lawyer",
      education: "Doctoral degree (J.D.)",
      growth: "Average (4%)",
      salary: "$90,000-$200,000"
    },
    {
      title: "Real Estate Agent",
      education: "High school + license",
      growth: "Average (2%)",
      salary: "$40,000-$100,000"
    },
    {
      title: "Business Executive",
      education: "Bachelor's/Master's degree",
      growth: "Average (4%)",
      salary: "$100,000-$250,000"
    },
    {
      title: "Public Relations Specialist",
      education: "Bachelor's degree",
      growth: "Faster than average (6%)",
      salary: "$50,000-$90,000"
    },
    {
      title: "Insurance Sales Agent",
      education: "High school + license",
      growth: "Average (5%)",
      salary: "$45,000-$85,000"
    }
  ],
  "C": [
    {
      title: "Accountant",
      education: "Bachelor's degree",
      growth: "Average (4%)",
      salary: "$55,000-$85,000"
    },
    {
      title: "Financial Analyst",
      education: "Bachelor's degree",
      growth: "Faster than average (5%)",
      salary: "$65,000-$105,000"
    },
    {
      title: "Administrative Assistant",
      education: "High school diploma",
      growth: "Slower than average (-7%)",
      salary: "$35,000-$55,000"
    },
    {
      title: "Bank Teller",
      education: "High school diploma",
      growth: "Slower than average (-8%)",
      salary: "$30,000-$45,000"
    },
    {
      title: "Tax Preparer",
      education: "High school + certification",
      growth: "Average (4%)",
      salary: "$35,000-$60,000"
    },
    {
      title: "Bookkeeper",
      education: "High school + training",
      growth: "Slower than average (-3%)",
      salary: "$35,000-$55,000"
    },
    {
      title: "Auditor",
      education: "Bachelor's degree",
      growth: "Faster than average (5%)",
      salary: "$60,000-$100,000"
    }
  ]
}

// Holland Code descriptions
export const hollandCodes: HollandCode[] = [
  {
    code: "R",
    name: "Realistic",
    nickname: "The Doer",
    description: "People who like to work with animals, tools, or machines; generally avoid social activities like teaching, healing, and informing others.",
    traits: ["Practical", "Hands-on", "Problem-solving", "Independent", "Athletic"],
    workEnvironments: ["Outdoors", "Workshop", "Factory", "Laboratory", "Construction site"],
    careers: careerDatabase["R"]
  },
  {
    code: "I",
    name: "Investigative",
    nickname: "The Thinker",
    description: "People who like to observe, learn, investigate, analyze, evaluate, or solve problems.",
    traits: ["Analytical", "Intellectual", "Scientific", "Curious", "Precise"],
    workEnvironments: ["Laboratory", "Library", "Office", "Research facility", "University"],
    careers: careerDatabase["I"]
  },
  {
    code: "A",
    name: "Artistic",
    nickname: "The Creator",
    description: "People who have artistic, innovative, or intuitional abilities and like to work in unstructured situations.",
    traits: ["Creative", "Imaginative", "Expressive", "Original", "Independent"],
    workEnvironments: ["Studio", "Theater", "Museum", "Gallery", "Design office"],
    careers: careerDatabase["A"]
  },
  {
    code: "S",
    name: "Social",
    nickname: "The Helper",
    description: "People who like to work with people—to inform, enlighten, help, train, develop, or cure them, or are skilled with words.",
    traits: ["Helpful", "Understanding", "Teaching", "Healing", "Responsible"],
    workEnvironments: ["School", "Hospital", "Community center", "Office", "Religious setting"],
    careers: careerDatabase["S"]
  },
  {
    code: "E",
    name: "Enterprising",
    nickname: "The Persuader",
    description: "People who like to work with people—influencing, persuading, performing, leading, or managing for organizational goals or economic gain.",
    traits: ["Ambitious", "Energetic", "Sociable", "Self-confident", "Persuasive"],
    workEnvironments: ["Office building", "Sales floor", "Courtroom", "Political arena", "Board room"],
    careers: careerDatabase["E"]
  },
  {
    code: "C",
    name: "Conventional",
    nickname: "The Organizer",
    description: "People who like to work with data, have clerical or numerical ability, carrying things out in detail or following through on others' instructions.",
    traits: ["Organized", "Detail-oriented", "Conventional", "Efficient", "Practical"],
    workEnvironments: ["Office", "Bank", "Post office", "Filing room", "Business setting"],
    careers: careerDatabase["C"]
  }
]
