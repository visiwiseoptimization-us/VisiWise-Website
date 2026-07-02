# VisiWise Optimization — SEO Head Code
### Developer Handoff · Drop-in for Figma Exports

> **Instructions:** When exporting any page from Figma to code, paste the corresponding block below inside the `<head>` tag — after `<meta name="viewport"...>` and before `</head>`. Do not change any design files. These tags are invisible to visitors and have zero impact on layout or visual design.

> **Before going live:** Replace `https://visiwiseoptimization.com` with your real domain. Add an `og:image` URL pointing to a 1200×630px preview image (your logo or a branded graphic) for social sharing cards.

---

## PAGE 1 — Home (`index.html`)

```html
<!-- SEO: Home -->
<meta name="description" content="VisiWise Optimization is an Arizona-based digital operations agency helping service businesses grow with full-stack digital marketing, reporting, and software solutions. Start for $299.">
<meta name="keywords" content="digital marketing agency Arizona, SEO services Phoenix, digital operations, small business marketing, social media management, project management software, VisiWise Optimization">
<meta name="author" content="VisiWise Optimization">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://visiwiseoptimization.com/">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="VisiWise Optimization — Digital Operations, Built for Business">
<meta property="og:description" content="One team handling your website, marketing, reporting, and software — so you can focus on running your business. Arizona-based, serving clients nationally.">
<meta property="og:url" content="https://visiwiseoptimization.com/">
<meta property="og:site_name" content="VisiWise Optimization">
<meta property="og:image" content="https://visiwiseoptimization.com/og-image.jpg">
<meta property="og:locale" content="en_US">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="VisiWise Optimization — Digital Operations, Built for Business">
<meta name="twitter:description" content="One team handling your website, marketing, reporting, and software — so you can focus on running your business.">
<meta name="twitter:image" content="https://visiwiseoptimization.com/og-image.jpg">
<meta name="twitter:site" content="@visiwiseoptimization">

<!-- LocalBusiness Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VisiWise Optimization",
  "description": "Digital operations agency providing full-stack digital marketing, analysis and reporting, and software solutions for service businesses.",
  "url": "https://visiwiseoptimization.com",
  "email": "hello@visiwiseoptimization.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Phoenix",
    "addressRegion": "AZ",
    "addressCountry": "US"
  },
  "areaServed": "United States",
  "serviceType": ["Digital Marketing", "SEO", "Social Media Management", "Project Management Software", "Analytics & Reporting"],
  "priceRange": "$$",
  "sameAs": [
    "https://www.linkedin.com/company/visiwise",
    "https://www.instagram.com/visiwiseoptimization"
  ]
}
</script>
```

---

## PAGE 2 — Explore Services (`explore-services.html`)

```html
<!-- SEO: Explore Services -->
<meta name="description" content="Explore VisiWise Optimization's service lines: full-stack digital marketing, monthly analysis & reporting, and software solutions for service businesses. Plans from $150/mo after a $299 starter build.">
<meta name="keywords" content="digital marketing services, social media management, SEO services, business analytics reporting, project management software, Arizona digital agency, VisiWise services">
<meta name="author" content="VisiWise Optimization">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://visiwiseoptimization.com/explore-services">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="Explore Services — VisiWise Optimization">
<meta property="og:description" content="Full-stack digital marketing, analysis & reporting, and software solutions for service businesses. Start for $299, then flat monthly management.">
<meta property="og:url" content="https://visiwiseoptimization.com/explore-services">
<meta property="og:site_name" content="VisiWise Optimization">
<meta property="og:image" content="https://visiwiseoptimization.com/og-image.jpg">
<meta property="og:locale" content="en_US">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Explore Services — VisiWise Optimization">
<meta name="twitter:description" content="Full-stack digital marketing, analysis & reporting, and software solutions for service businesses.">
<meta name="twitter:image" content="https://visiwiseoptimization.com/og-image.jpg">
<meta name="twitter:site" content="@visiwiseoptimization">

<!-- Service Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": {
    "@type": "LocalBusiness",
    "name": "VisiWise Optimization",
    "url": "https://visiwiseoptimization.com"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "VisiWise Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Full Digital Marketing",
          "description": "Social media management, email marketing, Google Business Profile, and monthly reporting."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "150",
          "priceCurrency": "USD",
          "unitText": "per month"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Analysis & Reporting",
          "description": "Monthly performance reporting across website, SEO, social, and lead growth."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Software Solutions",
          "description": "Project management software setup, LinkedIn automation, and workflow automation."
        }
      }
    ]
  }
}
</script>
```

---

## PAGE 3 — About (`about.html`)

