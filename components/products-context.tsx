"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  description: string
}

interface ProductsContextType {
  products: Product[]
  addProduct: (product: Omit<Product, "id">) => void
  updateProduct: (id: number, product: Omit<Product, "id">) => void
  deleteProduct: (id: number) => void
}

const defaultProducts: Product[] = [
  {
    id: 1,
    name: "MonoCrystal 450W Panel",
    price: 299,
    image: "/monocrystalline-solar-panel.jpg",
    category: "Solar Panels",
    description: "High-efficiency monocrystalline solar panel with 22% efficiency rate.",
  },
  {
    id: 2,
    name: "PolyCrystal 350W Panel",
    price: 199,
    image: "/polycrystalline-solar-panel-blue.jpg",
    category: "Solar Panels",
    description: "Cost-effective polycrystalline panel ideal for residential use.",
  },
  {
    id: 3,
    name: "Hybrid 5kW Inverter",
    price: 1299,
    image: "/solar-inverter-white-modern.jpg",
    category: "Inverters",
    description: "Smart hybrid inverter with battery backup support and app monitoring.",
  },
  {
    id: 4,
    name: "Lithium Battery 10kWh",
    price: 4999,
    image: "/lithium-battery-storage-solar.jpg",
    category: "Batteries",
    description: "High-capacity lithium battery for energy storage and backup power.",
  },
  {
    id: 5,
    name: "Mounting Rail Kit",
    price: 149,
    image: "/solar-panel-mounting-rails-aluminum.jpg",
    category: "Accessories",
    description: "Complete aluminum mounting kit for rooftop installations.",
  },
  {
    id: 6,
    name: "Solar Cable 50m",
    price: 89,
    image: "/solar-cable-red-black.jpg",
    category: "Accessories",
    description: "UV-resistant solar cables rated for outdoor use.",
  },
]

const ProductsContext = createContext<ProductsContextType | undefined>(undefined)

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(defaultProducts)
  const [isInitialized, setIsInitialized] = useState(false)

  // Load products from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("solar-products")
    if (stored) {
      setProducts(JSON.parse(stored))
    }
    setIsInitialized(true)
  }, [])

  // Save products to localStorage when changed
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("solar-products", JSON.stringify(products))
    }
  }, [products, isInitialized])

  const addProduct = (product: Omit<Product, "id">) => {
    const newId = Math.max(...products.map((p) => p.id), 0) + 1
    setProducts((prev) => [...prev, { ...product, id: newId }])
  }

  const updateProduct = (id: number, product: Omit<Product, "id">) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...product, id } : p)))
  }

  const deleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <ProductsContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductsContext)
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider")
  }
  return context
}
