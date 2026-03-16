"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/shared/page-hero"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactForm } from "@/components/contact/contact-form"
import { LocationMap } from "@/components/contact/location-map"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <PageHero
          title="Contact Us"
          subtitle="We'd love to hear from you. Get in touch with us for admissions, inquiries, or feedback."
          backgroundPattern="contact"
        />
        <ContactInfo />
        <ContactForm />
        <LocationMap />
      </main>
      <Footer />
    </div>
  )
}
