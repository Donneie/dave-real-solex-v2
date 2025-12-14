"use client"

import { useCart } from "@/components/cart-context"
import { useProducts, type Product } from "@/components/products-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart, Check } from "lucide-react"
import { useState } from "react"

export function ProductsSection() {
  const { products } = useProducts()
  const { addToCart } = useCart()
  const [addedProducts, setAddedProducts] = useState<number[]>([])

  const handleAddToCart = (product: Product) => {
    addToCart(product)
    setAddedProducts((prev) => [...prev, product.id])
    setTimeout(() => {
      setAddedProducts((prev) => prev.filter((id) => id !== product.id))
    }, 1500)
  }

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium mb-2 tracking-wide uppercase">Our Products</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Premium Solar Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our range of high-quality solar panels, inverters, batteries, and accessories designed for maximum
            efficiency and durability.
          </p>
        </div>

        {products.length === 0 ? (
          <p className="text-center text-muted-foreground">No products available. Add products in the admin panel.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group overflow-hidden border-border hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={product.image || "/placeholder.svg?height=300&width=400&query=solar product"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-5">
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">{product.category}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                </CardContent>
                <CardFooter className="p-5 pt-0 flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground">${product.price}</span>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className={addedProducts.includes(product.id) ? "bg-primary/80" : ""}
                  >
                    {addedProducts.includes(product.id) ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Added
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
