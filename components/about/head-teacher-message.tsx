"use client"

import { useEffect, useState, useRef } from "react"
import { Quote, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeadTeacherMessage() {
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={cn(
                "font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Message from the Head Teacher
            </h2>
          </div>

          <div
            className={cn(
              "bg-card rounded-2xl p-8 md:p-12 border border-border relative transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary-foreground" />
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile */}
              <div className="shrink-0 text-center md:text-left">
                <div className="w-32 h-32 bg-muted rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <User className="w-16 h-16 text-muted-foreground/50" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  BINU PRABHA P.T
                </h3>
                <p className="text-primary font-medium">Head Teacher</p>
              </div>

              {/* Message */}
              <div className="flex-1">
                <blockquote className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Dear Parents and Students,
                  </p>
                  <p>
                    Welcome to Sree Nandanam Public School. It gives me great 
                    pleasure to lead an institution that has been dedicated to 
                    shaping young minds for over two decades. Our school is more 
                    than just a place of learning; it is a nurturing ground where 
                    children discover their potential and develop into confident, 
                    responsible individuals.
                  </p>
                  <p>
                    At Sree Nandanam, we believe that every child is unique and 
                    capable of achieving greatness. Our dedicated team of educators 
                    works tirelessly to provide a supportive learning environment 
                    that encourages curiosity, creativity, and critical thinking.
                  </p>
                  <p>
                    We are committed to providing quality education that prepares 
                    our students not just for examinations, but for life. I invite 
                    you to join our school family and be part of our mission to 
                    build a brighter future for our children.
                  </p>
                  <p className="font-medium text-foreground">
                    With warm regards,<br />
                    BINU PRABHA P.T
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
