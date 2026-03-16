"use client"

import { useEffect, useState, useRef } from "react"
import { Eye, Target } from "lucide-react"
import { cn } from "@/lib/utils"

export function VisionMission() {
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
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <div
            className={cn(
              "group relative bg-primary rounded-2xl p-8 md:p-10 overflow-hidden transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-background/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-background/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed text-lg">
                To be a leading institution that nurtures young minds, instills 
                strong values, and prepares students to become responsible 
                citizens who contribute positively to society. We envision a 
                learning environment where every child discovers their unique 
                potential and develops a lifelong love for learning.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div
            className={cn(
              "group relative bg-card rounded-2xl p-8 md:p-10 border border-border overflow-hidden transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {/* Background Pattern */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To provide quality English medium education that fosters 
                academic excellence, creativity, and holistic development. 
                We are committed to creating a safe, supportive, and inclusive 
                environment where students develop critical thinking skills, 
                moral values, and the confidence to face future challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
