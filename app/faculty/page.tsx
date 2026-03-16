import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/shared/page-hero"
import { FacultyGrid } from "@/components/faculty/faculty-grid"
import { FacultyStats } from "@/components/faculty/faculty-stats"

export const metadata: Metadata = {
  title: "Faculty | SREE NANDANAM PUBLIC SCHOOL",
  description: "Meet our dedicated team of 11 qualified teachers committed to providing quality education and nurturing every student's potential.",
}

export default function FacultyPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          breadcrumb="Home / Faculty"
          title="Our Faculty"
          description="Meet our team of 11 dedicated educators who are passionate about nurturing young minds and guiding students towards academic excellence."
        />
        <FacultyStats />
        <FacultyGrid />
      </main>
      <Footer />
    </>
  )
}
