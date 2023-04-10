export interface Product {
  id: string,
  title: string,
  img: string[],
  description: string,
  price: number,
  discount?: number,
  color: string[],
  size: ClothSize[] | ShoesSize[],
  isNew: boolean,
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