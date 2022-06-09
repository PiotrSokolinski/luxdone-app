type Breed = {
  id: string;
  image: { url: string };
  name: string;
  description: string;
  adaptability: number;
  affection_level: number;
  dog_friendly: number;
  child_friendly: number;
  health_issues: number;
  intelligence: number;
  energy_level: number;
  social_needs: number;
  wikipedia_url: string;
  reference_image_id: string;
};

export type { Breed };
