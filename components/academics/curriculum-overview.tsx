"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

const subjects = [
  {
    category: "Languages",
    items: ["English", "Hindi", "Malayalam"],
    color: "bg-primary/10 text-primary",
  },
  {
    category: "Core Subjects",
    items: ["Mathematics", "Science", "Social Studies"],
    color: "bg-accent/10 text-accent",
  },
  {
    category: "Co-Curricular",
    items: ["Computer Science", "Art & Craft", "Physical Education"],
    color: "bg-primary/10 text-primary",
  },
  {
    category: "Value Education",
    items: ["Moral Science", "Environmental Studies", "Life Skills"],
    color: "bg-accent/10 text-accent",
  },
]

export function CurriculumOverview() {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <p
              className={cn(
                "text-primary font-medium mb-2 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              What We Teach
            </p>
            <h2
              className={cn(
                "font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 transition-all duration-700 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Curriculum Overview
            </h2>
            <div
              className={cn(
                "space-y-4 text-muted-foreground leading-relaxed transition-all duration-700 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <p>
                Our curriculum is designed to provide a well-rounded education 
                that prepares students for future academic success while nurturing 
                their overall development.
              </p>
              <p>
                We follow a comprehensive syllabus that covers core subjects, 
                languages, and co-curricular activities, ensuring students 
                receive exposure to diverse areas of knowledge and skill 
                development.
              </p>
              <p>
                Special emphasis is placed on English proficiency, as we are 
                an English medium institution committed to helping students 
                communicate effectively in the global language.
              </p>
            </div>

            {/* Academic Year Info */}
            <div
              className={cn(
                "mt-8 p-6 bg-card rounded-xl border border-border transition-all duration-700 delay-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <h4 className="font-semibold text-foreground mb-3">Academic Year</h4>
              <p className="text-muted-foreground text-sm">
                The academic session starts in <span className="font-medium text-foreground">April</span> each year. 
                Classes are conducted Monday through Saturday with regular assessments 
                and examinations to track student progress.
              </p>
            </div>
          </div>

          {/* Right - Subject Cards */}
          <div className="grid grid-cols-2 gap-4">
            {subjects.map((subject, index) => (
              <div
                key={subject.category}
                className={cn(
                  "bg-card rounded-xl p-5 border border-border hover:shadow-md transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <span className={cn(
                  "inline-block px-3 py-1 rounded-full text-xs font-medium mb-3",
                  subject.color
                )}>
                  {subject.category}
                </span>
                <ul className="space-y-2">
                  {subject.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
