"use client"

import { useEffect, useState, useRef } from "react"
import { 
  Users, 
  Lightbulb, 
  Target, 
  Heart, 
  Monitor, 
  MessageCircle 
} from "lucide-react"
import { cn } from "@/lib/utils"

const methodologies = [
  {
    icon: Users,
    title: "Interactive Learning",
    description: "Engaging classroom discussions and group activities that encourage active participation and collaborative learning.",
  },
  {
    icon: Lightbulb,
    title: "Experiential Education",
    description: "Hands-on activities and practical experiments that make learning meaningful and memorable.",
  },
  {
    icon: Target,
    title: "Individual Attention",
    description: "Small class sizes ensure personalized guidance and support for each student's unique learning needs.",
  },
  {
    icon: Heart,
    title: "Value-Based Teaching",
    description: "Integration of moral values and character development into everyday learning experiences.",
  },
  {
    icon: Monitor,
    title: "Technology Integration",
    description: "Computer-aided learning and digital resources to enhance understanding and prepare students for the future.",
  },
  {
    icon: MessageCircle,
    title: "Continuous Assessment",
    description: "Regular feedback and assessment to track progress and identify areas for improvement.",
  },
]

export function TeachingMethodology() {
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
    <section ref={sectionRef} id="methodology" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className={cn(
              "text-primary font-medium mb-2 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            How We Teach
          </p>
          <h2
            className={cn(
              "font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Teaching Methodology
          </h2>
          <p
            className={cn(
              "text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Our approach to education combines traditional values with modern 
            teaching techniques to create an effective learning environment.
          </p>
        </div>

        {/* Methodologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methodologies.map((method, index) => (
            <div
              key={method.title}
              className={cn(
                "group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <method.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {method.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
