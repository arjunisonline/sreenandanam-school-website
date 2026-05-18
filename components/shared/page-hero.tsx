"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface PageHeroProps {
  breadcrumb: string
  title: string
  description: string
  image?: string
}

export function PageHero({ breadcrumb, title, description, image = "/images/hero-school.jpg" }: PageHeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Dark Overlay for rich text readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <p
            className={cn(
              "text-primary-foreground/90 font-medium mb-4 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {breadcrumb}
          </p>

          {/* Title */}
          <h1
            className={cn(
              "font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className={cn(
              "text-lg md:text-xl text-white/90 leading-relaxed transition-all duration-700 delay-200",
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
