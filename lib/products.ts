export interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  description?: string
  sizes?: string[]
  colors?: string[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "Nike Air Force 1 '07",
    category: "Men's Shoes",
    price: 110,
    image: "/zoom_mamba.avif",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    colors: ["White", "Black", "Red"],
  },
  {
    id: "2",
    name: "Nike Air Max 90",
    category: "Men's Shoes",
    price: 130,
    image: "/nike_journey.avif",
    description:
      "Lace up and feel the legacy. Produced at the cross section of art, music and culture, this champion running shoe helped define the '90s. Worn by presidents, revolutionized through collabs and celebrated through rare colorways, its striking visuals, Waffle outsole and exposed Air cushioning keep it alive and well.",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    colors: ["White", "Black", "Blue"],
  },
  {
    id: "3",
    name: "Nike Dunk Low",
    category: "Women's Shoes",
    price: 110,
    image: "/nike_jordan.avif",
    description:
      "Created for the hardwood but taken to the streets, the '80s basketball icon returns with perfectly shined overlays and classic team colors. With its iconic hoops design, the Nike Dunk Low channels vintage style back onto the streets while its padded, low-cut collar lets you take your game anywhere—in comfort.",
    sizes: ["US 5", "US 6", "US 7", "US 8", "US 9"],
    colors: ["White", "Pink", "Purple"],
  },
  {
    id: "4",
    name: "Nike Air Jordan 1 Mid",
    category: "Men's Shoes",
    price: 125,
    image: "/nike_distance.avif",
    description:
      "The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    colors: ["Red", "Black", "White"],
  },
  {
    id: "5",
    name: "Nike Blazer Mid '77",
    category: "Women's Shoes",
    price: 105,
    image: "/nike_structure.avif",
    description:
      "In the '70s, Nike was the new shoe on the block. So new in fact, we were still working on our game. Of course, the design improved over the years, but the name stuck. The Nike Blazer Mid '77 Vintage—classic since the beginning.",
    sizes: ["US 5", "US 6", "US 7", "US 8", "US 9"],
    colors: ["White", "Black", "Green"],
  },
  {
    id: "6",
    name: "Nike Air Max 270",
    category: "Men's Shoes",
    price: 150,
    image: "/nike_zoom.avif",
    description:
      "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colors.",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    colors: ["Black", "White", "Blue"],
  }
]
