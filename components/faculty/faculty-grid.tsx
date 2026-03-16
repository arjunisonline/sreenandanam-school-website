"use client"

import { useEffect, useState, useRef } from "react"
import { User, Mail, Award } from "lucide-react"
import { cn } from "@/lib/utils"

const faculty = [
  {
    id: 1,
    name: "BINU PRABHA P.T",
    role: "Head Teacher",
    department: "Administration",
    qualification: "B.Ed",
    description: "Leading our school with dedication and vision for over a decade.",
    isHead: true,
  },
  {
    id: 2,
    name: "Teacher 1",
    role: "Senior Teacher",
    department: "Primary Education",
    qualification: "B.Ed, MA",
    description: "Specializing in Mathematics and Science for primary classes.",
    isHead: false,
  },
  {
    id: 3,
    name: "Teacher 2",
    role: "Senior Teacher",
    department: "Primary Education",
    qualification: "B.Ed",
    description: "Expert in English language and literature instruction.",
    isHead: false,
  },
  {
    id: 4,
    name: "Teacher 3",
    role: "Teacher",
    department: "Upper Primary",
    qualification: "B.Ed, MSc",
    description: "Teaching advanced Mathematics and Science concepts.",
    isHead: false,
  },
  {
    id: 5,
    name: "Teacher 4",
    role: "Teacher",
    department: "Upper Primary",
    qualification: "B.Ed, MA",
    description: "Focusing on Social Studies and Language development.",
    isHead: false,
  },
  {
    id: 6,
    name: "Teacher 5",
    role: "Pre-Primary Teacher",
    department: "Pre-Primary",
    qualification: "D.El.Ed",
    description: "Creating engaging learning experiences for young children.",
    isHead: false,
  },
  {
    id: 7,
    name: "Teacher 6",
    role: "Pre-Primary Teacher",
    department: "Pre-Primary",
    qualification: "D.El.Ed",
    description: "Nurturing early childhood development through play-based learning.",
    isHead: false,
  },
  {
    id: 8,
    name: "Teacher 7",
    role: "Pre-Primary Teacher",
    department: "Pre-Primary",
    qualification: "NTT",
    description: "Specializing in foundational literacy and numeracy skills.",
    isHead: false,
  },
  {
    id: 9,
    name: "Teacher 8",
    role: "Pre-Primary Teacher",
    department: "Pre-Primary",
    qualification: "NTT",
    description: "Fostering creativity and social skills in young learners.",
    isHead: false,
  },
  {
    id: 10,
    name: "Teacher 9",
    role: "Teacher",
    department: "Primary Education",
    qualification: "B.Ed",
    description: "Teaching Hindi and Environmental Studies.",
    isHead: false,
  },
  {
    id: 11,
    name: "Teacher 10",
    role: "Computer Teacher",
    department: "Computer Science",
    qualification: "BCA, B.Ed",
    description: "Managing the computer lab and teaching digital literacy.",
    isHead: false,
  },
]

export function FacultyGrid() {
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

  // Separate head teacher from others
  const headTeacher = faculty.find(f => f.isHead)
  const otherTeachers = faculty.filter(f => !f.isHead)

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Head Teacher */}
        {headTeacher && (
          <div className="mb-16">
            <h2
              className={cn(
                "font-serif text-2xl font-bold text-foreground mb-6 text-center transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              School Leadership
            </h2>
            <div
              className={cn(
                "max-w-2xl mx-auto bg-background rounded-2xl border border-border p-8 transition-all duration-700 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <User className="w-16 h-16 text-primary/50" />
                </div>
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">{headTeacher.role}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-1">
                    {headTeacher.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">{headTeacher.qualification}</p>
                  <p className="text-muted-foreground">{headTeacher.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Teachers */}
        <div>
          <h2
            className={cn(
              "font-serif text-2xl font-bold text-foreground mb-8 text-center transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Teaching Staff
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {otherTeachers.map((teacher, index) => (
              <div
                key={teacher.id}
                className={cn(
                  "group bg-background rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${(index + 3) * 50}ms` }}
              >
                {/* Avatar */}
                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                  <User className="w-10 h-10 text-primary/50 group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Info */}
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full mb-2">
                    {teacher.department}
                  </span>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {teacher.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-1">{teacher.role}</p>
                  <p className="text-xs text-muted-foreground mb-3">{teacher.qualification}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {teacher.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <div
          className={cn(
            "mt-12 p-6 bg-secondary/50 rounded-xl text-center max-w-2xl mx-auto transition-all duration-700 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <p className="text-muted-foreground">
            Our team of <span className="font-medium text-foreground">11 dedicated female teachers</span> brings 
            warmth, expertise, and commitment to every classroom. Each teacher is 
            qualified and trained to provide the best educational experience for our students.
          </p>
        </div>
      </div>
    </section>
  )
}
