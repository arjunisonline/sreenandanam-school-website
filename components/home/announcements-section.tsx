"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { Bell, Calendar, ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const announcements = [
  {
    id: 1,
    title: "Admissions Open for Academic Year 2026-27",
    date: "March 15, 2026",
    category: "Admissions",
    description: "Applications are now being accepted for Class 1 to Class 7. Limited seats available. Apply early to secure your child's admission.",
    isNew: true,
  },
  {
    id: 2,
    title: "Annual Sports Day Celebration",
    date: "March 20, 2026",
    category: "Events",
    description: "Join us for our Annual Sports Day featuring various athletic events, games, and performances by our talented students.",
    isNew: true,
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting Scheduled",
    date: "March 25, 2026",
    category: "Notice",
    description: "Parents are requested to attend the PTM to discuss their ward's academic progress and upcoming activities.",
    isNew: false,
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Science Exhibition",
    date: "April 5, 2026",
    time: "10:00 AM",
  },
  {
    id: 2,
    title: "Independence Day Celebration",
    date: "August 15, 2026",
    time: "9:00 AM",
  },
  {
    id: 3,
    title: "Annual Day Function",
    date: "December 15, 2026",
    time: "4:00 PM",
  },
]

export function AnnouncementsSection() {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p
              className={cn(
                "text-primary font-medium mb-2 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              Stay Updated
            </p>
            <h2
              className={cn(
                "font-serif text-3xl md:text-4xl font-bold text-foreground transition-all duration-700 delay-100",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              News & Announcements
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className={cn(
              "transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <Link href="/news">
              View All News
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Announcements */}
          <div className="lg:col-span-2 space-y-4">
            {announcements.map((item, index) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className={cn(
                  "group block bg-card rounded-xl p-5 md:p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Bell className="w-5 h-5 text-primary" />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {item.category}
                      </span>
                      {item.isNew && (
                        <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                          New
                        </span>
                      )}
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              </Link>
            ))}
          </div>

          {/* Upcoming Events */}
          <div
            className={cn(
              "bg-card rounded-xl border border-border p-6 transition-all duration-700 delay-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Upcoming Events
              </h3>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="group flex items-start gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                >
                  {/* Date Box */}
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex flex-col items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <span className="text-lg font-bold text-primary group-hover:text-primary-foreground">
                      {event.date.split(" ")[1].replace(",", "")}
                    </span>
                    <span className="text-xs text-primary/80 group-hover:text-primary-foreground/80 uppercase">
                      {event.date.split(" ")[0].slice(0, 3)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <Clock className="w-3 h-3" />
                      {event.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild variant="ghost" className="w-full mt-4">
              <Link href="/news#events">
                View All Events
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
