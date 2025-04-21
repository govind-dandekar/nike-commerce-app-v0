"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import type { Product } from "@/lib/products"

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredProducts(products)
      return
    }

    const term = searchTerm.toLowerCase()
    const results = products.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.description?.toLowerCase().includes(term),
    )

    setFilteredProducts(results)
  }, [searchTerm])

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold mb-6">Search Products</h1>

      <div className="relative w-full max-w-lg mb-8">
        <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search for products..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-10">
          <h2 className="text-xl font-medium mb-2">No products found</h2>
          <p className="text-gray-500">Try a different search term</p>
        </div>
      ) : (
        <div>
          <p className="mb-4">{filteredProducts.length} products found</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
