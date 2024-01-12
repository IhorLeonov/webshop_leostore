export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

export interface MainState {
  isLoading: boolean;
  error: string | null;
  data: {
    products: Product[];
    filteredProducts: Product[];
    filteredCategories: string[];
    categories: string[];
  };
}
