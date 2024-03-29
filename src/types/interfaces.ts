export interface Theme {
  colors: {
    black: string;
    white: string;
    background: string;
    lightBlack: string;
    lightGray: string;
    gray: string;
    pink: string;
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
  page: number;
  notFound: boolean;

  data: {
    product: Product | null;
    products: Product[];
    filteredProducts: Product[];
    categories: string[];
  };
}

export interface CartItem extends Omit<Product, "category" | "description" | "rating"> {
  count: number;
}

export interface CartSliceState {
  cart: CartItem[];
  totalPrice: number;
}

export interface FormValues {
  name: string;
  email: string;
  phone: string;
}
