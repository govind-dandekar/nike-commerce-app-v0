// removed state and client handler functions

import Link from "next/link";
import { ArrowLeft, Star, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { products } from "@/lib/products";

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
  ];
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  console.log(id);

  const productId = id;

  console.log(productId);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div className="container py-10">Product not found</div>;
  }

  return (
    <div className="container py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 mb-6 text-sm font-medium"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-auto rounded-lg"
          />

          <div className="grid grid-cols-4 gap-2 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={product.image || "/placeholder.svg"}
                alt={`${product.name} view ${i}`}
                className="w-full h-auto rounded-lg cursor-pointer border hover:border-black"
              />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-lg text-gray-500">{product.category}</p>
          </div>

          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-5 w-5 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">
              4.8 (120 reviews)
            </span>
          </div>

          <div>
            <h2 className="text-2xl font-bold">${product.price.toFixed(2)}</h2>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Select Size</h3>
            <RadioGroup className="grid grid-cols-3 gap-2">
              {product.sizes?.map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <RadioGroupItem value={size} id={`size-${size}`} />
                  <Label htmlFor={`size-${size}`}>{size}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Select Color</h3>
            <RadioGroup className="grid grid-cols-3 gap-2">
              {product.colors?.map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <RadioGroupItem value={color} id={`color-${color}`} />
                  <Label htmlFor={`color-${color}`}>{color}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <Button size="lg" className="w-full">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
