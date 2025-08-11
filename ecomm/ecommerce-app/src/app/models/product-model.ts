export interface Product {
  id: number;
  productName: string;
  description: string;
  productPrice: number;
  category: string;
  brand: string;
  image: string;
  rating: number;
  currency: string;
  stock: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export enum ProductCategory {
  All = 'All Products',
  Electronics = 'Electronics',
  Clothing = 'Clothing',
  Books = 'Books',
  HomeAndGarden = 'Home & Garden',
  Sports = 'Sports'
}

export enum Brand {
  Levis = "Levi's",
  Nike = "Nike",
  HM = "H&M",
  SoundCore = "SoundCore",
  Samsung = "Samsung",
  Logitech = "Logitech",
  COSORI = "COSORI",
  DeLonghi = "De'Longhi",
  IRobot = "iRobot",
  MichaelKors = "Michael Kors",
  Anker = "Anker",
  Philips = "Philips"
}
