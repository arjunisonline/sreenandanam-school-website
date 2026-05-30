import Script from 'next/script'

export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Sree Nandanam Public School",
    "url": "https://sreenandanamschools.com",
    "logo": "https://sreenandanamschools.com/images/logo.png",
    "description": "SREE NANDANAM PUBLIC SCHOOL offers quality primary and upper primary education in Parassala, Thiruvananthapuram, Kerala. Established in 2008, we provide English medium education.",
    "foundingDate": "2008",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Parassala",
      "addressLocality": "Thiruvananthapuram",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "sameAs": [
      // Add social media URLs here if available
    ]
  }

  return (
    <Script id="schema-org" type="application/ld+json" strategy="beforeInteractive">
      {JSON.stringify(schema)}
    </Script>
  )
}
