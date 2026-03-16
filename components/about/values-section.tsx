"use client"

import { useEffect, useState, useRef } from "react"
import { Heart, BookOpen, Users, Shield, Lightbulb, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We foster kindness and empathy, teaching students to care for others and contribute positively to their community.",
  },
  {
    icon: BookOpen,
    title: "Excellence",
    description: "We strive for excellence in all aspects of education, encouraging students to reach their highest potential.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "We embrace diversity and create an inclusive environment where every student feels valued and respected.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold honesty and ethical behavior, instilling strong moral values in our students.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We encourage creative thinking and embrace new approaches to learning and problem-solving.",
  },
  {
    icon: Star,
    title: "Responsibility",
    description: "We teach students to be accountable for their actions and to take ownership of their learning journey.",
  },
]

export function ValuesSection() {
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
    <section ref={sectionRef} id="values" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className={cn(
              "text-primary font-medium mb-2 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            What We Stand For
          </p>
          <h2
            className={cn(
              "font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Our Core Values
          </h2>
          <p
            className={cn(
              "text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            These principles guide everything we do at Sree Nandanam Public School, 
            shaping the way we teach, learn, and grow together.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={cn(
                "group bg-background rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all">
                <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
