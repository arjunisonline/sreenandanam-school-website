"use client"

import { useEffect, useState, useRef } from "react"
import { ClipboardList, FileSearch, UserCheck, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Collect Application Form",
    description: "Visit the school office during working hours to collect the admission application form. A nominal fee is applicable for the form.",
    details: [
      "Available at school office",
      "Monday to Saturday, 9 AM - 3 PM",
      "Bring parent's ID proof",
    ],
  },
  {
    icon: FileSearch,
    step: "02",
    title: "Submit Documents",
    description: "Complete the application form and submit it along with all required documents to the school office for verification.",
    details: [
      "Fill form completely",
      "Attach all documents",
      "Submit at school office",
    ],
  },
  {
    icon: UserCheck,
    step: "03",
    title: "Interaction Session",
    description: "Parents and students will be invited for an informal interaction session with the school administration to understand expectations.",
    details: [
      "Meet with Head Teacher",
      "School orientation",
      "Address queries",
    ],
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Admission Confirmation",
    description: "Upon successful review, admission will be confirmed. Complete the fee payment and collect the admission acknowledgment.",
    details: [
      "Confirmation notification",
      "Fee payment",
      "Receive admission kit",
    ],
  },
]

export function AdmissionProcess() {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className={cn(
              "text-primary font-medium mb-2 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Step by Step
          </p>
          <h2
            className={cn(
              "font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Admission Process
          </h2>
          <p
            className={cn(
              "text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            Follow these simple steps to secure your child's admission at 
            Sree Nandanam Public School.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={cn(
                  "relative md:flex md:items-center transition-all duration-700",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                {/* Content */}
                <div className={cn(
                  "md:w-1/2 p-4",
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                )}>
                  <div className={cn(
                    "bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all",
                    index % 2 === 0 ? "md:ml-auto" : ""
                  )} style={{ maxWidth: "400px" }}>
                    <div className={cn(
                      "flex items-center gap-3 mb-4",
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    )}>
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                        <step.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-primary">Step {step.step}</span>
                        <h3 className="font-semibold text-foreground">{step.title}</h3>
                      </div>
                    </div>
                    <p className={cn(
                      "text-muted-foreground text-sm mb-4",
                      index % 2 === 0 ? "md:text-right" : ""
                    )}>
                      {step.description}
                    </p>
                    <ul className={cn(
                      "space-y-1",
                      index % 2 === 0 ? "md:text-right" : ""
                    )}>
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className={cn(
                            "text-xs text-muted-foreground flex items-center gap-2",
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                          )}
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full -translate-x-1/2 hidden md:block z-10 ring-4 ring-background" />

                {/* Spacer for other side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
