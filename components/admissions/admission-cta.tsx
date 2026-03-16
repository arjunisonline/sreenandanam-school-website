"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function AdmissionCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className={cn(
              "bg-card rounded-2xl border border-border p-8 md:p-12 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Apply?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Visit our school office to collect the admission form and begin 
                your child's educational journey with us. We're here to help you 
                every step of the way.
              </p>
            </div>

            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div
                className={cn(
                  "flex items-start gap-4 p-4 bg-background rounded-xl transition-all duration-500 delay-100",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">School Address</h4>
                  <p className="text-sm text-muted-foreground">
                    Parassala, Thiruvananthapuram,<br />
                    Kerala, India
                  </p>
                </div>
              </div>

              <div
                className={cn(
                  "flex items-start gap-4 p-4 bg-background rounded-xl transition-all duration-500 delay-200",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                  <p className="text-sm text-muted-foreground">
                    Monday - Saturday<br />
                    9:00 AM - 3:00 PM
                  </p>
                </div>
              </div>

              <div
                className={cn(
                  "flex items-start gap-4 p-4 bg-background rounded-xl transition-all duration-500 delay-300",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-sm text-muted-foreground">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div
                className={cn(
                  "flex items-start gap-4 p-4 bg-background rounded-xl transition-all duration-500 delay-400",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-sm text-muted-foreground">
                    info@sreenandanam.edu
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={cn(
                "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>

            {/* Note */}
            <p
              className={cn(
                "mt-8 text-center text-sm text-muted-foreground transition-all duration-700 delay-600",
                isVisible ? "opacity-100" : "opacity-0"
              )}
            >
              Online admission portal coming soon. For now, please visit the school 
              office in person to complete the admission process.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
