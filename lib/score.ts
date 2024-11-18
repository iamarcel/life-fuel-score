import { ActivityFactors } from './types';

export function calculateLFSScore(factors: ActivityFactors): number {
  // Weightings for each factor
  const weights = {
    dri: 0.25,  // Dopamine Release Intensity
    sf: 0.35,   // Sustainability Factor (slightly higher weight for long-term impact)
    si: 0.20,   // Social Impact
    hi: 0.20    // Health Impact
  };

  // Calculate weighted scores
  const weightedScores = {
    dri: factors.dri * weights.dri,
    sf: factors.sf * weights.sf,
    si: factors.si * weights.si,
    hi: factors.hi * weights.hi
  };

  // Calculate final score (0-100)
  const score = Math.round(
    // Convert from 0-10 scale to 0-100 scale
    (weightedScores.dri + weightedScores.sf + weightedScores.si + weightedScores.hi) * 10
  );

  // Ensure score stays within 0-100 range
  return Math.max(0, Math.min(100, score));
}