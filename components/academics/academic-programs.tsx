"use client"

import { useEffect, useState, useRef } from "react"
import { Baby, BookOpen, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const programs = [
  {
    id: "pre-primary",
    icon: Baby,
    title: "Pre-Primary Section",
    grades: "Nursery to UKG",
    ageGroup: "Ages 3-5",
    description: "A nurturing environment where young learners begin their educational journey through play-based learning, creative activities, and foundational skill development.",
    highlights: [
      "Play-based learning approach",
      "Basic literacy and numeracy",
      "Creative arts and crafts",
      "Social skill development",
      "Physical activities and games",
    ],
    teachers: 4,
  },
  {
    id: "primary",
    icon: BookOpen,
    title: "Primary Education",
    grades: "Class 1 to Class 5",
    ageGroup: "Ages 6-10",
    description: "Building strong foundations in core subjects while fostering curiosity, creativity, and a love for learning through interactive teaching methods.",
    highlights: [
      "English, Mathematics, Science",
      "Social Studies and Languages",
      "Computer education",
      "Art and physical education",
      "Value education",
    ],
    teachers: 5,
  },
  {
    id: "upper-primary",
    icon: GraduationCap,
    title: "Upper Primary Education",
    grades: "Class 6 to Class 7",
    ageGroup: "Ages 11-12",
    description: "Preparing students for higher education with advanced concepts, critical thinking skills, and comprehensive subject knowledge.",
    highlights: [
      "Advanced Mathematics and Science",
      "Language proficiency",
      "Computer-aided learning",
      "Project-based learning",
      "Exam preparation",
    ],
    teachers: 2,
  },
]

export function AcademicPrograms() {
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
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className={cn(
              "text-primary font-medium mb-2 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Our Programs
          </p>
          <h2
            className={cn(
              "font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Academic Levels
          </h2>
          <p
            className={cn(
              "text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            From pre-primary to upper primary, we offer comprehensive education 
            tailored to each age group's developmental needs.
          </p>
        </div>

        {/* Programs */}
        <div className="space-y-8">
          {programs.map((program, index) => (
            <div
              key={program.id}
              id={program.id}
              className={cn(
                "group bg-background rounded-2xl border border-border overflow-hidden transition-all duration-700 hover:shadow-lg",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="grid md:grid-cols-3 gap-6 p-6 md:p-8">
                {/* Left - Icon and Title */}
                <div className="md:border-r border-border md:pr-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <program.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    <p className="text-primary font-medium">{program.grades}</p>
                    <p className="text-muted-foreground text-sm">{program.ageGroup}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{program.teachers}</span>
                    <span>Dedicated Teachers</span>
                  </div>
                </div>

                {/* Middle - Description */}
                <div className="md:px-2">
                  <h4 className="font-semibold text-foreground mb-3">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Right - Highlights */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {program.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
