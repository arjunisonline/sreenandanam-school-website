"use client"

import { useEffect, useState, useRef } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const infrastructureData = [
  { label: "Building Type", value: "Private Building" },
  { label: "Total Classrooms", value: "6" },
  { label: "Activity Rooms", value: "2" },
  { label: "Computer Systems", value: "5" },
  { label: "Boys' Toilets", value: "2" },
  { label: "Girls' Toilets", value: "2" },
  { label: "Headmaster Room", value: "Available" },
  { label: "Boundary Wall", value: "Partial" },
]

const amenities = [
  "Electricity Available",
  "Functional Tap Water",
  "Computer Lab",
  "Library Facility",
  "Playground Area",
  "Activity Rooms",
  "Proper Sanitation",
  "Safe Environment",
]

export function InfrastructureDetails() {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Infrastructure Details */}
          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              Infrastructure Details
            </h2>
            <p className="text-muted-foreground mb-8">
              Our school infrastructure is designed to provide a safe, comfortable, 
              and conducive environment for learning and development.
            </p>

            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-2">
                {infrastructureData.map((item, index) => (
                  <div
                    key={item.label}
                    className={cn(
                      "p-4 border-b border-border",
                      index % 2 === 0 && "border-r"
                    )}
                  >
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              Available Amenities
            </h2>
            <p className="text-muted-foreground mb-8">
              Essential facilities and amenities available at our school to support 
              student learning and well-being.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {amenities.map((amenity, index) => (
                <div
                  key={amenity}
                  className={cn(
                    "flex items-center gap-3 p-4 bg-card rounded-xl border border-border transition-all duration-500",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  )}
                  style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{amenity}</span>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-8 p-4 bg-secondary/50 rounded-xl">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Note:</span> Our facilities 
                are continuously improved to meet the evolving needs of our students. 
                We are committed to providing the best possible learning environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
