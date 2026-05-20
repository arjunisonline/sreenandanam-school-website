"use client"

import { useEffect, useState, useRef } from "react"
import { Bell, Calendar, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface NewsItem {
  id: string
  title: string
  category: string
  excerpt: string
  is_new: boolean
  is_pinned: boolean
  published_at: string
}

const categoryColors: Record<string, string> = {
  Admissions:   "bg-primary/10 text-primary",
  Events:       "bg-accent/10 text-accent",
  Notice:       "bg-destructive/10 text-destructive",
  Announcement: "bg-secondary text-secondary-foreground",
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    year: "numeric", month: "long", day: "numeric"
  })
}

export function NewsList() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch("/api/news")
        const json = await res.json()
        if (json.success) setNewsItems(json.data)
      } catch (err) {
        console.error("Failed to fetch news:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchNews()
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

      {/* Loading Skeletons */}
      {loading && (
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-background rounded-xl border border-border p-5 animate-pulse">
              <div className="flex gap-2 mb-3">
                <div className="h-5 w-20 bg-muted rounded" />
                <div className="h-5 w-12 bg-muted rounded" />
              </div>
              <div className="h-5 w-3/4 bg-muted rounded mb-2" />
              <div className="h-4 w-full bg-muted rounded" />
              <div className="h-4 w-5/6 bg-muted rounded mt-1" />
            </div>
          ))}
        </div>
      )}

      {/* News Cards */}
      {!loading && newsItems.length > 0 && (
        <div className="space-y-4">
          {newsItems.map((news, index) => (
            <article
              key={news.id}
              className={cn(
                "group bg-background rounded-xl border border-border p-5 md:p-6 hover:border-primary/30 hover:shadow-md transition-all duration-500 cursor-pointer",
                news.is_pinned && "ring-2 ring-primary/20",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={cn(
                    "px-2 py-1 rounded text-xs font-medium",
                    categoryColors[news.category] ?? "bg-secondary text-secondary-foreground"
                  )}>
                    {news.category}
                  </span>
                  {news.is_new && (
                    <span className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs font-medium">
                      New
                    </span>
                  )}
                  {news.is_pinned && (
                    <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium">
                      Pinned
                    </span>
                  )}
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1 shrink-0">
                  <Calendar className="w-3 h-3" />
                  {formatDate(news.published_at)}
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
      )}

      {/* Empty State */}
      {!loading && newsItems.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <Bell className="w-10 h-10 mx-auto mb-3 opacity-30" />
          <p className="text-sm">No announcements at this time.</p>
        </div>
      )}

      {/* Load More */}
      {!loading && newsItems.length > 0 && (
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors">
            Load More News
          </button>
        </div>
      )}
    </div>
  )
}
