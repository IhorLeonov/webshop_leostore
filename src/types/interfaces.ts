export interface Theme {
  colors: {
    black: string;
    white: string;
    background: string;
    lightBlack: string;
    red: string;
    hover: string;
    accent: string;
  };
  palette: {
    primary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
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

export interface MainSliceState {
  isLoading: boolean;
  error: string | null;
  message: string | null;
  data: {
    product: Product | null;
    products: Product[];
    filteredProducts: Product[];
    filteredCategories: string[];
    categories: string[];
  };
}

export interface CartItem extends Omit<Product, "category" | "description" | "rating"> {
  count: number;
}

export interface CartSliceState {
  cart: CartItem[];
}
