"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function ProductFilter() {
  const [priceRange, setPriceRange] = useState([0, 200])

  const categories = [
    { id: "mens", label: "Men's Shoes" },
    { id: "womens", label: "Women's Shoes" },
    { id: "kids", label: "Kids' Shoes" },
    { id: "running", label: "Running Shoes" },
    { id: "basketball", label: "Basketball Shoes" },
  ]

  const sizes = [
    { id: "7", label: "US 7" },
    { id: "8", label: "US 8" },
    { id: "9", label: "US 9" },
    { id: "10", label: "US 10" },
    { id: "11", label: "US 11" },
    { id: "12", label: "US 12" },
  ]

  const colors = [
    { id: "black", label: "Black" },
    { id: "white", label: "White" },
    { id: "red", label: "Red" },
    { id: "blue", label: "Blue" },
    { id: "green", label: "Green" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-2">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox id={`category-${category.id}`} />
              <Label htmlFor={`category-${category.id}`}>{category.label}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Price Range</h3>
        <Slider
          defaultValue={[0, 200]}
          max={300}
          step={10}
          value={priceRange}
          onValueChange={setPriceRange}
          className="my-4"
        />
        <div className="flex justify-between">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Sizes</h3>
        <div className="space-y-2">
          {sizes.map((size) => (
            <div key={size.id} className="flex items-center space-x-2">
              <Checkbox id={`size-${size.id}`} />
              <Label htmlFor={`size-${size.id}`}>{size.label}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Colors</h3>
        <div className="space-y-2">
          {colors.map((color) => (
            <div key={color.id} className="flex items-center space-x-2">
              <Checkbox id={`color-${color.id}`} />
              <Label htmlFor={`color-${color.id}`}>{color.label}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
