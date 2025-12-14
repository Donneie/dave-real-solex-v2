import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CartProvider } from "@/components/cart-context"
import { ProductsProvider } from "@/components/products-context"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SolarPower Pro - Premium Solar Solutions",
  description:
    "Your trusted partner for sustainable solar energy solutions. High-quality solar panels, inverters, and complete energy systems.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ProductsProvider>
          <CartProvider>{children}</CartProvider>
        </ProductsProvider>
        <Analytics />
      </body>
    </html>
  )
}
