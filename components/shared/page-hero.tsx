"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface PageHeroProps {
  breadcrumb: string
  title: string
  description: string
}

export function PageHero({ breadcrumb, title, description }: PageHeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-secondary via-background to-muted overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <p
            className={cn(
              "text-primary font-medium mb-4 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {breadcrumb}
          </p>

          {/* Title */}
          <h1
            className={cn(
              "font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className={cn(
              "text-lg md:text-xl text-muted-foreground leading-relaxed transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
