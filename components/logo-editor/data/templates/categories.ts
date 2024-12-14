export const TEMPLATE_CATEGORIES = [
  { id: 'business', name: 'Business' },
  { id: 'technology', name: 'Technology' },
  { id: 'creative', name: 'Creative' },
  { id: 'food', name: 'Food & Restaurant' },
  { id: 'health', name: 'Health & Wellness' },
  { id: 'education', name: 'Education' },
  { id: 'fashion', name: 'Fashion & Beauty' },
  { id: 'sports', name: 'Sports & Fitness' },
  { id: 'nature', name: 'Nature & Environment' },
  { id: 'entertainment', name: 'Entertainment' },
] as const;

export type TemplateCategory = typeof TEMPLATE_CATEGORIES[number]['id'];