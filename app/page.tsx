import Link from "next/link";
import Image from "next/image";
import { Suspense } from 'react';
import { ShoppingCart, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { ProductFilter } from "@/components/product-filter"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 192.756 192.756"
              className="h-8 w-auto"
            >
              <path
                d="M42.741 71.477c-9.881 11.604-19.355 25.994-19.45 36.75-.037 4.047 1.255 7.58 4.354 10.256 4.46 3.854 9.374 5.213 14.264 5.221 7.146.01 14.242-2.873 19.798-5.096 9.357-3.742 112.79-48.659 112.79-48.659.998-.5.811-1.123-.438-.812-.504.126-112.603 30.505-112.603 30.505a24.771 24.771 0 0 1-6.524.934c-8.615.051-16.281-4.731-16.219-14.808.024-3.943 1.231-8.698 4.028-14.291z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xl font-bold">Nike</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-8" />
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#" className="font-medium transition-colors hover:text-black/80">
              Men
            </Link>
            <Link href="#" className="font-medium transition-colors hover:text-black/80">
              Women
            </Link>
            <Link href="#" className="font-medium transition-colors hover:text-black/80">
              Kids
            </Link>
            <Link href="#" className="font-medium transition-colors hover:text-black/80">
              Collections
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-black text-xs text-white flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Button className="hidden md:flex">Sign In</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section>
          <Suspense fallback={<p>Just Do It!</p>}>
          <Image 
            src="animation.gif"
            width={1600}
            height={300}
            alt="running"
          />
        </Suspense>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">JUST DO IT</h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Discover the latest Nike innovations, top performance shoes, and premium sportswear.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-black hover:bg-white/90">
                  Shop Men
                </Button>
                <Button size="lg" className="bg-white text-black hover:bg-white/90">
                  Shop Women
                </Button>
              </div>
            </div>
          </div>
        </section> */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Check out our latest releases and best sellers.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 mt-8">
              <div className="md:w-1/4">
                <ProductFilter />
              </div>
              <div className="md:w-3/4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:h-24 px-4 md:px-6">
          <p className="text-sm text-gray-500">© 2023 Nike, Inc. All rights reserved.</p>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="#" className="text-gray-500 hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-gray-500 hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-gray-500 hover:underline underline-offset-4">
              Cookies
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
