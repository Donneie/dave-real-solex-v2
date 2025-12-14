import { CheckCircle } from "lucide-react"

export function AboutSection() {
  const features = [
    "10+ years of industry experience",
    "Certified installation partners",
    "Premium quality products only",
    "Comprehensive after-sales support",
    "Flexible financing options",
    "Free site assessment",
  ]

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-sm font-medium mb-2 tracking-wide uppercase">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Leading the solar revolution since 2014
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              SolarPower Pro is committed to making clean energy accessible to everyone. We partner with top
              manufacturers to bring you the most efficient and reliable solar solutions at competitive prices.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="/solar-technician-installing-panels-rooftop.jpg" alt="Solar installation" className="rounded-lg shadow-lg" />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-sm">Installations Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
