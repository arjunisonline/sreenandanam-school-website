"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function CTASection() {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-background rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-background rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2
            className={cn(
              "font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Give Your Child the Gift of Quality Education
          </h2>

          {/* Description */}
          <p
            className={cn(
              "text-primary-foreground/80 text-lg mb-8 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Join the Sree Nandanam family and let us help your child discover 
            their potential. Admissions are now open for the 2026-27 academic year.
          </p>

          {/* CTA Buttons */}
          <div
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-base px-8 bg-background text-primary hover:bg-background/90"
            >
              <Link href="/admissions">
                Apply for Admission
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/contact">Schedule a Visit</Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <a
              href="tel:+91XXXXXXXXXX"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+91 XXXXX XXXXX</span>
            </a>
            <div className="w-px h-5 bg-primary-foreground/30 hidden sm:block" />
            <a
              href="mailto:info@sreenandanam.edu"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>info@sreenandanam.edu</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
