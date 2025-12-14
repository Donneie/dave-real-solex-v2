import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Leaf, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-foreground text-background">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('/solar-panels-on-rooftop-sunset.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-primary text-sm font-medium mb-4 tracking-wide uppercase">Sustainable Energy Solutions</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-balance">
            Power your future with clean solar energy
          </h1>
          <p className="text-lg md:text-xl text-background/80 mb-8 max-w-2xl leading-relaxed">
            We provide premium solar panels, inverters, and complete energy systems to help you reduce costs and embrace
            sustainable living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="#products">
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/30 text-background hover:bg-background/10 bg-transparent"
              asChild
            >
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: Zap, title: "High Efficiency", desc: "Up to 22% panel efficiency" },
            { icon: Leaf, title: "Eco-Friendly", desc: "Zero emissions, clean energy" },
            { icon: Shield, title: "25 Year Warranty", desc: "Long-term protection" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-6 rounded-lg bg-background/5 backdrop-blur">
              <item.icon className="h-8 w-8 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold text-background">{item.title}</h3>
                <p className="text-sm text-background/70">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
