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
    product: Product | null;
    products: Product[];
    filteredProducts: Product[];
    filteredCategories: string[];
    categories: string[];
  };
}

export interface Theme {
  colors: { [k: string]: string };
  transitions: {
    easing: {
      easeInOut: string;
    };
  };
}
