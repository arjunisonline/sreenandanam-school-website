"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

export function MentalHealthSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <p
              className={cn(
                "text-primary font-medium mb-2 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Student Wellbeing
            </p>
            <h2
              className={cn(
                "font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 transition-all duration-700 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Mental Health &amp; Counselling
            </h2>
            <div
              className={cn(
                "space-y-4 text-muted-foreground leading-relaxed transition-all duration-700 delay-200",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <p>
                At Sree Nandanam Public School, we believe that a child&apos;s mental health is just as
                important as their academic success. We have partnered with a professional child
                psychologist to provide dedicated mental health support for our students, ensuring
                they grow into emotionally resilient and well-rounded individuals.
              </p>
              <p>
                Our consulting psychologist conducts regular sessions focused on building emotional
                intelligence, self-awareness, and healthy coping mechanisms. Through one-on-one and
                group counselling, students learn to navigate challenges, build resilience, and
                maintain emotional balance — all within a safe, stigma-free environment where they
                feel comfortable expressing their feelings and seeking support.
              </p>
              <p>
                In addition to student sessions, we organise workshops for teachers and parents on
                stress management, mindfulness, and fostering positive relationships. This holistic
                approach ensures that every child is supported not just within the classroom, but
                across their entire learning ecosystem — nurturing cognitive development, emotional
                wellbeing, and positive growth at every stage.
              </p>
            </div>
          </div>

          {/* Doctor Profile Side */}
          <div
            className={cn(
              "transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
              {/* Doctor Image */}
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <img
                  src="/images/doctor.jpg"
                  alt="Consulting Psychologist"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full mb-2">
                    Consulting Psychologist
                  </span>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                  Dr. Psychology Consultant
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  Child &amp; Adolescent Psychologist
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our consulting psychologist works closely with students, teachers, and parents
                  to nurture positive mental health and address any emotional or behavioural
                  concerns in a supportive, confidential setting.
                </p>

                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span>Available for regular school sessions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
