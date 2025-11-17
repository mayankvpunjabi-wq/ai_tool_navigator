export type Category = 
  | 'writing'
  | 'coding'
  | 'image-generation'
  | 'productivity'
  | 'business'
  | 'video'
  | 'audio'
  | 'research'
  | 'education';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: Category;
  pricing: {
    free: boolean;
    paid: boolean;
    price?: string;
    pricingModel?: 'monthly' | 'yearly' | 'one-time' | 'usage-based';
  };
  features: string[];
  pros: string[];
  cons: string[];
  useCases: string[];
  website: string;
  logo?: string;
  rating?: number;
  featured?: boolean;
}

export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
  icon: string;
}

