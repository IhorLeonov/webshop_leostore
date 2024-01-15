export interface Theme {
  colors: {
    black: string;
    white: string;
    background: string;
    lightBlack: string;
    red: string;
    hover: string;
  };
  transitions: {
    easing: {
      easeInOut: string;
    };
  };
}

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

interface CartItem extends Omit<Product, "category" | "description" | "rating"> {
  count: number;
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
    cart: CartItem[];
  };
}
