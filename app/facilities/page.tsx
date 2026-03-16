import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/shared/page-hero"
import { FacilitiesGrid } from "@/components/facilities/facilities-grid"
import { InfrastructureDetails } from "@/components/facilities/infrastructure-details"

export const metadata: Metadata = {
  title: "Facilities | SREE NANDANAM PUBLIC SCHOOL",
  description: "Explore our modern facilities including computer lab, library, playground, and well-equipped classrooms designed for effective learning.",
}

export default function FacilitiesPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          breadcrumb="Home / Facilities"
          title="Our Facilities"
          description="Modern infrastructure and learning resources designed to provide students with a comfortable and effective educational environment."
        />
        <FacilitiesGrid />
        <InfrastructureDetails />
      </main>
      <Footer />
    </>
  )
}
