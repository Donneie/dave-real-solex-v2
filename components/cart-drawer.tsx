"use client"

import { useCart } from "@/components/cart-context"
import { Button } from "@/components/ui/button"
import { X, Plus, Minus, Trash2, MessageCircle } from "lucide-react"

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart()

  const handleCheckout = () => {
    if (items.length === 0) return

    const message = items
      .map((item) => `• ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`)
      .join("\n")

    const fullMessage = `Hello! I would like to order the following products:\n\n${message}\n\n*Total: $${totalPrice.toFixed(2)}*\n\nPlease confirm availability and provide delivery details.`

    // Replace with your WhatsApp number (include country code without + or spaces)
    const phoneNumber = "1234567890"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`

    window.open(whatsappUrl, "_blank")
  }

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-foreground/50 z-50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Your Cart</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close cart</span>
          </Button>
        </div>

        <div className="flex-1 overflow-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
                <MessageCircle className="h-12 w-12 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-2">Your cart is empty</p>
              <p className="text-sm text-muted-foreground">Add products to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 rounded-lg bg-card border border-border">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground text-sm">{item.name}</h3>
                    <p className="text-primary font-semibold">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 bg-transparent"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 bg-transparent"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 ml-auto text-destructive hover:text-destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-border space-y-4">
            <div className="flex items-center justify-between text-lg font-bold">
              <span className="text-foreground">Total:</span>
              <span className="text-primary">${totalPrice.toFixed(2)}</span>
            </div>
            <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white" size="lg" onClick={handleCheckout}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Checkout via WhatsApp
            </Button>
            <Button variant="outline" className="w-full bg-transparent" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
