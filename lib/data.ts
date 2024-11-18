import { Activity } from './types';
import { calculateLFSScore } from './score';

export const activities: Activity[] = [
  {
    id: 'walking-nature',
    name: 'Walking in Nature',
    description: 'Taking a mindful walk in natural surroundings, engaging with the environment.',
    category: 'Physical Activity',
    factors: {
      dri: 6,    // Moderate dopamine release
      sf: 9,     // High sustainability
      si: 7,     // Good social potential
      hi: 10     // Excellent health benefits
    },
    benefits: [
      'Reduces stress and anxiety',
      'Improves cardiovascular health',
      'Enhances mood naturally',
      'Promotes mindfulness',
    ],
    risks: ['Minimal risks when done safely'],
  },
  {
    id: 'reading-book',
    name: 'Reading a Book',
    description: 'Engaging with a physical book, focusing on long-form content.',
    category: 'Mental Activity',
    factors: {
      dri: 5,    // Moderate dopamine release
      sf: 9,     // High sustainability
      si: 6,     // Moderate social impact (discussion potential)
      hi: 8      // Good health benefits
    },
    benefits: [
      'Improves focus and concentration',
      'Enhances vocabulary and knowledge',
      'Reduces stress',
      'Promotes better sleep when done before bed',
    ],
    risks: ['Eye strain if done for extended periods'],
  },
  {
    id: 'meditation',
    name: 'Meditation',
    description: 'Practicing mindfulness and focused breathing exercises.',
    category: 'Mental Activity',
    factors: {
      dri: 4,    // Lower immediate dopamine
      sf: 10,    // Extremely sustainable
      si: 7,     // Good social impact
      hi: 10     // Excellent health benefits
    },
    benefits: [
      'Reduces anxiety and stress',
      'Improves emotional regulation',
      'Enhances self-awareness',
      'Promotes better sleep',
    ],
    risks: ['None when practiced appropriately'],
  },
  {
    id: 'social-media',
    name: 'Social Media Scrolling',
    description: 'Passively consuming content on social media platforms.',
    category: 'Digital Activity',
    factors: {
      dri: 9,    // High dopamine spike
      sf: 2,     // Low sustainability
      si: 3,     // Poor real social interaction
      hi: 2      // Negative health impact
    },
    benefits: [
      'Can provide social connection',
      'Access to information',
      'Entertainment value',
    ],
    risks: [
      'Addictive behavior patterns',
      'Decreased attention span',
      'Negative impact on mental health',
      'FOMO and social comparison',
    ],
  },
  {
    id: 'exercise',
    name: 'Exercise',
    description: 'Engaging in structured physical activity or sports.',
    category: 'Physical Activity',
    factors: {
      dri: 7,    // Good dopamine release
      sf: 9,     // High sustainability
      si: 8,     // Great social potential
      hi: 10     // Excellent health benefits
    },
    benefits: [
      'Improves physical health',
      'Boosts mood and energy',
      'Reduces stress',
      'Promotes better sleep',
    ],
    risks: ['Risk of injury if not done properly'],
  },
  {
    id: 'creative-work',
    name: 'Creative Work',
    description: 'Engaging in artistic or creative activities like painting, writing, or music.',
    category: 'Creative Activity',
    factors: {
      dri: 6,    // Moderate dopamine release
      sf: 8,     // Good sustainability
      si: 7,     // Good social potential
      hi: 8      // Good health benefits
    },
    benefits: [
      'Promotes self-expression',
      'Reduces stress',
      'Enhances problem-solving skills',
      'Builds confidence',
    ],
    risks: ['Perfectionism if not managed well'],
  },
];

// Add computed score property to activities
export const activitiesWithScores = activities.map(activity => ({
  ...activity,
  score: calculateLFSScore(activity.factors)
}));