"use client"

import { useEffect, useState, useRef } from "react"
import { Bell, Calendar, ArrowRight, Tag } from "lucide-react"
import { cn } from "@/lib/utils"

const newsItems = [
  {
    id: 1,
    title: "Admissions Open for Academic Year 2026-27",
    date: "March 15, 2026",
    category: "Admissions",
    excerpt: "We are pleased to announce that admissions are now open for the academic year 2026-27. Applications are being accepted for Class 1 to Class 7. Parents are requested to visit the school office during working hours to collect the admission form.",
    isNew: true,
    isPinned: true,
  },
  {
    id: 2,
    title: "Annual Sports Day Celebration Announced",
    date: "March 20, 2026",
    category: "Events",
    excerpt: "Mark your calendars! Our Annual Sports Day will be held on March 30, 2026. Students have been practicing various athletic events and games. Parents are cordially invited to attend and cheer for their children.",
    isNew: true,
    isPinned: false,
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting Schedule",
    date: "March 18, 2026",
    category: "Notice",
    excerpt: "A Parent-Teacher Meeting has been scheduled for March 25, 2026. Parents are requested to attend the meeting to discuss their ward's academic progress and any concerns they may have.",
    isNew: true,
    isPinned: false,
  },
  {
    id: 4,
    title: "Science Exhibition Coming Soon",
    date: "March 10, 2026",
    category: "Events",
    excerpt: "Students are preparing exciting projects for our upcoming Science Exhibition on April 5, 2026. This is a great opportunity for students to showcase their scientific curiosity and creativity.",
    isNew: false,
    isPinned: false,
  },
  {
    id: 5,
    title: "Summer Vacation Announcement",
    date: "March 5, 2026",
    category: "Notice",
    excerpt: "The school will observe summer vacation from April 15 to May 31, 2026. Classes will resume on June 1, 2026. Students are encouraged to utilize this time for reading and recreational activities.",
    isNew: false,
    isPinned: false,
  },
  {
    id: 6,
    title: "New Books Added to Library",
    date: "February 28, 2026",
    category: "Announcement",
    excerpt: "We are happy to announce that new books have been added to our school library. Students are encouraged to visit the library during designated hours and explore the new collection.",
    isNew: false,
    isPinned: false,
  },
  {
    id: 7,
    title: "Computer Lab Upgrades Complete",
    date: "February 20, 2026",
    category: "Announcement",
    excerpt: "Our computer lab has been upgraded with new software and learning resources. Students will now have access to enhanced computer-aided learning programs.",
    isNew: false,
    isPinned: false,
  },
]

export function NewsList() {
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
    <div ref={sectionRef}>
      <h2
        className={cn(
          "font-serif text-2xl font-bold text-foreground mb-6 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        Latest Updates
      </h2>

      <div className="space-y-4">
        {newsItems.map((news, index) => (
          <article
            key={news.id}
            className={cn(
              "group bg-background rounded-xl border border-border p-5 md:p-6 hover:border-primary/30 hover:shadow-md transition-all duration-500 cursor-pointer",
              news.isPinned && "ring-2 ring-primary/20",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={cn(
                  "px-2 py-1 rounded text-xs font-medium",
                  news.category === "Admissions" && "bg-primary/10 text-primary",
                  news.category === "Events" && "bg-accent/10 text-accent",
                  news.category === "Notice" && "bg-destructive/10 text-destructive",
                  news.category === "Announcement" && "bg-secondary text-secondary-foreground",
                )}>
                  {news.category}
                </span>
                {news.isNew && (
                  <span className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs font-medium">
                    New
                  </span>
                )}
                {news.isPinned && (
                  <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium">
                    Pinned
                  </span>
                )}
              </div>
              <span className="text-xs text-muted-foreground flex items-center gap-1 shrink-0">
                <Calendar className="w-3 h-3" />
                {news.date}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
              {news.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {news.excerpt}
            </p>

            {/* Read More */}
            <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              Read more
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </article>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-8 text-center">
        <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors">
          Load More News
        </button>
      </div>
    </div>
  )
}
