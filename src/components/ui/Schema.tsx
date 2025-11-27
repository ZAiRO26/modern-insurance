import Script from 'next/script'

export function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    "name": "Morris & Garritano",
    "alternateName": "Catalyst Mergers",
    "url": "https://modern-insurance-demo.vercel.app",
    "logo": "https://modern-insurance-demo.vercel.app/logo.svg",
    "foundingDate": "1885",
    "description": "Trusted advisory since 1885. Property & Casualty, Employee Benefits, and Personal Insurance tailored to your needs.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Connaught Place",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-11-2345-6789",
      "contactType": "customer service",
      "email": "info@catalystmergers.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/morris-garritano",
      "https://twitter.com/morrisgarritano"
    ]
  }

  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
