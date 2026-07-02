export interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  datePublished: string;
  teaser: string;
  tldr: string;
  featured?: boolean;
  sections: { heading: string; body: string }[];
  keyTakeaways: string[];
  faqs: { q: string; a: string }[];
  metaDescription: string;
  relatedSlugs: string[];
}

export const ARTICLES: Article[] = [
  {
    id: "01",
    slug: "small-business-online-visibility",
    title: "Why 55% of Small Businesses Struggle to Get Clients Online — And What Actually Works",
    category: "Strategy",
    readTime: "7 min",
    date: "June 2025",
    datePublished: "2025-06-01",
    featured: true,
    teaser: "Most small businesses rely on referrals. That's not a strategy — it's a hope. Here's what the data says about digital visibility for service businesses, and a practical framework to fix it in 90 days.",
    tldr: "Most small businesses struggle online because they rely on referrals, post inconsistently, and have websites that don't convert visitors into leads. The fix is a consistent digital system — not more effort on individual tactics.",
    metaDescription: "55% of small businesses say getting clients online is their #1 challenge. Here's why it happens and the exact framework to fix it in 90 days.",
    relatedSlugs: ["digital-tools-service-business", "local-seo-service-businesses"],
    sections: [
      {
        heading: "Why Referrals Alone Can't Sustain a Growing Service Business",
        body: "Referrals feel safe — they come pre-qualified and close faster. But they're not scalable, and they leave you at the mercy of whether your current clients happen to know someone who needs you right now. According to BrightLocal, 81% of consumers use Google to evaluate local businesses before making contact. If you're not visible online, you're invisible to the majority of your potential market — regardless of how good the work you do actually is.\n\nThe businesses that grow predictably build two channels in parallel: referrals for short-term volume, and digital presence for long-term compounding. One is a tap. The other is a reservoir.",
      },
      {
        heading: "The 3 Real Reasons Your Business Isn't Getting Found Online",
        body: "After working with dozens of service businesses, three problems appear consistently. First, the website is technically live but not optimized — it loads slowly, doesn't state clearly who you serve and what you do, and has no obvious next step for a visitor. Second, your Google Business Profile is incomplete or unverified, meaning you're invisible on Maps searches where 46% of all Google searches have local intent. Third, your social media presence is inconsistent — a burst of posts, then silence for weeks — which trains the algorithm to stop showing your content.\n\nNone of these are hard to fix individually. The challenge is fixing them as a system, consistently, over 60–90 days.",
      },
      {
        heading: "What 'Online Visibility' Actually Means for a Service Business",
        body: "Visibility isn't follower count. It's showing up at the right moment when someone searches for what you do. That happens across three surfaces: Google Search (organic rankings for service + location keywords), Google Maps (your Business Profile and map pack position), and social media (where potential clients validate that you're active and real after they find you elsewhere).\n\nEach surface requires a different strategy, but they compound — a strong Google Business Profile boosts your map ranking, a fast website boosts your organic ranking, and consistent social media reassures visitors who land anywhere in your ecosystem.",
      },
      {
        heading: "The 90-Day Framework to Fix Your Digital Presence",
        body: "Month 1 — Foundation: Fix your website (speed, clear headline, one obvious CTA), claim and complete your Google Business Profile, and set up social profiles consistently across platforms. This alone can move your map pack ranking significantly within 4 weeks.\n\nMonth 2 — Activation: Start posting consistently (3x/week on your primary platform), send your first email newsletter to your existing client list, and begin actively requesting Google reviews from past clients. Reviews are the single fastest lever in local SEO — businesses with 50+ reviews outrank those with fewer than 10 in 79% of local searches (BrightLocal, 2024).\n\nMonth 3 — Optimization: Review your analytics, identify which traffic sources are converting, double down on what's working. At this point, the foundation is compounding — you show up more, visitors see a credible presence, and conversion starts to feel easier.",
      },
      {
        heading: "How to Measure Whether It's Working",
        body: "Track three things weekly: Google Business Profile views (available in your GBP dashboard), website traffic sources (Google Analytics), and inbound inquiry volume. Don't optimize for vanity metrics like follower count or post likes — optimize for profile views → website clicks → contact form submissions.\n\nIf you do this consistently for 90 days and aren't seeing measurable improvement in at least one of these metrics, something in the foundation needs diagnosis — usually either the website CTA or the GBP category and keyword selection.",
      },
    ],
    keyTakeaways: [
      "55% of small businesses identify getting clients online as their #1 challenge",
      "Referrals alone won't scale — digital presence is the compounding channel",
      "The three biggest gaps are website conversion, GBP completion, and social consistency",
      "The 90-day framework: Foundation → Activation → Optimization",
      "Measure profile views, website traffic, and inbound inquiries — not follower count",
    ],
    faqs: [
      { q: "Why do small businesses struggle with digital marketing?", a: "Most small businesses struggle with digital marketing because they treat it as a side task rather than a system. Inconsistent posting, no clear strategy, and websites that aren't optimized for conversion all compound over time to reduce online visibility." },
      { q: "How long does it take to see results from digital marketing?", a: "Social media results typically appear within 30–60 days. SEO improvements take 60–90 days to move meaningfully in rankings. LinkedIn outreach can generate booked calls within 2–3 weeks." },
      { q: "What is the most effective online marketing strategy for service businesses?", a: "For service businesses, the most effective strategy combines Google Business Profile optimization, consistent social media presence, and a website that clearly communicates the problem you solve and makes it easy to contact you." },
      { q: "How much should a small business spend on digital marketing?", a: "A reasonable starting budget for a service business is $150–$500/month for managed marketing. The $299 starter build covers the foundation; then a monthly management plan handles ongoing execution." },
      { q: "What does a digital operations agency do?", a: "A digital operations agency manages your entire digital presence — website, SEO, social media, email marketing, and reporting — as an integrated system, rather than selling you isolated services from different vendors." },
    ],
  },
  {
    id: "02",
    slug: "digital-tools-service-business",
    title: "The 6 Digital Tools Every Service Business Actually Needs",
    category: "Tools",
    readTime: "5 min",
    date: "May 2025",
    datePublished: "2025-05-15",
    teaser: "Not 60 tools. Not a $2,000/month stack. Here are the six that actually matter — and what each one does for your bottom line.",
    tldr: "Service businesses need six core tools: a website platform, a scheduling/booking tool, a project management system, a social media scheduler, an email marketing tool, and a reporting dashboard. Everything else is optional.",
    metaDescription: "Not 60 tools. Not a $2,000/month tech stack. Here are the 6 digital tools every service business actually needs — and what each one does for your bottom line.",
    relatedSlugs: ["small-business-online-visibility", "cost-of-diy-digital-marketing"],
    sections: [
      { heading: "Why Most Businesses Are Over-Tooled and Under-Organized", body: "The average small business uses 12 separate software tools — but most owners can't name what each one does or whether it's actually helping. Tool sprawl costs money (subscriptions add up fast) and costs time (switching between platforms kills focus). The answer isn't more tools — it's the right six, properly configured to talk to each other." },
      { heading: "Tool 1: Your Website Platform (and What 'Good' Actually Looks Like)", body: "Your website is your 24/7 salesperson. It needs to load in under 2.5 seconds, clearly state who you serve and what you do above the fold, and have one obvious call to action. WordPress, Webflow, and Squarespace are all viable — the platform matters less than the execution. A fast, clear, mobile-optimized website on any platform beats a bloated custom site." },
      { heading: "Tool 2: A Booking or Scheduling System", body: "Calendly, Acuity, or a built-in booking widget eliminates the back-and-forth of scheduling. For service businesses, every friction point between 'I'm interested' and 'I have a call booked' costs you clients. Booking links embedded in your website, email signature, and social bio can increase conversion by 25–40% compared to phone/email scheduling alone." },
      { heading: "Tool 3: Project Management Software", body: "ClickUp, Notion, or Asana — configured for your actual workflows, not a generic template. The best PM tool is the one your team will actually use. ClickUp offers the most flexibility at the lowest price point. Notion works well for documentation-heavy teams. Asana is best for task-and-deadline focused service workflows." },
      { heading: "Tool 4: Social Media Scheduler", body: "Metricool or Buffer lets you plan and schedule content across LinkedIn, Instagram, Facebook, and Google Business Profile from one dashboard. Batch-creating two weeks of content in a single session and scheduling it in advance is how you stay consistent without spending 30 minutes every day on social media." },
      { heading: "Tool 5: Email Marketing", body: "Mailchimp or Kit (formerly ConvertKit) for your monthly newsletter and automated sequences. Your email list is the only audience you own — social platforms can change their algorithms or disappear, but your email list is yours. Even a simple monthly update to past clients keeps you top of mind for referrals and repeat business." },
      { heading: "Tool 6: A Reporting Dashboard That Connects Everything", body: "Google Looker Studio (free) can pull data from Google Analytics, Google Business Profile, and social platforms into one monthly view. This is how you know what's actually working — not based on gut feel, but on the metrics that track directly to inquiries and revenue." },
    ],
    keyTakeaways: [
      "Six tools cover every core digital need for a service business",
      "Tool sprawl costs money and focus — audit your stack annually",
      "A booking link eliminates friction and can increase conversions by 25–40%",
      "Batch-schedule social content to maintain consistency without daily effort",
      "Your email list is the only audience you actually own",
    ],
    faqs: [
      { q: "What software do service businesses need?", a: "Service businesses need six core tools: a website platform, a booking or scheduling system, project management software, a social media scheduler, an email marketing tool, and a reporting dashboard." },
      { q: "What is the best project management tool for a small business?", a: "ClickUp, Notion, and Asana are the three most widely used project management tools for small businesses. ClickUp offers the most features at the lowest price point; Notion works best for teams that also need documentation; Asana is best for task-heavy service workflows." },
      { q: "How do I manage social media for my business without spending hours on it?", a: "Use a scheduler like Metricool or Buffer to batch-create and schedule two weeks of content in one session. Planning in advance is the most effective way to maintain consistency without daily time investment." },
      { q: "What does a digital operations agency set up for clients?", a: "A digital operations agency typically sets up project management software, LinkedIn automation sequences, social media scheduling, reporting dashboards, and workflow automations that connect your tools together." },
    ],
  },
  {
    id: "03",
    slug: "website-costing-you-clients",
    title: "What Your Website Is Costing You Every Month (Even If It Looks Fine)",
    category: "Marketing",
    readTime: "6 min",
    date: "May 2025",
    datePublished: "2025-05-01",
    teaser: "A slow site, no clear CTA, and poor local SEO can cost you 10–30 leads a month without you realizing it.",
    tldr: "Most service business websites fail at three things: they load slowly, they don't tell visitors what to do next, and Google can't find them for local searches. Fixing all three can double your monthly inquiries without spending more on ads.",
    metaDescription: "A slow load time, no clear CTA, and poor local SEO can cost a service business 10–30 leads per month. Here's how to audit your site in 20 minutes.",
    relatedSlugs: ["small-business-online-visibility", "local-seo-service-businesses"],
    sections: [
      { heading: "The Hidden Cost of a Website That 'Looks Fine'", body: "Most business owners judge their website visually — does it look professional? But Google doesn't judge on looks. It judges on speed, structure, and local relevance. A website that looks great but loads in 5 seconds and has no location keywords is functionally invisible to 80% of potential clients searching in your area." },
      { heading: "Problem 1: Your Site Loads Too Slowly (And Visitors Leave in 3 Seconds)", body: "Google's own data shows that pages taking over 3 seconds to load see bounce rates increase by 32%. The average service business website loads in 6.7 seconds on mobile. Every second of delay reduces conversions by 7%. Use Google PageSpeed Insights (free) to get your current score and the top 3 things to fix." },
      { heading: "Problem 2: Visitors Don't Know What to Do Next", body: "If your homepage doesn't have one clear, visible call to action above the fold — 'Book a free consultation,' 'Get a quote,' or 'Schedule a call' — you're losing visitors who were actually interested. Most service websites bury their contact information in the footer or use 'Contact Us' as their only CTA, which has the lowest click rate of any button label." },
      { heading: "Problem 3: Google Isn't Showing You to Local Searchers", body: "Local SEO for service businesses starts with your Google Business Profile, not your website. But your website still needs to mention your city and service type in the title tag, H1, and first paragraph of each service page. Without this, you won't rank for '[your service] + [your city]' searches — which represent the majority of high-intent local queries." },
      { heading: "The 20-Minute Website Audit You Can Do Right Now", body: "Run your URL through PageSpeed Insights. Then check: does your homepage load in under 3 seconds? Does it mention your city and primary service in the headline? Is there one clear CTA visible without scrolling? Can someone book or contact you in under 2 clicks? Is your phone number visible in the header? If any answer is no, that's a conversion leak." },
    ],
    keyTakeaways: [
      "Pages over 3 seconds load time see 32% higher bounce rates",
      "A weak CTA is the #1 conversion killer on service business websites",
      "Local keyword placement on service pages is required to rank in local search",
      "Most website problems can be diagnosed with free tools in under 20 minutes",
      "Fixing speed + CTA + local SEO can double monthly inquiries without more ad spend",
    ],
    faqs: [
      { q: "Why is my website not generating leads?", a: "The three most common reasons a service business website fails to generate leads are: slow page load speed, no clear call-to-action above the fold, and poor local SEO — meaning Google isn't showing the site to people searching nearby." },
      { q: "How fast should a business website load?", a: "Google recommends a page load time under 2.5 seconds (measured as Largest Contentful Paint). Pages that load in over 3 seconds see bounce rates increase by 32%, according to Google's own data." },
      { q: "What makes a good service business website?", a: "A high-performing service business website loads in under 2.5 seconds, states clearly who you serve and what you do above the fold, has one obvious CTA, and includes location-specific keywords on service pages." },
      { q: "How do I get my business website to show up on Google?", a: "To rank on Google, your website needs a complete Google Business Profile, location-specific keywords on service pages, fast load speed, mobile optimization, and consistent NAP (name, address, phone) information across the web." },
      { q: "What is a website audit?", a: "A website audit reviews your site's technical performance (speed, mobile responsiveness), SEO (keywords, meta tags, local optimization), and conversion elements (CTA placement, contact accessibility) to identify what's costing you leads." },
    ],
  },
  {
    id: "04",
    slug: "linkedin-automation-service-businesses",
    title: "LinkedIn for Service Businesses: A Practical Automation Guide for 2026",
    category: "Marketing",
    readTime: "8 min",
    date: "April 2025",
    datePublished: "2025-04-15",
    teaser: "LinkedIn has the highest B2B lead-to-client conversion rate of any social platform. Here's how to use it.",
    tldr: "LinkedIn works for service businesses because your clients are already there making professional decisions. The key is consistent content (4–8 posts/month) combined with targeted connection sequences — not cold pitching, but value-first outreach that builds trust before the ask.",
    metaDescription: "LinkedIn has the highest B2B lead-to-client conversion rate of any social platform. Here's how service businesses set up content and automation to book more calls.",
    relatedSlugs: ["digital-tools-service-business", "small-business-online-visibility"],
    sections: [
      { heading: "Why LinkedIn Outperforms Every Other Platform for Service Businesses", body: "LinkedIn has a lead-to-client conversion rate of 2.74% — nearly 3x higher than Facebook or X. For service businesses targeting other professionals or companies, this isn't a coincidence: LinkedIn users are in a professional mindset when they browse, making them far more receptive to service-oriented content than users scrolling Instagram for entertainment." },
      { heading: "The Difference Between LinkedIn Content and LinkedIn Automation", body: "Content is what you post publicly — articles, carousels, short posts sharing insights. Automation handles the distribution layer: scheduling connection requests to your target audience and sending personalized follow-up messages. They work together. Your content builds credibility; your automation puts that credibility in front of the right people at scale." },
      { heading: "How to Build a LinkedIn Content Strategy in One Afternoon", body: "Start with 12 post ideas: 4 lessons from client work (anonymized), 4 answers to the most common questions you get asked, and 4 industry observations or opinions. That's 3 months of content at one post per week. Write them in batches, schedule them with Metricool or Taplio, and you've eliminated the 'what do I post today?' decision for an entire quarter." },
      { heading: "Setting Up Your First Automation Sequence", body: "A basic LinkedIn outreach sequence looks like this: Day 1 — connection request with a personalized note mentioning something specific about their business or recent post. Day 3 (after acceptance) — a value-first message sharing a relevant resource or insight, no pitch. Day 7 — a soft ask: 'Would it make sense to jump on a 20-minute call?' Most booked calls come from the Day 7 message — but only because Days 1 and 3 built enough trust first." },
      { heading: "What to Say in Connection Requests and Follow-Ups", body: "The worst LinkedIn messages open with 'I'd love to connect' or immediately pitch a service. The best ones reference something specific: a post they wrote, a mutual connection, or a recent company milestone. The rule is simple: make every message about them, not you. 'I saw you recently expanded your team — congrats. I work with [industry type] businesses on their digital operations. Would love to connect.' That's it." },
      { heading: "How to Measure Whether Your LinkedIn is Working", body: "Track three metrics monthly: connection acceptance rate (benchmark: 30–45%), reply rate on follow-up messages (benchmark: 10–20%), and booked calls per month from LinkedIn. If your acceptance rate is below 30%, your targeting or request message needs work. If your reply rate is below 10%, your follow-up content isn't providing enough value." },
    ],
    keyTakeaways: [
      "LinkedIn has a 2.74% lead-to-client conversion rate — nearly 3x Facebook",
      "Content builds credibility; automation distributes that credibility at scale",
      "Batch 12 post ideas at once — that's 3 months of content",
      "A 3-message sequence (connection → value → soft ask) outperforms any cold pitch",
      "Benchmark: 30–45% connection rate, 10–20% reply rate",
    ],
    faqs: [
      { q: "Does LinkedIn work for small service businesses?", a: "Yes. LinkedIn has a lead-to-client conversion rate of 2.74%, nearly three times higher than Facebook or X. For service businesses targeting other professionals or businesses, it is consistently the highest-ROI social platform." },
      { q: "What is LinkedIn automation and is it safe?", a: "LinkedIn automation uses tools like Taplio to schedule content posts and send personalized connection requests and follow-up messages at scale. It is safe when used with reasonable daily limits and personalized messaging — LinkedIn penalizes spam-volume behavior, not strategic automation." },
      { q: "How many LinkedIn posts should a business publish per month?", a: "For service businesses, 4–8 posts per month is the recommended baseline. Posting 1–2 times per week maintains algorithm visibility without sacrificing content quality. Consistency matters more than volume." },
      { q: "How do I generate leads on LinkedIn without spamming?", a: "Focus on value-first outreach: reference something specific about the recipient, share a useful resource before making any ask, and only pitch after two non-promotional messages. The goal is a conversation, not an immediate sale." },
      { q: "How long does it take to see LinkedIn results?", a: "With consistent posting (4+/month) and active outreach (10–20 connection requests/day), most service businesses begin seeing booked calls from LinkedIn within 4–8 weeks. Content reach builds more slowly — expect 3–6 months for organic reach to compound meaningfully." },
    ],
  },
  {
    id: "05",
    slug: "how-to-choose-digital-marketing-agency",
    title: "How to Choose a Digital Marketing Agency Without Getting Burned",
    category: "Strategy",
    readTime: "5 min",
    date: "April 2025",
    datePublished: "2025-04-01",
    teaser: "Red flags, green flags, and the five questions to ask before you sign anything.",
    tldr: "The biggest red flags in a digital agency are vague deliverables, long lock-in contracts, no reporting, outsourced work, and guarantees that sound too good. The best agencies give you fixed-scope work, flat monthly pricing, and plain-English reports every month.",
    metaDescription: "Most service businesses get burned by digital agencies at least once. Here are the red flags, the green flags, and the 5 questions to ask before signing anything.",
    relatedSlugs: ["cost-of-diy-digital-marketing", "small-business-online-visibility"],
    sections: [
      { heading: "Why So Many Business Owners Have Been Burned by Agencies", body: "The digital marketing industry has a trust problem. Long contracts, vague deliverables, and reports full of metrics that don't connect to revenue have made many business owners deeply skeptical — and rightfully so. The good news: the red flags are consistent and easy to spot before you sign anything." },
      { heading: "5 Red Flags That Tell You to Walk Away", body: "Walk away if you see any of these: (1) They can't tell you exactly who on their team will be doing your work. (2) They guarantee specific Google rankings — no ethical SEO agency makes ranking guarantees. (3) The contract is 12+ months with no exit clause. (4) Their reports show traffic and impressions but never contact form submissions or calls. (5) They can't explain what they do in plain English." },
      { heading: "5 Green Flags That Tell You You've Found a Good Partner", body: "Look for: (1) Flat monthly pricing with clearly defined deliverables in writing. (2) Month-by-month or short-term (3–4 month) contracts that renew based on results. (3) Reports that connect directly to leads and revenue, not just traffic. (4) They ask about your business goals before talking about services. (5) They're transparent about what they can and can't do." },
      { heading: "The 5 Questions to Ask Before Signing Any Contract", body: "Ask: (1) Who specifically will be doing my work? (2) What exactly am I getting each month — in writing? (3) How will I know if it's working, and what metrics will you report? (4) What happens if I want to cancel? (5) Can I talk to a current client in my industry? Any agency that can't answer all five clearly is not ready to manage your business." },
      { heading: "What a Fair Agency Contract Actually Looks Like", body: "A fair contract is 3–4 months minimum (enough time for strategies to show results), has a clear exit clause, defines deliverables explicitly, and renews month-to-month after the initial term at the same rate. The initial term exists to give strategies time to compound — not to trap you. If an agency needs 12 months to show you results, that's a red flag, not a feature." },
    ],
    keyTakeaways: [
      "Guaranteed rankings are the #1 red flag in digital marketing",
      "Reports should connect to leads and revenue — not just traffic",
      "3–4 month minimum contracts are fair; 12+ months without exit clauses are not",
      "Ask for a client reference in your industry before signing",
      "Any agency that can't define deliverables in plain English is not ready for your business",
    ],
    faqs: [
      { q: "How do I know if a digital marketing agency is good?", a: "A good digital marketing agency provides clear deliverables in writing, shows you monthly reports with real metrics, has a fixed pricing structure with no hidden fees, and can explain exactly who on their team will be doing your work." },
      { q: "What should a digital marketing agency charge?", a: "For small service businesses, a reputable digital marketing agency typically charges between $150 and $2,000 per month depending on scope. Flat monthly retainers are more predictable than hourly billing. Build fees (one-time setup work) are usually separate from monthly management." },
      { q: "What questions should I ask a marketing agency?", a: "Ask: Who will be doing my work? What exactly do I get each month? How will I know if it's working? What are the contract terms and how do I cancel? Can I speak to a current client?" },
      { q: "What is a fair contract length for a digital marketing agency?", a: "A 3–4 month minimum is fair — it gives strategies enough time to show measurable results. Anything longer than 6 months without an exit clause is a red flag." },
      { q: "What does a digital marketing agency actually do?", a: "A full-service digital marketing agency manages your website, SEO, social media content, email campaigns, reporting, and sometimes software setup — either individually or as a bundled service." },
    ],
  },
  {
    id: "06",
    slug: "local-seo-service-businesses",
    title: "SEO for Local Service Businesses: What Actually Moves the Needle",
    category: "SEO",
    readTime: "7 min",
    date: "March 2025",
    datePublished: "2025-03-15",
    teaser: "Four things ranked by impact — and exactly how long each one takes to show results.",
    tldr: "For local service businesses, Google Business Profile optimization delivers the fastest SEO results. After that, consistent reviews, accurate NAP citations, and location-specific service pages compound your visibility over 60–90 days.",
    metaDescription: "Local SEO for service businesses comes down to four things: Google Business Profile, local citations, review velocity, and on-page content. Here's how to prioritize by impact.",
    relatedSlugs: ["website-costing-you-clients", "small-business-online-visibility"],
    sections: [
      { heading: "Why Local SEO Is Different from Regular SEO", body: "National SEO is a competition against every website on the internet for a keyword. Local SEO is a competition against the 10–20 businesses in your geographic area for service searches with local intent. The rules are different: proximity, review count, GBP completeness, and local citations matter far more than domain authority or backlinks." },
      { heading: "The #1 Priority: Google Business Profile", body: "Your Google Business Profile is not optional — it's the single highest-impact local SEO action available. A fully optimized GBP means: every section completed (description, services, hours, photos), weekly posts, active review responses, and the correct business category selected. According to Google's own data, businesses with complete GBP listings receive 7x more clicks than incomplete ones." },
      { heading: "How Reviews Impact Your Local Search Ranking", body: "Review count, review recency, and review response rate are all direct ranking factors in Google's local algorithm. Businesses with 50+ reviews outrank those with fewer than 10 in 79% of local searches. More importantly: review velocity matters. A business getting 2–3 new reviews per month consistently outperforms one with 40 reviews and no new activity." },
      { heading: "Local Citations: What They Are and Why They Matter", body: "A local citation is any online mention of your business name, address, and phone number (NAP). Directories like Yelp, Yellow Pages, Angi, and industry-specific sites all contribute to your citation profile. The key is consistency — your NAP must be identical everywhere. A single digit difference in your phone number across directories creates a trust signal conflict that suppresses your local ranking." },
      { heading: "On-Page Local SEO: How to Write Service Pages That Rank", body: "Each service page on your website should target one specific service + one specific location. Title tag: '[Service] in [City] | [Business Name]'. H1: same or similar. First paragraph: mention the service and city naturally within the first 100 words. Add a Google Maps embed and your full NAP in the footer of every page. This structure signals local relevance to Google's crawler consistently." },
      { heading: "How Long Does Local SEO Take to Work?", body: "GBP optimizations can improve local visibility within 2–4 weeks. On-page SEO improvements typically take 60–90 days to reflect in rankings. Review accumulation is ongoing — the businesses that win local search long-term are the ones that systematically request reviews from every client as part of their standard process." },
    ],
    keyTakeaways: [
      "GBP optimization delivers the fastest local SEO results — 2–4 weeks",
      "Businesses with complete GBP listings get 7x more clicks than incomplete ones",
      "Review velocity beats review count — consistent new reviews outperform stale ones",
      "NAP consistency across all directories is required for local ranking signals",
      "Each service page should target one service + one city",
    ],
    faqs: [
      { q: "What is local SEO and why does it matter for service businesses?", a: "Local SEO is the practice of optimizing your online presence to appear in searches with local intent — 'plumber near me,' 'law firm in Phoenix,' etc. For service businesses, local search is where most high-intent clients find you." },
      { q: "How do I rank higher on Google Maps?", a: "Complete every section of your Google Business Profile, post updates weekly, respond to all reviews within 24 hours, ensure your NAP is identical across every directory listing, and add photos consistently." },
      { q: "How many Google reviews do I need to rank locally?", a: "There's no magic number, but businesses with 50+ reviews consistently outperform those with fewer than 10. More important than total count is review velocity — getting 2–3 new reviews per month consistently." },
      { q: "What is a local citation in SEO?", a: "A local citation is any mention of your business name, address, and phone number on an external website — directories, review sites, local news, industry associations. Consistent citations signal legitimacy to Google's local algorithm." },
      { q: "How long does local SEO take to work?", a: "GBP optimizations: 2–4 weeks. On-page SEO: 60–90 days. Review accumulation is ongoing. Most businesses see meaningful improvement in map pack visibility within 60 days of systematic GBP optimization and review requests." },
      { q: "Does Google Business Profile help with SEO?", a: "Yes. A fully optimized GBP is the single highest-impact local SEO action a service business can take. It directly influences map pack rankings, which account for the majority of clicks for local service searches." },
    ],
  },
  {
    id: "07",
    slug: "cost-of-diy-digital-marketing",
    title: "The Real Cost of DIY Digital Marketing for Service Businesses",
    category: "Industry",
    readTime: "6 min",
    date: "March 2025",
    datePublished: "2025-03-01",
    teaser: "The real cost isn't the software subscription. It's 6–12 hours of your time, every week.",
    tldr: "The real cost of DIY digital marketing isn't the software subscription — it's 6–12 hours of your time every week, applied to a skill set outside your expertise. For most service business owners, that time is worth more than what they'd pay an agency to do it better.",
    metaDescription: "Business owners who manage their own digital marketing spend an average of 6–12 hours per week on it. Here's the real cost — and when outsourcing makes financial sense.",
    relatedSlugs: ["how-to-choose-digital-marketing-agency", "digital-tools-service-business"],
    sections: [
      { heading: "What 'DIY Digital Marketing' Actually Costs (It's Not Just Your Time)", body: "When business owners tally the cost of managing their own marketing, they usually count the software subscriptions — $15/month for Canva, $50/month for a scheduler, maybe $100/month for an email tool. That's $165/month. But the actual cost includes the 6–12 hours per week spent on content creation, scheduling, monitoring, and reporting — time that isn't going toward billable client work." },
      { heading: "The Opportunity Cost: What Could You Be Doing Instead?", body: "If you bill at $100/hour and spend 8 hours per week on marketing, that's $800/week of capacity you're not selling. Over a month: $3,200 in potential revenue displaced by marketing tasks that someone else could handle for $150–$500/month. The math almost never favors DIY at scale — unless your hourly rate is very low or you genuinely enjoy doing it." },
      { heading: "The Quality Gap: What an Expert Does That You Probably Don't", body: "The time cost is just one dimension. The quality gap is the other. A professional creates SEO-optimized content, understands algorithm patterns across platforms, knows how to write copy that converts, and builds reporting that shows what's actually working. Most business owners doing their own marketing produce inconsistent content that doesn't convert — not because they lack intelligence, but because marketing expertise is a full-time skill." },
      { heading: "When DIY Makes Sense (and When It Doesn't)", body: "DIY makes sense when: you're in the first 6 months of business and need to learn your audience before delegating, you have a team member with genuine marketing skills who isn't at capacity, or your hourly rate is low enough that the math works. It stops making sense when you're a consistent revenue-generating business and marketing is preventing you from doing the work that actually generates that revenue." },
      { heading: "How to Calculate Whether an Agency Pays for Itself", body: "Simple formula: (Hours/week on marketing) × (your hourly rate or what you could bill) × 4 weeks = monthly opportunity cost. If that number is higher than what an agency charges for comparable work, outsourcing is financially rational. For a business owner billing $75/hour who spends 8 hours/week on marketing, the opportunity cost is $2,400/month — against a $300/month management plan." },
    ],
    keyTakeaways: [
      "DIY digital marketing costs 6–12 hours/week — not just software subscriptions",
      "An owner billing $100/hour displaces $3,200/month in potential revenue doing their own marketing",
      "The quality gap is the second cost: professional marketing converts better",
      "Calculate your opportunity cost before deciding to keep it in-house",
      "Outsourcing makes financial sense when the cost of the agency is less than your displaced billable time",
    ],
    faqs: [
      { q: "Is it worth hiring a digital marketing agency for a small business?", a: "It is worth hiring a digital marketing agency when the cost of the agency is less than the value of the time you're spending on marketing yourself — or when the quality gap between what you produce and what a professional produces is costing you clients." },
      { q: "How many hours does digital marketing take per week?", a: "For a service business managing its own digital marketing, average time spent is 6–12 hours per week — covering social media content creation, email, review management, and basic SEO tasks. This is time taken directly from billable client work." },
      { q: "Can I do my own SEO and social media?", a: "Yes, but the quality gap is real. Professional marketers understand algorithm patterns, copy that converts, and how to connect tactics to results. Most business owners who manage their own marketing produce inconsistent output that doesn't compound the way professional, systematic marketing does." },
      { q: "When should a small business hire a marketing agency?", a: "Hire a marketing agency when: your digital presence isn't generating consistent inquiries, you're spending more than 5 hours per week on marketing, or you're growing fast enough that consistent marketing is needed to sustain that growth." },
      { q: "What does a digital marketing agency do that I can't do myself?", a: "A professional agency brings systematic execution — consistent posting, SEO-optimized content, monthly reporting tied to leads, and cross-platform coordination — applied every month without the competing priorities you face as a business owner." },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getRelatedArticles(article: Article): Article[] {
  return article.relatedSlugs
    .map((s) => ARTICLES.find((a) => a.slug === s))
    .filter(Boolean) as Article[];
}
