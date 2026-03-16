"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-background to-muted">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Admissions Open for 2026-27
          </div>

          {/* Main Heading */}
          <h1
            className={cn(
              "font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 text-balance",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Nurturing Young Minds,{" "}
            <span className="text-primary">Building Bright Futures</span>
          </h1>

          {/* Subtitle */}
          <p
            className={cn(
              "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 text-pretty",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Sree Nandanam Public School provides quality English medium education 
            for students from Class 1 to Class 7, fostering creativity, critical 
            thinking, and holistic development since 2003.
          </p>

          {/* CTA Buttons */}
          <div
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <Button asChild size="lg" className="text-base px-8">
              <Link href="/admissions">
                Apply for Admission
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link href="/about">
                <Play className="mr-2 w-4 h-4" />
                Discover Our School
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className={cn(
              "mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12 transition-all duration-700 delay-400",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-bold text-primary">20+</p>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-bold text-primary">11</p>
              <p className="text-sm text-muted-foreground">Dedicated Teachers</p>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-bold text-primary">7</p>
              <p className="text-sm text-muted-foreground">Grade Levels</p>
            </div>
            <div className="w-px h-12 bg-border hidden md:block" />
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">English Medium</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
