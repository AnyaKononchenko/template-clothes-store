export interface Product {
  id: string,
  title: string,
  img: string[],
  description: string,
  price: number,
  discount?: number,
  color: Color[],
  size: ClothSize[] | ShoesSize[],
  isNew: boolean,
  type: Type,
  fashion: Fashion[],
  brand: Brand,
  gender: Gender,
  inStock: number,
}

enum Gender {
  male = "Male",
  female = "Female",
  unisex = "Unisex",
}

enum Color {
  black = "Black",
  blue = "Blue",
  red = "Red",
  green = "Green",
  golden = "Golden",
}

enum Fashion {
  casual = "Casual style",
  newLook = "New Look",
  sport = "Sport",
  vintage = "Vintage",
  classical = "Classical style",
  the90s = "Nail the 90s",
}

enum Type {
  coatsAndJackets = "Coats & Jackets",
  dresses = "Dresses",
  jerseyTops = "Jersey Tops",
  capsAndHats = "Caps & Hats",
  shoes = "Shoes",
}

enum Brand {
  antipodium = "Antipodium",
  adidas = "Adidas",
  newBalance = "New Balance",
  riverIsland = "River Island",
  asos = "Asos",
  guess = "Guess",
}

enum ClothSize {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

enum ShoesSize {
  EU36 = "EU36",
  EU37 = "EU37",
  EU38 = "EU38",
  EU39 = "EU39",
  EU40 = "EU40",
  EU41 = "EU41",
  EU42 = "EU42",
  EU43 = "EU43",
}