import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { StatsSection } from "@/components/home/stats-section"
import { HighlightsSection } from "@/components/home/highlights-section"
import { AnnouncementsSection } from "@/components/home/announcements-section"
import { GalleryPreview } from "@/components/home/gallery-preview"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <HighlightsSection />
        <AnnouncementsSection />
        <GalleryPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
