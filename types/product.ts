export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface FilterOptions {
  idealFor: string[];
  occasion: string[];
  work: string[];
  fabric: string[];
  segment: string[];
  suitableFor: string[];
  rawMaterials: string[];
  pattern: string[];
}