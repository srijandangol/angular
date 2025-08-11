export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  brand: string;
  rating: number;
  imageUrl?: string[];
}


// export enum ProductCategory {
//   FashionOrWears = 'fashion or wears',
//   Electronics = 'electronics',
//   HomeAppliance = 'home appliance'
// }

// export enum Brand {
//   Levis = "Levi's",
//   Nike = "Nike",
//   HM = "H&M",
//   SoundCore = "SoundCore",
//   Samsung = "Samsung",
//   Logitech = "Logitech",
//   COSORI = "COSORI",
//   DeLonghi = "De'Longhi",
//   IRobot = "iRobot",
//   MichaelKors = "Michael Kors",
//   Anker = "Anker",
//   Philips = "Philips"
// }
