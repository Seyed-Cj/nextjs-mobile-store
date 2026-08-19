export type StarRating = 1 | 2 | 3 | 4 | 5;

export interface StarDistributionItem {
  star: StarRating;
  count: number;
}

export interface RatingSummary {
  average: number;
  totalCount: number;
  distribution: StarDistributionItem[];
}

export interface Review {
  id: string;
  productId: string;
  authorName: string;
  rating: number;
  date: string;
  text: string;
  helpfulCount: number;
}
