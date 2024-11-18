export interface ActivityFactors {
  dri: number;  // Dopamine Release Intensity (0-10)
  sf: number;   // Sustainability Factor (0-10)
  si: number;   // Social Impact (0-10)
  hi: number;   // Health Impact (0-10)
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  category: string;
  factors: ActivityFactors;
  benefits: string[];
  risks: string[];
}