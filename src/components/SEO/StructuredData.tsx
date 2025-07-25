import { Helmet } from "react-helmet-async";

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OSTS - One Stop Tech Solutions",
    alternateName: "OSTS",
    description:
      "Innovative startup specializing in ultrasonic sensor technology for smart water level monitoring and IoT water management solutions.",
    url: "https://osts.vercel.app",
    logo: "https://osts.vercel.app/osts-logo.png",
    foundingDate: "2023",
    industry: "Technology, IoT, Sensors",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8583808823",
      contactType: "customer service",
      email: "onestoptechsolutions2023@gmail.com",
      availableLanguage: ["English", "Hindi", "Bengali"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "268/73 New Narkelbagan",
      addressLocality: "Chinsurah, Hooghly",
      addressRegion: "West Bengal",
      postalCode: "712103",
      addressCountry: "IN",
    },
    areaServed: "India",
    sameAs: ["https://linkedin.com/company/osts"],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Ultrasonic Water Level Sensor",
    description:
      "High-precision ultrasonic sensors for accurate water level measurement with ±1mm accuracy, IP67 waterproof rating, and 4-20mA output",
    brand: {
      "@type": "Brand",
      name: "OSTS",
    },
    manufacturer: {
      "@type": "Organization",
      name: "OSTS - One Stop Tech Solutions",
    },
    category: "Industrial Sensors",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Water Level Monitoring Solutions",
    description:
      "Complete water tank monitoring solutions including ultrasonic sensors, IoT connectivity, and analytics dashboard",
    provider: {
      "@type": "Organization",
      name: "OSTS - One Stop Tech Solutions",
    },
    areaServed: "India",
    serviceType: "IoT Solutions, Sensor Technology, Water Management",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "OSTS - One Stop Tech Solutions",
    url: "https://osts.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://osts.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
