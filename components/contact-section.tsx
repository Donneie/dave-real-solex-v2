import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    { icon: MapPin, label: "Address", value: "123 Solar Street, Green City, GC 12345" },
    { icon: Phone, label: "Phone", value: "+1 (234) 567-8900" },
    { icon: Mail, label: "Email", value: "info@solarpowerpro.com" },
    { icon: Clock, label: "Hours", value: "Mon-Fri: 9AM-6PM" },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium mb-2 tracking-wide uppercase">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{"Let's talk about your project"}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to switch to solar? Get in touch with our team for a free consultation and personalized quote.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, i) => (
            <div key={i} className="text-center p-6 rounded-lg border border-border bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
