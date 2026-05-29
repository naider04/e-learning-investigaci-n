export interface Topic {
  id: string;
  title: string;
  summary: string[];
  visualType: 'mindmap' | 'roles' | 'portal' | 'networks' | 'evolution' | 'productivity' | 'comparison';
  lessonsLearned: string;
  qrLink: string;
  qrDesc: string;
  activityTitle: string;
}

export interface Unit {
  id: number;
  title: string;
  topics: Topic[];
}

export interface GlossaryItem {
  term: string;
  definition: string;
}

export interface SuggestedReading {
  title: string;
  authorOrRef?: string;
  link?: string;
}