```html
<!-- SEO: About -->
<meta name="description" content="VisiWise Optimization is a Phoenix, Arizona digital operations agency built for service businesses. One team covering digital marketing, reporting, and software — founder-led, results-focused.">
<meta name="keywords" content="about VisiWise Optimization, Phoenix digital agency, Arizona marketing agency, digital operations team, service business marketing, founder-led agency">
<meta name="author" content="VisiWise Optimization">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://visiwiseoptimization.com/about">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="About VisiWise Optimization — Arizona Digital Operations Agency">
<meta property="og:description" content="We're not an agency. We're your digital operations team. One point of contact, every capability, built for service businesses.">
<meta property="og:url" content="https://visiwiseoptimization.com/about">
<meta property="og:site_name" content="VisiWise Optimization">
<meta property="og:image" content="https://visiwiseoptimization.com/og-image.jpg">
<meta property="og:locale" content="en_US">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="About VisiWise Optimization — Arizona Digital Operations Agency">
<meta name="twitter:description" content="We're not an agency. We're your digital operations team. One point of contact, every capability.">
<meta name="twitter:image" content="https://visiwiseoptimization.com/og-image.jpg">
<meta name="twitter:site" content="@visiwiseoptimization">

<!-- Organization Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VisiWise Optimization",
  "url": "https://visiwiseoptimization.com",
  "email": "hello@visiwiseoptimization.com",
  "description": "Digital operations agency providing full-stack digital marketing, analysis and reporting, and software solutions for service businesses.",
  "foundingDate": "2025",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Phoenix",
    "addressRegion": "AZ",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.linkedin.com/company/visiwise",
    "https://www.instagram.com/visiwiseoptimization"
  ]
}
</script>
```

---

## PAGE 4 — Journal (`journal.html`)

```html
<!-- SEO: Journal -->
<meta name="description" content="The VisiWise Journal publishes practical guides, industry data, and digital marketing strategy for service business owners. No fluff — just what actually works.">
<meta name="keywords" content="digital marketing tips, SEO for service businesses, social media strategy, small business marketing guide, LinkedIn automation, VisiWise journal, business growth insights">
<meta name="author" content="VisiWise Optimization">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://visiwiseoptimization.com/journal">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="VisiWise Journal — Digital Marketing Insights for Service Businesses">
<meta property="og:description" content="Practical guides, industry data, and strategic thinking for service business owners who want to grow smarter.">
<meta property="og:url" content="https://visiwiseoptimization.com/journal">
<meta property="og:site_name" content="VisiWise Optimization">
<meta property="og:image" content="https://visiwiseoptimization.com/og-image.jpg">
<meta property="og:locale" content="en_US">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="VisiWise Journal — Digital Marketing Insights for Service Businesses">
<meta name="twitter:description" content="Practical guides, industry data, and strategic thinking for service business owners who want to grow smarter.">
<meta name="twitter:image" content="https://visiwiseoptimization.com/og-image.jpg">
<meta name="twitter:site" content="@visiwiseoptimization">

<!-- Blog Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "VisiWise Journal",
  "url": "https://visiwiseoptimization.com/journal",
  "description": "Practical guides, industry data, and digital marketing strategy for service business owners.",
  "publisher": {
    "@type": "Organization",
    "name": "VisiWise Optimization",
    "url": "https://visiwiseoptimization.com"
  }
}
</script>
```

---

## PAGE 5 — Contact (`contact.html`)

```html
<!-- SEO: Contact -->
<meta name="description" content="Book a free 30-minute digital audit with VisiWise Optimization. We'll review your website, SEO, and social presence and tell you exactly what to fix first. Phoenix, AZ — serving clients nationally.">
<meta name="keywords" content="contact VisiWise, book digital audit, free SEO audit, digital marketing consultation, Phoenix Arizona digital agency, hire digital marketing agency">
<meta name="author" content="VisiWise Optimization">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://visiwiseoptimization.com/contact">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="Contact VisiWise Optimization — Book a Free Digital Audit">
<meta property="og:description" content="Book a free 30-minute audit. We'll review your digital presence and tell you exactly what to fix first — no pressure, no pitch.">
<meta property="og:url" content="https://visiwiseoptimization.com/contact">
<meta property="og:site_name" content="VisiWise Optimization">
<meta property="og:image" content="https://visiwiseoptimization.com/og-image.jpg">
<meta property="og:locale" content="en_US">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Contact VisiWise Optimization — Book a Free Digital Audit">
<meta name="twitter:description" content="Book a free 30-minute audit. We'll review your digital presence and tell you exactly what to fix first.">
<meta name="twitter:image" content="https://visiwiseoptimization.com/og-image.jpg">
<meta name="twitter:site" content="@visiwiseoptimization">

<!-- LocalBusiness + ContactPoint Structured Data -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VisiWise Optimization",
  "url": "https://visiwiseoptimization.com",
  "email": "hello@visiwiseoptimization.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Phoenix",
    "addressRegion": "AZ",
    "addressCountry": "US"
  },
  "areaServed": "United States",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "hello@visiwiseoptimization.com",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.linkedin.com/company/visiwise",
    "https://www.instagram.com/visiwiseoptimization"
  ]
}
</script>
```

---

## CHECKLIST BEFORE GOING LIVE

- [ ] Replace all `https://visiwiseoptimization.com` with your actual live domain
- [ ] Create a 1200×630px branded preview image and upload it, then update all `og:image` URLs
- [ ] Verify Twitter handle `@visiwiseoptimization` is correct
- [ ] Update LinkedIn and Instagram URLs to your real profile links
- [ ] Submit sitemap to Google Search Console after launch
- [ ] Set up Google Search Console to monitor impressions and clicks per page
