import { Sun } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Sun className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">SolarPower Pro</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#products" className="text-sm text-background/70 hover:text-background transition-colors">
              Products
            </a>
            <a href="#about" className="text-sm text-background/70 hover:text-background transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-background/70 hover:text-background transition-colors">
              Contact
            </a>
          </nav>
          <p className="text-sm text-background/50">© 2025 SolarPower Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
