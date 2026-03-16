"use client"

import { useEffect, useState, useRef } from "react"
import { Users, Award, Heart, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    icon: Users,
    value: "11",
    label: "Total Teachers",
    description: "Dedicated educators",
  },
  {
    icon: Award,
    value: "100%",
    label: "Female Faculty",
    description: "All female teachers",
  },
  {
    icon: BookOpen,
    value: "4",
    label: "Pre-Primary Teachers",
    description: "Early childhood specialists",
  },
  {
    icon: Heart,
    value: "20+",
    label: "Years Combined Experience",
    description: "In education",
  },
]

export function FacultyStats() {
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
    <section ref={sectionRef} className="py-12 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "text-center transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <p className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                {stat.value}
              </p>
              <p className="font-medium text-primary-foreground">{stat.label}</p>
              <p className="text-sm text-primary-foreground/70">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
