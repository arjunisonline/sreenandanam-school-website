import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { HistorySection } from "@/components/about/history-section"
import { VisionMission } from "@/components/about/vision-mission"
import { HeadTeacherMessage } from "@/components/about/head-teacher-message"
import { ValuesSection } from "@/components/about/values-section"

export const metadata: Metadata = {
  title: "About Us | SREE NANDANAM PUBLIC SCHOOL",
  description: "Learn about SREE NANDANAM PUBLIC SCHOOL's history, vision, mission, and values. Established in 2003, we provide quality education in Parassala, Kerala.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <AboutHero />
        <HistorySection />
        <VisionMission />
        <HeadTeacherMessage />
        <ValuesSection />
      </main>
      <Footer />
    </>
  )
}
