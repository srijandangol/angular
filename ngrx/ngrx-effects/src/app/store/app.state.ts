import { ProductState } from '../features/products/store/product.state';
import { CartState } from '../features/cart/store/cart.state';

export interface AppState {
  products: ProductState;
  cart: CartState;
}
