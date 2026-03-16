"use client"

import { useEffect, useState, useRef } from "react"
import { Calendar, Clock, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

const events = [
  {
    id: 1,
    title: "Sports Day",
    date: "March 30, 2026",
    time: "9:00 AM",
    location: "School Playground",
    description: "Annual sports day with various athletic events and games.",
  },
  {
    id: 2,
    title: "Science Exhibition",
    date: "April 5, 2026",
    time: "10:00 AM",
    location: "School Hall",
    description: "Students showcase their science projects and innovations.",
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting",
    date: "March 25, 2026",
    time: "2:00 PM",
    location: "Classrooms",
    description: "Discuss student progress with teachers.",
  },
  {
    id: 4,
    title: "Independence Day",
    date: "August 15, 2026",
    time: "9:00 AM",
    location: "School Ground",
    description: "Flag hoisting and cultural program.",
  },
  {
    id: 5,
    title: "Annual Day",
    date: "December 15, 2026",
    time: "4:00 PM",
    location: "School Auditorium",
    description: "Cultural performances and prize distribution.",
  },
]

export function UpcomingEvents() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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
    <div ref={sectionRef} id="events" className="sticky top-24">
      <div
        className={cn(
          "bg-background rounded-xl border border-border p-6 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Calendar className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-serif text-xl font-bold text-foreground">
            Upcoming Events
          </h2>
        </div>

        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={cn(
                "group p-4 rounded-lg hover:bg-secondary/50 transition-all duration-500 cursor-pointer",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              )}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Date Badge */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex flex-col items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <span className="text-lg font-bold text-primary group-hover:text-primary-foreground">
                    {event.date.split(" ")[1].replace(",", "")}
                  </span>
                  <span className="text-xs text-primary/80 group-hover:text-primary-foreground/80 uppercase">
                    {event.date.split(" ")[0].slice(0, 3)}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-1">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-colors">
          View All Events
        </button>
      </div>

      {/* Quick Links */}
      <div
        className={cn(
          "bg-background rounded-xl border border-border p-6 mt-6 transition-all duration-700 delay-200",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <a href="/admissions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Admission Information
            </a>
          </li>
          <li>
            <a href="/academics" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Academic Calendar
            </a>
          </li>
          <li>
            <a href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Photo Gallery
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
