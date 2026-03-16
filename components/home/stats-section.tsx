"use client"

import { useEffect, useState, useRef } from "react"
import { Users, BookOpen, Building, Monitor } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    icon: Users,
    value: 11,
    label: "Qualified Teachers",
    suffix: "",
    description: "Dedicated female educators",
  },
  {
    icon: BookOpen,
    value: 7,
    label: "Grade Levels",
    suffix: "",
    description: "Class 1 to Class 7",
  },
  {
    icon: Building,
    value: 6,
    label: "Classrooms",
    suffix: "",
    description: "Well-equipped spaces",
  },
  {
    icon: Monitor,
    value: 5,
    label: "Computer Systems",
    suffix: "",
    description: "Modern technology lab",
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <span ref={ref} className="font-serif text-4xl md:text-5xl font-bold text-primary">
      {count}{suffix}
    </span>
  )
}

export function StatsSection() {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={cn(
              "font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Our School at a Glance
          </h2>
          <p
            className={cn(
              "text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Providing quality education with modern facilities and dedicated staff 
            since 2003 in the heart of Parassala, Kerala.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "group relative bg-background rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>

              {/* Counter */}
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />

              {/* Label */}
              <p className="font-medium text-foreground mt-2 mb-1">{stat.label}</p>

              {/* Description */}
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
