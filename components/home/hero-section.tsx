"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/images/hero-school.jpg",
    "/images/playground.jpg",
    "/images/assembly.jpg",
    "/images/cultural.jpg",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentImageIndex, heroImages.length]);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={cn(
            "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000",
            currentImageIndex === index ? "opacity-100" : "opacity-0"
          )}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-300 border border-white/10 hover:scale-105 active:scale-95"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-300 border border-white/10 hover:scale-105 active:scale-95"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Indicator Dots */}
      <div className="absolute bottom-8 right-4 md:right-12 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              currentImageIndex === index
                ? "bg-primary w-6"
                : "bg-white/40 hover:bg-white/60 w-2"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Dark Overlay for rich text readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8 transition-all duration-700",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
            )}
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Admissions Open for 2026-27
          </div>

          {/* Main Heading */}
          <h1
            className={cn(
              "font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-700 delay-100 text-balance",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
            )}
          >
            Nurturing Young Minds,{" "}
            <span className="text-primary-foreground">Building Bright Futures</span>
          </h1>

          {/* Subtitle */}
          <p
            className={cn(
              "text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 text-pretty",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
            )}
          >
            Sree Nandanam Public School provides quality English medium
            education for students from Class 1 to Class 7, fostering
            creativity, critical thinking, and holistic development since 2008.
          </p>

          {/* CTA Buttons */}
          <div
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
            )}
          >
            <Button asChild size="lg" className="text-base px-8">
              <Link href="/admissions">
                Apply for Admission
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8"
            >
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
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
            )}
          >
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">
                18+
              </p>
              <p className="text-sm text-white/80">
                Years of Excellence
              </p>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block" />
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">
                7
              </p>
              <p className="text-sm text-white/80">Grade Levels</p>
            </div>
            <div className="w-px h-12 bg-white/20 hidden md:block" />
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">
                100%
              </p>
              <p className="text-sm text-white/80">English Medium</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
