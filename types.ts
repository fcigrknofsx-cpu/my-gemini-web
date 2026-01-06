
export enum ScentType {
  WOODY = '木质调',
  FLORAL = '花香调',
  FRUITY = '果香调',
  AQUATIC = '水生调',
  HERBAL = '草本调',
  ORIENTAL = '东方调'
}

export interface Option {
  id: string;
  text: string;
  type: ScentType;
}

export interface Question {
  id: number;
  section: string;
  text: string;
  options: Option[];
}

export interface Recommendation {
  brand: string;
  name: string;
  reason: string;
  image: string;
}

export interface ScenarioRecommendation {
  title: string;
  tag: string;
  strategy: string;
  brand: string;
  perfume: string;
  image: string;
  fit: string;
  effect: string;
}

export interface ResultProfile {
  name: string;
  type: ScentType;
  traits: string[];
  description: string;
  soulMate: Recommendation[];
  advancedTry: Recommendation[];
  surpriseMix: Recommendation[];
  scenarios: ScenarioRecommendation[];
}

export type AppView = 'HOME' | 'QUIZ' | 'RESULT';
export type SubConsultation = 'NONE' | 'DISLIKE_STRONG' | 'AVOID_POWDERY';
