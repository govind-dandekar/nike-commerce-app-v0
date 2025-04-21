"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
    // Show a toast notification
    alert(`Added ${product.name} to cart!`)
  }

  return (
    <div className="group relative overflow-hidden rounded-lg border">
      <Link href={`/products/${product.id}`} className="block">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 opacity-70 hover:opacity-100"
        onClick={() => setIsWishlisted(!isWishlisted)}
      >
        <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
      </Button>
      <div className="p-4">
        <Link href={`/products/${product.id}`} className="block">
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.category}</p>
          <p className="mt-2 font-bold">${product.price.toFixed(2)}</p>
        </Link>
        <div className="mt-4">
          <Button className="w-full" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
