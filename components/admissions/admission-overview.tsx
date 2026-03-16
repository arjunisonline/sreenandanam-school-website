"use client"

import { useEffect, useState, useRef } from "react"
import { Calendar, FileText, Users, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

const eligibilityInfo = [
  {
    grade: "Pre-Primary (Nursery - UKG)",
    age: "3 - 5 years",
    note: "As of June 1st of the admission year",
  },
  {
    grade: "Class 1",
    age: "5+ years",
    note: "Completed pre-primary education",
  },
  {
    grade: "Class 2 - 7",
    age: "6+ years",
    note: "Transfer from recognized school",
  },
]

const requiredDocuments = [
  "Birth Certificate (original and copy)",
  "Transfer Certificate (for Class 2 onwards)",
  "Previous year's Report Card",
  "Passport-size photographs (4 copies)",
  "Aadhaar Card copy (student)",
  "Parent's ID proof",
  "Address proof",
  "Immunization record",
]

export function AdmissionOverview() {
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
        {/* Admission Open Banner */}
        <div
          className={cn(
            "bg-primary rounded-2xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
              <Calendar className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-foreground">
                Admissions Open for 2026-27
              </h3>
              <p className="text-primary-foreground/80">Academic session starts in April</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/20 rounded-full">
            <Clock className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Limited Seats Available</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Eligibility */}
          <div
            className={cn(
              "transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Eligibility Criteria
              </h2>
            </div>

            <p className="text-muted-foreground mb-6">
              We welcome students who meet the following age and academic criteria 
              for admission to their respective grades.
            </p>

            <div className="space-y-4">
              {eligibilityInfo.map((item, index) => (
                <div
                  key={item.grade}
                  className={cn(
                    "bg-background rounded-xl p-5 border border-border transition-all duration-500",
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  )}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.grade}</h4>
                      <p className="text-sm text-muted-foreground">{item.note}</p>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full whitespace-nowrap">
                      {item.age}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Required Documents
              </h2>
            </div>

            <p className="text-muted-foreground mb-6">
              Please ensure you have the following documents ready when applying 
              for admission.
            </p>

            <div className="bg-background rounded-xl border border-border p-6">
              <ul className="space-y-3">
                {requiredDocuments.map((doc, index) => (
                  <li
                    key={doc}
                    className={cn(
                      "flex items-start gap-3 transition-all duration-500",
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    )}
                    style={{ transitionDelay: `${(index + 5) * 50}ms` }}
                  >
                    <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-primary">{index + 1}</span>
                    </span>
                    <span className="text-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
