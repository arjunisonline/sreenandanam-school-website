"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { 
  Monitor, 
  BookOpen, 
  TreePine, 
  School, 
  Droplets, 
  Zap,
  Building,
  Users
} from "lucide-react"
import { cn } from "@/lib/utils"

const facilities = [
  {
    id: "computer-lab",
    icon: Monitor,
    title: "Computer Lab",
    description: "A dedicated computer-aided learning lab equipped with 5 functional computer systems. Students learn basic computer skills, digital literacy, and explore educational software.",
    features: ["5 functional computers", "Computer-aided learning", "Digital literacy programs", "Educational software"],
    highlight: true,
    image: "/images/computer-lab.jpg",
  },
  {
    id: "library",
    icon: BookOpen,
    title: "Library",
    description: "Our library provides students with access to books and reading materials that encourage curiosity, enhance knowledge, and develop a lifelong love for reading.",
    features: ["Diverse reading materials", "Reference books", "Story books", "Quiet reading space"],
    highlight: true,
    image: "/images/library.jpg",
  },
  {
    id: "playground",
    icon: TreePine,
    title: "Playground",
    description: "A spacious outdoor playground where students engage in physical activities, sports, and games essential for healthy physical and social development.",
    features: ["Outdoor games area", "Physical activities", "Sports equipment", "Safe play environment"],
    highlight: true,
    image: "/images/playground.jpg",
  },
  {
    id: "classrooms",
    icon: School,
    title: "Classrooms",
    description: "6 well-equipped classrooms designed to provide a comfortable and conducive learning environment with proper ventilation and lighting.",
    features: ["6 spacious classrooms", "Proper ventilation", "Good lighting", "Learning aids"],
    highlight: false,
  },
  {
    id: "activity-rooms",
    icon: Users,
    title: "Activity Rooms",
    description: "2 dedicated activity rooms for extra-curricular activities, art and craft sessions, and other creative learning experiences.",
    features: ["2 activity rooms", "Art supplies", "Creative space", "Group activities"],
    highlight: false,
  },
  {
    id: "drinking-water",
    icon: Droplets,
    title: "Drinking Water",
    description: "Functional tap water facility ensuring safe and clean drinking water is available for all students throughout the day.",
    features: ["Clean tap water", "Multiple access points", "Hygienic facilities", "Regular maintenance"],
    highlight: false,
  },
  {
    id: "sanitation",
    icon: Building,
    title: "Sanitation",
    description: "Separate toilet facilities for boys and girls, maintaining hygiene standards for student comfort and well-being.",
    features: ["2 toilets for boys", "2 toilets for girls", "Regular cleaning", "Hygiene maintained"],
    highlight: false,
  },
  {
    id: "electricity",
    icon: Zap,
    title: "Electricity",
    description: "Reliable electricity supply ensuring uninterrupted learning activities, especially for computer lab operations and classroom equipment.",
    features: ["Consistent power supply", "Well-lit classrooms", "Fan facilities", "Safety measures"],
    highlight: false,
  },
]

export function FacilitiesGrid() {
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
        {/* Featured Facilities */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {facilities.filter(f => f.highlight).map((facility, index) => (
            <div
              key={facility.id}
              id={facility.id}
              className={cn(
                "group relative bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Section */}
              {facility.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <facility.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              )}
              {/* Content Section */}
              <div className="p-6 pb-0">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {facility.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {facility.description}
                </p>
              </div>

              {/* Features */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {facility.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Facilities */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facilities.filter(f => !f.highlight).map((facility, index) => (
            <div
              key={facility.id}
              id={facility.id}
              className={cn(
                "group bg-background rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-500",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                <facility.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {facility.title}
              </h4>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
