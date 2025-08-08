// src/app/app.routes.ts

export const AppRoutes = {
  HOME: '',
  LOGIN: 'login',
  SIGNUP: 'signup',
  NAVIGATION: 'navigation',
  PRODUCT: 'product',
  CART: 'cart',
  PRODUCT_DETAIL: (id: number | string) => `product/${id}`,
};
