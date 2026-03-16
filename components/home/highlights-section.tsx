"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { 
  GraduationCap, 
  Users, 
  Monitor, 
  BookOpen, 
  TreePine, 
  Heart,
  ArrowRight
} from "lucide-react"
import { cn } from "@/lib/utils"

const highlights = [
  {
    icon: GraduationCap,
    title: "Quality Education",
    description: "Comprehensive curriculum from Class 1 to Class 7 with English as the medium of instruction.",
    href: "/academics",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    title: "Dedicated Faculty",
    description: "11 qualified and caring teachers committed to nurturing every student's potential.",
    href: "/faculty",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Monitor,
    title: "Computer Lab",
    description: "Modern computer-aided learning lab with 5 functional systems for digital literacy.",
    href: "/facilities#computer-lab",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: BookOpen,
    title: "Library",
    description: "Access to reading resources that encourage curiosity and a love for learning.",
    href: "/facilities#library",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: TreePine,
    title: "Playground",
    description: "Spacious outdoor area for physical activities, sports, and healthy development.",
    href: "/facilities#playground",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    title: "Holistic Development",
    description: "Focus on academic excellence alongside character building and creative growth.",
    href: "/about#values",
    color: "bg-accent/10 text-accent",
  },
]

export function HighlightsSection() {
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
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className={cn(
              "text-primary font-medium mb-2 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Why Choose Us
          </p>
          <h2
            className={cn(
              "font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            School Highlights
          </h2>
          <p
            className={cn(
              "text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Discover what makes Sree Nandanam Public School a unique and 
            nurturing environment for your child's education.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "group relative bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Icon */}
              <div className={cn(
                "w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110",
                item.color
              )}>
                <item.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
